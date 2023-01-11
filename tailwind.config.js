/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                openSans: ['"Open Sans"', 'sans-serif'],
            },
            colors: {
                primary: '#0ea5e9',
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
