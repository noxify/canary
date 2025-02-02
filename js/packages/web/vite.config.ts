/// <reference types="vitest" />

import { resolve } from "path";

import { defineConfig } from "vite";
import unocss from "unocss/vite";
import dts from "vite-plugin-dts";

import { partsReportPlugin, cssVariablesReportPlugin } from "./plugins";

export default defineConfig({
  test: {
    environmentMatchGlobs: [["./src/store/*.test.ts", "happy-dom"]],
  },
  plugins: [
    partsReportPlugin(),
    cssVariablesReportPlugin(),
    unocss({ mode: "shadow-dom" }),
    dts({ exclude: ["**/*.stories.*"] }),
  ],
  build: {
    minify: "terser",
    terserOptions: {
      format: {
        comments: /webpackIgnore|@vite/,
      },
    },
    lib: {
      entry: [
        ...[
          "canary-root",
          "canary-styles",
          "canary-provider-mock",
          "canary-provider-cloud",
          "canary-provider-pagefind",
          "canary-provider-vitepress-minisearch",
          "canary-callout",
          "canary-callout-cal",
          "canary-callout-calendly",
          "canary-callout-slack",
          "canary-callout-discord",
          "canary-modal",
          "canary-content",
          "canary-trigger-searchbar",
          "canary-trigger-logo",
          "canary-input",
          "canary-search",
          "canary-search-results",
          "canary-search-results-tabs",
          "canary-search-suggestions",
          "canary-search-empty",
          "canary-search-options",
          "canary-ask",
          "canary-ask-results",
          "canary-feedback-text",
          "canary-feedback-textarea",
          "canary-reference",
          "canary-tooltip",
          "canary-footer",
          "canary-media-query",
          "canary-mode-tabs",
          "canary-mode-breadcrumb",
          "canary-feedback-page",
        ].map((name) => `components/${name}`),
        ...["contexts", "controllers", "types/index", "utils", "store/index"],
      ].reduce(
        (acc, cur) => ({ ...acc, [cur]: resolve(__dirname, `src/${cur}.ts`) }),
        {} as Record<string, string>,
      ),
      formats: ["es"],
      fileName: (_, entryName) => `${entryName}.js`,
    },
    outDir: "dist",
    rollupOptions: {
      external: ["@localSearchIndex", "minisearch"],
    },
  },
});
