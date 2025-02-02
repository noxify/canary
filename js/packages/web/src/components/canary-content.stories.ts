import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import { userEvent } from "@storybook/test";
import { getAllByShadowRole } from "shadow-dom-testing-library";

import "./canary-content";
import "./canary-input";

import "./canary-search";
import "./canary-search-results";

import "./canary-ask";
import "./canary-ask-results";

enum Kind {
  Search,
  SearchCustomSize,
}

const type = (text: string): StoryObj["play"] => {
  return async ({ canvasElement }) => {
    const [input] = getAllByShadowRole(canvasElement, "textbox");
    await userEvent.type(input, text);
  };
};

export default {
  title: "Public/canary-content",
  parameters: { sourceLink: "components/canary-content.stories.ts" },
  render: ({ kind }: { kind: Kind }) => {
    if (kind === Kind.Search) {
      return html`
        <canary-content>
          <canary-input slot="input"></canary-input>
          <canary-search slot="mode">
            <canary-search-results group slot="body"></canary-search-results>
          </canary-search>
          <canary-ask slot="mode">
            <canary-ask-results slot="body"></canary-ask-results>
          </canary-ask>
        </canary-content>
      `;
    }

    if (kind === Kind.SearchCustomSize) {
      return html`
        <canary-content>
          <canary-input slot="input"></canary-input>
          <canary-search slot="mode">
            <canary-search-results group slot="body"></canary-search-results>
          </canary-search>
        </canary-content>
      `;
    }

    throw new Error();
  },
} satisfies Meta<{ kind: Kind }>;

export const Search: StoryObj = {
  args: { kind: Kind.Search },
  play: type("20hi"),
};

export const SearchWithCustomSize: StoryObj = {
  args: { kind: Kind.SearchCustomSize },
  play: type("20hi"),
  parameters: {
    cssprops: {
      "canary-content-max-width": { value: "200px" },
      "canary-content-max-height": { value: "400px" },
    },
  },
};
