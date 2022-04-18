const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./index.html', './src/**/*.{js,svelte}'],
    theme: {
        screens: {
            xs: '475px',
            ...defaultTheme.screens,
        },
    },
    variants: {},
    plugins: [],
}
