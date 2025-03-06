'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const FacebookShareButton = () => {
    const shareFacebook = () => {
        return window.open(
            'http://www.facebook.com/sharer/sharer.php?u=' + location.href,
        )
    }
    return (
        <div>
            <Link href="/#" onClick={shareFacebook}>
                <Image
                    src="/assets/icons/facebook-icon.svg"
                    className=""
                    alt="facebook_icon"
                    width={50}
                    height={50}
                />
            </Link>
        </div>
    )
}

export default FacebookShareButton
