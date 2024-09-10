import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const HomePage = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className="flex flex-col justify-center items-center w-dvw h-dvh bg-primary box-border ">
                    <div className={styles.middle}>
                        <h1 className="text-light-text text-xl text-center">
                            MBTI 성향으로 보는
                        </h1>
                        <h1 className="text-white font-bold text-4xl">
                            나만의 여행지 추천
                        </h1>
                    </div>
                    <div className={styles.top}>
                        <Image
                            className={styles.logo}
                            src="/img/plane.svg"
                            alt="로고"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="text-white">
                        <p>질문을 읽고 나의 행동을 선택해주세요.</p>
                        <Link
                            href="/tripMBTI"
                            className="flex justify-center bg-secondary-2 text-primary fnto-bold py-2 px-4 rounded h-[55px] items-center text-2xl"
                        >
                            테스트 하기
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
