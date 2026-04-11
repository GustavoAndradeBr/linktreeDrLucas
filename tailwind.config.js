/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#C9A96E',
          light: '#E8D5B0',
          dark: '#8B6F42',
        },
        bg: {
          DEFAULT: '#080809',
          2: '#0F0F11',
          3: '#161618',
          4: '#1E1E22',
        },
      },
    },
  },
  plugins: [],
}
