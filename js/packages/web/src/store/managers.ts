import { ContextProvider } from "@lit/context";

import type { OperationContext, ExecutionContext, Delta } from "../types";
import { asyncSleep } from "../utils";
import { executionContext } from "../contexts";

// https://github.com/lit/lit/blob/main/packages/task/src/task.ts
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
export const TaskStatus = {
  INITIAL: 0,
  PENDING: 1,
  COMPLETE: 2,
  ERROR: 3,
} as const;

type ExecutionManagerOptions = {
  searchDebounceMs: number;
  askDebounceMs: number;
};

const ABORT_REASON_MANAGER = "manager";

export class ExecutionManager {
  private _ctx: ContextProvider<{ __context__: ExecutionContext }, any>;
  private _abortController = new AbortController();

  private _options: ExecutionManagerOptions;
  private _callId = 0;

  private _initialState: ExecutionContext = {
    status: TaskStatus.INITIAL,
    ask: { response: "" },
    search: { sources: [], suggestion: { questions: [] } },
  };

  constructor(host: HTMLElement, options: ExecutionManagerOptions) {
    this._options = options;
    this._ctx = new ContextProvider(host, {
      context: executionContext,
      initialValue: this._initialState,
    });
  }

  get ctx() {
    return this._ctx.value;
  }

  set ctx(ctx: ExecutionContext) {
    this._ctx.setValue(ctx);
  }

  abort() {
    this._abortController?.abort(ABORT_REASON_MANAGER);
  }

  private transition(diff: Partial<ExecutionContext>) {
    this.ctx = { ...this.ctx, ...diff };
  }

  async search(query: string, operations: OperationContext) {
    if (!operations.search) {
      return;
    }

    this.transition({ status: TaskStatus.PENDING });
    this._abortController.abort(ABORT_REASON_MANAGER);

    const callId = ++this._callId;
    operations.beforeSearch?.(query);
    await asyncSleep(this._options.searchDebounceMs);

    if (callId !== this._callId) {
      return;
    }

    this._abortController = new AbortController();
    try {
      this.transition({ status: TaskStatus.PENDING });

      const result = await operations.search(
        { query },
        this._abortController.signal,
      );

      this.transition({ status: TaskStatus.COMPLETE, search: result });
    } catch (e) {
      if (e === ABORT_REASON_MANAGER) {
        this.transition({ status: TaskStatus.INITIAL });
        return;
      }

      console.error(e);
      this.transition({ status: TaskStatus.ERROR });
    }
  }

  async ask(query: string, operations: OperationContext) {
    if (!operations.ask) {
      return;
    }

    this.transition({ ...this._initialState, status: TaskStatus.PENDING });
    this._abortController.abort(ABORT_REASON_MANAGER);

    const callId = ++this._callId;
    await asyncSleep(this._options.askDebounceMs);

    if (callId !== this._callId) {
      return;
    }

    this._abortController = new AbortController();
    try {
      this.transition({ ...this._initialState, status: TaskStatus.PENDING });

      await operations.ask(
        { query },
        this._handleDelta.bind(this),
        this._abortController.signal,
      );

      this.transition({ status: TaskStatus.COMPLETE });
    } catch (e) {
      if (e === ABORT_REASON_MANAGER) {
        return;
      }

      console.error(e);
      this.transition({ status: TaskStatus.ERROR });
    }
  }

  private _handleDelta(delta: Delta) {
    if (delta.type === "progress") {
      const response = this.ctx.ask.response + delta.content;
      this.transition({ ask: { response } });
    }

    if (delta.type === "complete") {
      this.transition({ ask: { response: delta.content } });
    }
  }
}
