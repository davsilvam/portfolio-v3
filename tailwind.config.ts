import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        dawn: 'rgb(148, 148, 149)',
        dusk: 'rgb(32, 32, 34)',
        night: 'rgb(18, 18, 18)',
        zenith: 'rgb(255, 255, 255)',
      },
    },
  },
  plugins: [],
}

export default config
