# Docusaurus

<!--@include: ../callout.md-->

## Installation

::: tip
If you were using `@getcanary/docusaurus-theme-search-pagefind` before, please remove it.
:::

```bash
npm install @getcanary/web
```

## Configuration

```bash
npm run swizzle @docusaurus/theme-classic SearchBar -- --eject
```

After ejecting, you can edit generated files in `src/theme/SearchBar`.

```html-vue
<canary-root framework="docusaurus">
  <canary-provider-pagefind> // [!code --]
    <canary-provider-cloud api-key="KEY" api-base="https://cloud.getcanary.dev"> // [!code ++]
      <!-- Rest of the code -->
    </canary-provider-cloud> // [!code ++]
  </canary-provider-pagefind> // [!code --]
</canary-root>
```

Take a look at our implementation of `docusaurus-theme-search-pagefind` [here](https://github.com/fastrepl/canary/blob/main/js/packages/docusaurus-theme-search-pagefind/src/theme/SearchBar/Canary.jsx).
