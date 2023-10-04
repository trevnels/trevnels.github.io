/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: ['Cantarell', 'system-ui', 'sans-serif'],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
            '.prose code::before': { content: 'none' },
            '.prose code::after': { content: 'none' }
          },

        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  content: ["./templates/**/*.html", "./theme/**/*.html", "./content/**/*.md"]
}

