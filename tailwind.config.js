/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#242A56',
          50: '#5B65B8',
          100: '#4F59AF',
          200: '#3E4691',
          300: '#323973',
          400: '#2B3264',
          500: '#242A56',
          600: '#181D3A',
          700: '#0C101E',
          800: '#000302',
          900: '#000000'
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
