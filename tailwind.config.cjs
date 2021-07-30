const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{js,svelte}'],
    darkMode: false,
    theme: {
        screens: {
            xs: '475px',
            ...defaultTheme.screens,
        },
    },
    variants: {},
    plugins: [],
}
