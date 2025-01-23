import { fileURLToPath } from "url";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  srcDir: "./src",

  build: {
    transpile: ["nuxt", "vite-plugin-vue-inspector", "@vue/runtime-core"],
  },

  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "#widgets": fileURLToPath(new URL("./src/widgets", import.meta.url)),
        "#layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
      },
    },
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  modules: ["@nuxt/eslint", "@nuxt/eslint"],

  eslint: {
    config: {
      stylistic: true,
    },
  },
});
