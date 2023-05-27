/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      italiana: ['Italiana', 'serif']
    },
    extend: {
      colors: {
        dawn: 'rgb(148, 148, 149)',
        dusk: 'rgb(32, 32, 34)',
        night: 'rgb(18, 18, 18)',
        zenith: 'rgb(255, 255, 255)'
      }
    }
  },
  plugins: []
}
