import React from 'react'
import Image from 'next/image'

interface InstagramShareButtonProps {
    title?: string
    description?: string
}

const InstagramShareButton = ({
    title,
    description,
}: InstagramShareButtonProps) => {
    const handleInstagramShare = () => {
        // Instagram doesn't have a direct web share API, so we'll open Instagram app
        // Users will need to manually paste the content
        const text = title ? `${title}\n${description || ''}` : description

        // On mobile, try to open the Instagram app
        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.location.href = 'instagram://'

            // After a short delay, if Instagram didn't open, open the website
            setTimeout(() => {
                window.open('https://www.instagram.com/', '_blank')
            }, 1000)
        } else {
            // On desktop, just open Instagram website
            window.open('https://www.instagram.com/', '_blank')
        }

        // Copy the text to clipboard so user can paste it
        if (text) {
            navigator.clipboard
                .writeText(text)
                .then(() => {
                    alert(
                        '텍스트가 클립보드에 복사되었습니다. Instagram에 붙여넣기 하세요.',
                    )
                })
                .catch((err) => {
                    console.error('클립보드 복사 실패:', err)
                })
        }
    }

    return (
        <button
            onClick={handleInstagramShare}
            // className="w-10 h-10 rounded-full bg-gradient-to-tr flex items-center justify-center"
            aria-label="Instagram에 공유하기"
        >
            <Image
                src="/img/insta-icon.svg"
                alt="Instagram 공유"
                width={50}
                height={50}
                // className="invert" // If your icon is black and needs to be white
            />
        </button>
    )
}

export default InstagramShareButton
