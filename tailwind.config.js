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
                'bee-yellow': 'fcbd2b',
                'black': '#000000'

            },
            bannerOverlayBefore: {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                background: '#000000',
                opacity: 0.6
            },
        },
    },
    plugins: [require('flowbite/plugin')],
}