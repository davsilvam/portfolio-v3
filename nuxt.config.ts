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
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/styles/tailwind.css'
  }
})
