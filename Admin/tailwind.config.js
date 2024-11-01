const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")


module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "node_modules/preline/dist/*.js",
    ],
    theme: {

        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },

        fontFamily: {
            'base': ['"Montserrat"', 'sans-serif'],
        },

        extend: {
            colors: {
                primary: {
                    ...colors.blue,
                    "DEFAULT": colors.violet[500],
                },

                'secondary': '#747a80',

                'success': '#20b799',

                'info': '#3cbade',

                'warning': '#efb540',

                'danger': '#fa5944',

                'light': '#e9edf3',

                'dark': '#222a3e',

                default: {
                    ...colors.zinc,
                },

                'body': colors.zinc[100],
            },

            spacing: {
                15: '60px',
                18: '72px',
                'sidenav': '280px',
                'layout-gap': '16px',
            },

            zIndex: {
                '60': '60',
                '70': '70',
            },

            minWidth: theme => ({
                ...theme('width'),
            }),

            maxWidth: theme => ({
                ...theme('width'),
            }),

            minHeight: theme => ({
                ...theme('height'),
            }),

            maxHeight: theme => ({
                ...theme('height'),
            }),

            scale: {
                '25': '0.25',
            },
        },
    },

    plugins: [
        require('preline/plugin'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),

        plugin(
            function ({ addUtilities, theme }) {
                addUtilities({
                    '.fill-1': {
                        fontVariationSettings: "'FILL' 1",
                    },
                })
            }
        ),

        iconsPlugin({
            collections: getIconCollections("all"),
        }),
    ],
}