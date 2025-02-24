'use client'

import React from 'react'
import Image from 'next/image'
import { CopyClipboardProps } from './CopyClipboard'

// type KakaoShareButtonProps = {
//     description: string
//     imageUrl?: string
//     title?: string
// }

const KakaoShareButton = ({
    description = '나의 여행 MBTI 결과를 확인해보세요!',
    imageUrl = '/assets/images/share-thumbnail.png',
    title = '여행 MBTI 테스트',
}: CopyClipboardProps) => {
    const handleShareToKakao = () => {
        const { Kakao, location } = window

        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: title,
                description: description,
                imageUrl: imageUrl,
                link: {
                    mobileWebUrl: location.href,
                    webUrl: location.href,
                },
            },

            buttons: [
                {
                    title: '결과 보기',
                    link: {
                        mobileWebUrl: location.href,
                        webUrl: location.href,
                    },
                },
                {
                    title: '테스트 하기',
                    link: {
                        mobileWebUrl: `${location.origin}`,
                        webUrl: `${location.origin}`,
                    },
                },
            ],
        })
    }

    return (
        <div
            onClick={handleShareToKakao}
            className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
        >
            <Image
                className="w-[50px] h-[50px] cursor-pointer rounded-full shadow-lg hover:shadow-xl"
                src="/assets/icons/kakao.svg"
                alt="카카오톡 공유하기"
                width={50}
                height={50}
            />
        </div>
    )
}

export default KakaoShareButton
