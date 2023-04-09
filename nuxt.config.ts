import { fileURLToPath } from 'url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url))
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  srcDir: 'src/',
  modules: ['@nuxt/image-edge', '@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: './styles/global.css'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  i18n: {
    locales: [
      {
        code: 'pt-BR',
        file: 'pt-BR.json',
        name: 'Português (BR)'
      },
      {
        code: 'en-US',
        file: 'en-US.json',
        name: 'English'
      }
    ],
    defaultLocale: 'pt-BR',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    vueI18n: {
      legacy: false,
      locale: 'pt-BR',
      fallbackLocale: 'pt-BR',
      availableLocales: ['pt-BR', 'en-US']
    }
  }
})
