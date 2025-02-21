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
        <button
            className="w-[50px] h-[50px] rounded-full bg-primary-4  text-white font-semibold bg-primary"
            onClick={copyAlert}
        >
            URL
        </button>
    )
}

export default ClipboardButton
