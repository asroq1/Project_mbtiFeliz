import KakaoScript from '@/components/KakaoScript'
import { gmarketSans } from './font'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
    title: '여행 MBTI 테스트',
    description: '나의 여행 스타일 MBTI 테스트. AI가 알려주는 나를 위한 여행지',
    keywords:
        '여행 MBTI, 여행 스타일, MBTI 테스트, 여행지 추천, 성격 유형, 여행 성향',
    authors: [{ name: '여행 MBTI 테스트' }],
    openGraph: {
        title: '여행 MBTI 테스트',
        description:
            '나의 여행 스타일 MBTI 테스트. AI가 알려주는 나를 위한 여행지',
        url: 'https://project-mbti-feliz.vercel.app',
        siteName: '여행 MBTI 테스트',
        images: [
            {
                url: '/img/FelizLogo.png', // 실제 OG 이미지 경로로 변경해주세요
                width: 1200,
                height: 630,
                alt: '여행 MBTI 테스트',
            },
        ],
        locale: 'ko_KR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '여행 MBTI 테스트',
        description:
            '나의 여행 스타일 MBTI 테스트. AI가 알려주는 나를 위한 여행지',
        images: ['/img/FelizLogo.png'], // 실제 트위터 카드 이미지 경로로 변경해주세요
    },
    verification: {
        google: 'mJBZS6HIrFaO4W8pwOlfNhA4NXJ4Pr9s0K4i1Fzxb-I', // Google Search Console 인증 ID로 변경해주세요
    },
    other: {
        'naver-site-verification': 'cd912d14e12531f65de84d65fc64f5d7295d0d5f',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://project-mbti-feliz.vercel.app',
    },
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
            <head>
                <meta
                    name="naver-site-verification"
                    content="YOUR_NAVER_VERIFICATION_ID"
                />
                <link
                    rel="sitemap"
                    type="application/xml"
                    href="/sitemap.xml"
                />
            </head>
            <body>
                {children}
                <Analytics />
                <GoogleAnalytics gaId="G-R0VWD2MV6K" />
            </body>
            <KakaoScript />
        </html>
    )
}
