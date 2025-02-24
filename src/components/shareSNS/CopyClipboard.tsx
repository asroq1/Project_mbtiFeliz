import React from 'react'
import KakaoShareButton from './kakaoShareButton'
import FacebookShareButton from './facebookShareButton'
import ClipboardButton from '../ClipboardButton'

export interface CopyClipboardProps {
    description?: string
    imageUrl?: string
    title?: string
}
const CopyClipboard = ({
    description,
    imageUrl,
    title,
}: CopyClipboardProps) => {
    return (
        <>
            <div className="flex items-center">
                <KakaoShareButton
                    description={description}
                    imageUrl={imageUrl}
                    title={title}
                />
                <FacebookShareButton />
                <ClipboardButton />
            </div>
        </>
    )
}

export default CopyClipboard
