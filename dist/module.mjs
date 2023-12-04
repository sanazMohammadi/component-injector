import { defineNuxtModule, createResolver, addPlugin, addComponent } from '@nuxt/kit';
import path from 'path';



// -- Unbuild CommonJS Shims --
import __cjs_url__ from 'url';
import __cjs_path__ from 'path';
import __cjs_mod__ from 'module';
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require = __cjs_mod__.createRequire(import.meta.url);
const module = defineNuxtModule({
  meta: {
    name: "component-injector",
    configKey: "componentInjector"
  },
  // Default configuration options of the Nuxt module
  defaults: {
    addPlugin: true
  },
  hooks: {
    "components:dirs"(dirs) {
      dirs.push({
        path: path.resolve(__dirname, "./runtime/components"),
        pathPrefix: false
      });
    }
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    addPlugin(resolver.resolve("./runtime/plugin"));
    addComponent({
      name: "MySuperComponent",
      // name of the component to be used in vue templates
      filePath: resolver.resolve("./runtime/components/MySuperComponent.vue")
    });
  }
});

export { module as default };
