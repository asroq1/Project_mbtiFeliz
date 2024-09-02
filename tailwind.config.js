/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0163b2',
                    2: '#ACE2E1',
                    3: '#3392C5',
                    4: '#0077B6',
                },
                secondary: '#9cc3d5',
                // button: {
                //     DEFAULT: '9cc3d5',
                // },
                // font: {
                //     DEFAULT: '9cc3d5',
                // },
                light: {
                    text: {
                        DEFAULT: '#F7EEDD',
                        1: '#CED4DA',
                        2: '#868E96',
                        3: '#495057',
                    },
                },
                dark: {
                    text: {
                        DEFAULT: '#ECECEC',
                        1: '#D9D9D9',
                        2: '#ACACAC',
                        3: '#595959',
                    },
                },
            },
        },
    },
    plugins: [],
}
