import KakaoScript from '@/components/KakaoScript'
import { gmarketSans } from './font'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
    title: '여행 MBTI 테스트',
    description: '나의 여행 스타일 MBTI 테스트. AI가 알려주는 나를 위한 여행지',
}

declare global {
    interface Window {
        Kakao: any
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko" className={`${gmarketSans.variable}`}>
            {/* <Header /> */}
            <body>
                {children}
                <Analytics />
            </body>
            <KakaoScript />
        </html>
    )
}
