/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './**/*.{html,js}',
        './**/*.js',
        '~/node_modules/flowbite/**/*.js'
    ],
    theme: {
        extend: {
            fontFamily: {
                Inter: ['Inter', 'sans-serif']
            },
            colors: {
                'bee-yellow': '#fcb91d',
                'black': '#000000',
                yellow: {
                    700: '#fcb91d'
                }

            },
        },
    },
    plugins: [require('flowbite/plugin')],
}