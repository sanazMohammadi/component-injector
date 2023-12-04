export default ({
  buildModules: ['@nuxt/typescript-build'],
  modules: ['../src/module.ts'],
  plugins: [
    { src: "~/plugins/module.js" },
  ]
})
