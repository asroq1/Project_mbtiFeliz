import React from 'react'
import KakaoShareButton from './kakaoShareButton'
import FacebookShareButton from './facebookShareButton'
import XShareButton from './xShareButton'
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
            <div className="flex items-center gap-1">
                <KakaoShareButton
                    description={description}
                    imageUrl={imageUrl}
                    title={title}
                />
                <FacebookShareButton />
                <XShareButton title={title} description={description} />
                <ClipboardButton />
            </div>
        </>
    )
}

export default CopyClipboard
