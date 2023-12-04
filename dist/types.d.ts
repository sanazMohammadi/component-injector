
import { ModuleOptions } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig { ['componentInjector']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['componentInjector']?: ModuleOptions }
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['componentInjector']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['componentInjector']?: ModuleOptions }
}


export { ModuleOptions, default } from './module'
