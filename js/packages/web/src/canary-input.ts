import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { CANARY_MODE_PREV, CANARY_MODE_NEXT } from "./events";

import { consume } from "@lit/context";
import { queryContext } from "./contexts";

import "./canary-hero-icon";

const STYLE = css`
  :host {
    flex-grow: 1;
  }

  .container {
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    color: var(--canary-color-gray-1);
    background-color: var(--canary-color-black);
  }

  input {
    width: 100%;
    height: 30px;

    outline: none;
    border: none;
    font-size: 16px;
    color: var(--canary-color-gray-1);
    background-color: var(--canary-color-black);
  }

  input::placeholder {
    color: var(--canary-color-gray-3);
    font-size: 14px;
  }

  canary-hero-icon {
    width: 24px;
  }
`;

@customElement("canary-input-search")
export class CanaryInputSearch extends LitElement {
  @consume({ context: queryContext, subscribe: true })
  @property({ reflect: true })
  value = "";

  render() {
    return html`
      <div class="container">
        <canary-hero-icon name="magnifying-glass"></canary-hero-icon>
        <input
          type="text"
          value=${this.value}
          autocomplete="off"
          placeholder="Search for anything..."
          @input=${this._handleInput}
          @keydown=${this._handleKeyDown}
          autofocus
          onfocus="this.setSelectionRange(this.value.length,this.value.length);"
        />
      </div>
    `;
  }

  static styles = STYLE;

  private _handleInput(e: KeyboardEvent) {
    const input = e.target as HTMLInputElement;
    const event = new CustomEvent("change", { detail: input.value });
    this.dispatchEvent(event);
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Tab") {
      e.preventDefault();
      const event = new CustomEvent(CANARY_MODE_NEXT);
      this.dispatchEvent(event);
    }
  }
}

@customElement("canary-input-ask")
export class CanaryInputAsk extends LitElement {
  @consume({ context: queryContext, subscribe: true })
  @property({ reflect: true })
  value = "";

  render() {
    return html`
      <div class="container">
        <canary-hero-icon name="question-mark-circle"></canary-hero-icon>
        <input
          type="text"
          value=${this.value}
          autocomplete="off"
          placeholder="Ask anything..."
          @input=${this._handleInput}
          @keydown=${this._handleKeyDown}
          autofocus
          onfocus="this.setSelectionRange(this.value.length,this.value.length);"
        />
      </div>
    `;
  }

  static styles = STYLE;

  private _handleInput(e: KeyboardEvent) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      const event = new CustomEvent("change", { detail: this.value });
      this.dispatchEvent(event);

      this.value = "";
      (e.target as HTMLInputElement).value = "";
    }

    if (e.key === "Tab") {
      e.preventDefault();
      const event = new CustomEvent(CANARY_MODE_PREV);
      this.dispatchEvent(event);
    }
  }
}
