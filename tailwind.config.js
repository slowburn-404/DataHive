/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js,css}',
    '~/node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif']
      },
      colors: {
        'bee-yellow': '#fcb91d',
        'black': '#000000'

      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
