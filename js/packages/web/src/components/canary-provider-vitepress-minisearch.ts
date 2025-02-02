import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import type { SearchFunction, SearchResult } from "../types";
import { wrapper } from "../styles";
import { createEvent } from "../store";
import { LOCAL_SOURCE_NAME } from "../constants";

const NAME = "canary-provider-vitepress-minisearch";

type MinisearchResult = {
  id: string;
  title: string;
  titles: string[];
};

@customElement(NAME)
export class CanaryProviderVitepressMinisearch extends LitElement {
  @property({ type: String }) localeIndex = "root";
  @property({ type: Object }) miniSearchOptions: any = {
    searchOptions: {},
    options: {},
  };

  @state()
  minisearch: {
    search: (query: string) => MinisearchResult[];
  } | null = null;

  async connectedCallback() {
    super.connectedCallback();
    const data = await this._importIndexData();
    const index = await this._buildIndex(data);

    this.minisearch = {
      search: (query) => index.search(query) as unknown as MinisearchResult[],
    };

    this.dispatchEvent(
      createEvent({
        type: "register_operations",
        data: { search: this.search },
      }),
    );
  }

  render() {
    return html`<slot></slot>`;
  }

  private async _importIndexData() {
    try {
      // @ts-expect-error
      const m = await import("@localSearchIndex");
      const data = (await m.default[this.localeIndex]?.())?.default;
      return data;
    } catch (e) {
      throw new Error(`Failed to import index from '@localSearchIndex': ${e}`);
    }
  }

  private async _buildIndex(data: any) {
    try {
      const { default: MiniSearch } = await import(
        /* @vite-ignore */
        // @ts-ignore
        "minisearch"
      );

      // https://github.com/vuejs/vitepress/blob/8f31a4c/src/client/theme-default/components/VPLocalSearchBox.vue#L72-L87
      const index = MiniSearch.loadJSON(data, {
        fields: ["title", "titles", "text"],
        storeFields: ["title", "titles"],
        searchOptions: {
          fuzzy: 0.2,
          prefix: true,
          boost: { title: 4, text: 2, titles: 1 },
          ...this.miniSearchOptions.searchOptions,
        },
        ...this.miniSearchOptions.options,
      });

      return index;
    } catch (e) {
      throw new Error(`Failed to import minisearch: ${e}`);
    }
  }

  static styles = wrapper;

  search: SearchFunction = async ({ query }, _signal) => {
    return new Promise((resolve) => {
      if (!this.minisearch) {
        resolve({ sources: [] });
        return;
      }

      const hits: SearchResult[] = this.minisearch
        .search(query)
        .map((result) => ({
          url: new URL(result.id, window.location.origin).toString(),
          title: result.title,
          sub_results: [
            {
              url: new URL(result.id, window.location.origin).toString(),
              title: result.title,
            },
          ],
        }));

      resolve({
        sources: [{ name: LOCAL_SOURCE_NAME, type: "webpage", hits }],
      });
    });
  };
}

declare global {
  interface HTMLElementTagNameMap {
    [NAME]: CanaryProviderVitepressMinisearch;
  }
  namespace JSX {
    interface IntrinsicElements {
      [NAME]: any;
    }
  }
}
