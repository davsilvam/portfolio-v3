import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
  },
  srcDir: 'src/',
  modules: ['@nuxtjs/tailwindcss', 'nuxt-module-eslint-config'],
  tailwindcss: {
    cssPath: './styles/global.css',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
