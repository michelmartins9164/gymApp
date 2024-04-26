/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      bebas: ['Bebas Neue', 'sans-serif']
    },
    backgroundImage: {
      background_man: 'url(/src/assets/images/man.svg)'
    }
  },
  plugins: [],
}