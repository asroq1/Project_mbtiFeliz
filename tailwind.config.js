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
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            animation: {
                'up-down': 'float 1.5s ease-in-out infinite',
            },
            fontFamily: {
                gmarket: ['var(--font-gmarket)'],
            },
            colors: {
                primary: {
                    DEFAULT: '#FF6B6B',
                    SECOND: '#00648a',
                    THIRD: '#008f9d',
                    FORTH: '#00b997',
                    YELLOW: '#f9f871',
                    ORANGE: '#FF6F3C',
                    TEST: '#FFF7ED',
                    GRAY: '#E5E7EB',
                },
                text: {
                    DEFAULT: '#1F2937',
                    WHITE: '#FFFFFF',
                },
                light: {
                    text: {
                        DEFAULT: '#1F2937',
                        LIGHT: '#6B7280',
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
    },
}
