import React from 'react'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import ClipboardButton from '../components/ClipboardButton'
import CopyClipboard from '../components/shareSNS/CopyClipboard'
import Image from 'next/image'

const HomePage = () => {
    // const url = window.location.href // url 복사
    const copyAlert = () => {
        alert('링크 생성!')
    }
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.middle}>
                        <h1 className="text-primary">MBTI로 보는</h1>
                        <h1 className="text-primary">여행지 추천</h1>
                    </div>
                    <div className={styles.top}>
                        <Image
                            className={styles.logo}
                            src="/img/FelizLogo.png"
                            alt="로고"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className={styles.bottom}>
                        <p>질문을 읽고 나의 행동을 선택해주세요.</p>
                        <Link href="/tripMBTI" className={styles.start__button}>
                            테스트 하기
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
