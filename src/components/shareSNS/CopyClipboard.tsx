import React from 'react'
import KakaoShareButton from './kakaoShareButton'
import FacebookShareButton from './facebookShareButton'
import ClipboardButton from '../ClipboardButton'

const CopyClipboard = () => {
    return (
        <>
            <div className="flex items-center">
                <KakaoShareButton />
                <FacebookShareButton />
                <ClipboardButton />
            </div>
        </>
    )
}

export default CopyClipboard
