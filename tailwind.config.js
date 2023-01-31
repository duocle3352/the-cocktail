/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                openSans: ['"Open Sans"', 'sans-serif'],
                'zilla-slab': ['"Zilla Slab"', 'serif'],
            },
            colors: {
                'primary-green': '#115e5d',
                'primary-orange': '#fd7c22',
                'primary-bg': '#ededed',
                'ap-bg': '#f6f6f6',
                'light-blue-bg': '#aed1d4',
                darkText: '#0d0c22',
                darkLightText: '#6f6e7b',
                borderColor: '#dcdfe1',
            },
            backgroundImage: {
                'login-bg': "url('/src/assets/images/form-bg.jpg')",
            },
        },
    },
    plugins: [],
};
