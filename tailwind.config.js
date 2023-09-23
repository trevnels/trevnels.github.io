/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': {content: 'none'},
            'blockquote p:first-of-type::after': {content: 'none'}
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

