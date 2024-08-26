'use client'

import React from 'react'
import styles from '../app/tripMBTI/result/[id]/countries.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { usePathname } from 'next/navigation'

const ClipboardButton = () => {
    const path = usePathname()

    const copyAlert = async () => {
        try {
            navigator.clipboard.writeText(path)
            alert('복사완료!')
        } catch (err) {
            alert('복사에 실패했습니다.')
        }
    }
    return (
        <button className={styles.copy__button} onClick={copyAlert}>
            링크복사
            <FontAwesomeIcon icon={faCopy} className={styles.icon} />
        </button>
    )
}

export default ClipboardButton
