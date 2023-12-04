import { defineNuxtModule, addPlugin, createResolver,addComponent, addTemplate } from '@nuxt/kit'
import path from "path";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'component-injector',
    configKey: 'componentInjector'
  },
  
  // Default configuration options of the Nuxt module
  defaults: {
    addPlugin:true
  },
  hooks: {
  "components:dirs"(dirs) {
    // Add ./components dir to the list
    dirs.push({
      path: path.resolve(__dirname, "./runtime/components"),pathPrefix: false
    });
  },
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
    addComponent({
      name: 'MySuperComponent', // name of the component to be used in vue templates
      filePath: resolver.resolve('./runtime/components/MySuperComponent.vue')
    })
  }
})
