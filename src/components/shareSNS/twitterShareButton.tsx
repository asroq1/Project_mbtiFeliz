'use client'

import React from 'react'
import styles from './shareIcon.module.css'
import Image from 'next/image'
const TwitterShareButton = () => {
    return (
        <div>
            <a
                className="twitter-share-button"
                href="https://twitter.com/intent/tweet?text=https://felizmbti.netlify.app/"
                data-size="large"
            >
                <Image
                    src="/assets/icons/x-icon.svg"
                    className={styles.facebook__icon}
                    alt="twitter-share-icon"
                    width={50}
                    height={50}
                />
            </a>
        </div>
    )
}

export default TwitterShareButton
