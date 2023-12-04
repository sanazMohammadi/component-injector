# component-injector
## Description:You can module the useable code separately and add it to your projects as a package

[![Nuxt][nuxt-src]][nuxt-href]

## Quick Setup

1. Add `component-injector` dependency to your project

```bash
Get a release from the module using `‍‍npm pack` and install it in your project or add it to your package.json. Note that the directory of your module and project must be the same.

```
2. Add `component-injector` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'component-injector'
  ]
})
```

That's it! You can now use My Module in your Nuxt app ✨

## Add your component

```bash
1. put your components In `src/runtime/components`.
2. Add this component and plugins and etc in `src/runtime/module.ts` 
```

```js
    addPlugin(resolver.resolve('plugin src'))
    addComponent({
      name: 'name of the component to be used in vue templates',
      filePath: resolver.resolve('component src')
    })
```
## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release in local
npm pack 
```