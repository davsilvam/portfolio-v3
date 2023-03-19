// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },
  modules: ['@nuxt/image-edge', '@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
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
  },
  tailwindcss: {
    cssPath: '~/styles/tailwind.css'
  }
})
