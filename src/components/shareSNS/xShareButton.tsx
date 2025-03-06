import React from 'react'
import Image from 'next/image'

interface XShareButtonProps {
    title?: string
    description?: string
}

const XShareButton = ({ title, description }: XShareButtonProps) => {
    const handleXShare = () => {
        const text = title ? `${title} - ${description || ''}` : description
        const url = window.location.href
        const shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(text || '')}&url=${encodeURIComponent(url)}`
        window.open(shareUrl, '_blank', 'width=600,height=400')
    }

    return (
        <button
            onClick={handleXShare}
            className="w-12 h-12 rounded-full flex items-center justify-center mx-1"
            aria-label="Share on X"
        >
            <Image
                src="/assets/icons/x-icon.svg"
                alt="X Logo"
                width={50}
                height={50}
            />
        </button>
    )
}

export default XShareButton
