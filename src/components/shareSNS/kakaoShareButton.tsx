'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { CopyClipboardProps } from './CopyClipboard'

const KakaoShareButton = ({
    description = '나의 여행 MBTI 결과를 확인해보세요!',
    imageUrl = '/assets/images/share-thumbnail.png',
    title = '여행 MBTI 테스트',
}: CopyClipboardProps) => {
    const [isKakaoInitialized, setIsKakaoInitialized] = useState(false);

    useEffect(() => {
        // Check if Kakao is already initialized
        if (window.Kakao && !window.Kakao.isInitialized()) {
            // Initialize with your JavaScript key
            window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY || '');
            setIsKakaoInitialized(true);
        } else if (window.Kakao) {
            setIsKakaoInitialized(true);
        } else {
            // If Kakao SDK is not loaded yet, load it dynamically
            const script = document.createElement('script');
            script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js';
            script.integrity = 'sha384-kYPsUbBPlktVTi8gzh5VcOm5Wp0vHXnSrLQ/c6Rl5z/2uQUEaAA/9o0ugbLcOKkI';
            script.crossOrigin = 'anonymous';
            script.async = true;
            
            script.onload = () => {
                window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY || '');
                setIsKakaoInitialized(true);
            };
            
            document.head.appendChild(script);
        }
    }, []);

    const handleShareToKakao = () => {
        if (!isKakaoInitialized || !window.Kakao) {
            console.error('Kakao SDK is not initialized');
            alert('카카오톡 공유 기능을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.');
            return;
        }

        try {
            const { Kakao, location } = window;

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
            });
        } catch (error) {
            console.error('Kakao share error:', error);
            alert('카카오톡 공유 중 오류가 발생했습니다.');
        }
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
