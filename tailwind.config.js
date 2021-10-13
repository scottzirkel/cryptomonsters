const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('@tailwindcss/forms')],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        lime: colors.lime,
      },
      fontFamily: {
        headline: '"Luckiest Guy"',
        handwriting: '"Rock Salt"',
      },
    },
  },
}
