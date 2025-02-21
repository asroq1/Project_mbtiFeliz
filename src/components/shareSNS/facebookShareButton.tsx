'use client'
import React from 'react'
import styles from './shareIcon.module.css'
import Image from 'next/image'
import Link from 'next/link'
const FacebookShareButton = () => {
    const shareFacebook = () => {
        window.open(
            'http://www.facebook.com/sharer.php?u=https://felizmbti.netlify.app/',
        )
    }
    return (
        <div>
            <Link href="/#" onClick={shareFacebook}>
                <Image
                    src="/assets/icons/facebook-icon.svg"
                    className={styles.facebook__icon}
                    alt="facebook_icon"
                    width={50}
                    height={50}
                />
            </Link>
        </div>
    )
}

export default FacebookShareButton
