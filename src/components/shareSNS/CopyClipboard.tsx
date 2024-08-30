import React from 'react'
import KakaoShareButton from './kakaoShareButton'
import FacebookShareButton from './facebookShareButton'
import TwitterShareButton from './twitterShareButton'
import ClipboardButton from '../ClipboardButton'

const CopyClipboard = () => {
    return (
        <>
            <div className="flex">
                <KakaoShareButton />
                <FacebookShareButton />
                <TwitterShareButton />
                <ClipboardButton />
            </div>
        </>
    )
}

export default CopyClipboard
