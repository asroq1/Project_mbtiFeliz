'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

const ClipboardButton = () => {
    const path = usePathname()

    const copyAlert = async () => {
        try {
            // Get the full URL instead of just the pathname
            const fullUrl =
                typeof window !== 'undefined' ? window.location.href : ''

            // Copy the full URL to clipboard
            await navigator.clipboard.writeText(fullUrl)
            alert('복사완료!')
        } catch (err) {
            console.error(err)
            alert('복사에 실패했습니다.')
        }
    }
    return (
        <button
            className="w-[50px] h-[50px] rounded-full bg-primary-4 text-white font-semibold bg-primary"
            onClick={copyAlert}
        >
            URL
        </button>
    )
}

export default ClipboardButton
