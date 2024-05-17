/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scarlet: '#FF0000',
        paleGray: '#121212',
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      bebas: ['Bebas Neue', 'sans-serif']
    },
    backgroundImage: {
      background_hero: 'url(/src/assets/images/hero.svg)',
      background_about: 'url(/src/assets/images/about.svg)',
      background_testimonials: 'url(/src/assets/images/testimonials.svg)',
      background_testimonials_mask: 'url(/src/assets/images/testimonialsTransparencyMask.svg)'
     },

  },
  plugins: [],
}