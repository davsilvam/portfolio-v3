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
        zenith: 'rgb(255, 255, 255)',
        secondary: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#242424',
          900: '#121212'
        }
      }
    }
  },
  plugins: []
}
