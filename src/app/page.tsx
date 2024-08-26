import React from 'react'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import ClipboardButton from '../components/ClipboardButton'

const HomePage = () => {
    // const url = window.location.href // url 복사
    const copyAlert = () => {
        alert('링크 생성!')
    }
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <img
                            className={styles.logo}
                            src="img/FelizLogo.png"
                            alt="로고"
                        />
                    </div>
                    <div className={styles.middle}>
                        <h2 className={styles.header}>올해는 어디로 갈까?</h2>
                        <p>총 16개의 유형의 MBTI성향을 기반으로</p>
                        <p>가장 잘 어울리는 여행지를 추천해드려요.</p>
                    </div>
                    <div className={styles.bottom}>
                        <Link href="/tripMBTI" className={styles.start__button}>
                            테스트 하기
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className={styles.icon}
                            />
                        </Link>
                        <ClipboardButton />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
