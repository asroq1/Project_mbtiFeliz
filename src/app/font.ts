// src/app/font.ts
import localFont from 'next/font/local'

export const gmarketSans = localFont({
    src: [
        {
            path: '../../public/fonts/GmarketSansTTFLight.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/GmarketSansTTFMedium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/GmarketSansTTFBold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-gmarket',
})
