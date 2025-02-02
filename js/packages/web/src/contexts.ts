import { createContext } from "@lit/context";

const ctx = <T>(key: string) => createContext<T>(Symbol(key));

import type {
  ThemeContext,
  OperationContext,
  ModeContext,
  TabContext,
  QueryContext,
  ExecutionContext,
} from "./types";

export const themeContext = ctx<ThemeContext>("theme");
export const operationContext = ctx<OperationContext>("operation");
export const modeContext = ctx<ModeContext>("mode");
export const queryContext = ctx<QueryContext>("query");
export const tabContext = ctx<TabContext>("tabs");
export const executionContext = ctx<ExecutionContext>("execution");
