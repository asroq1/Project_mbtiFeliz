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
                    DEFAULT: '#191a27',
                    2: '#ACE2E1',
                    3: '#3392C5',
                    4: '#0077B6',
                },
                secondary: {
                    DEFAULT: '#33355a',
                    2: '#ffcf24',
                },
                light: {
                    text: {
                        DEFAULT: '#9a9a9a',
                        yellow: '#201d3a',
                        white: '#ffffff',
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
            keyframes: {
                loadingAnimation: {
                    '0%, 100%': { transform: 'rotate(-12deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
            animation: {
                'up-down': 'loadingAnimation 1s linear infinite',
            },
        },
    },
    plugins: [],
}
