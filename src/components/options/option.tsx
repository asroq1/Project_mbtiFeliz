import React, { createRef, useEffect, useState } from 'react'
import styles from './option.module.css'
import { useRouter } from 'next/navigation'
import Questions from '@/common/api/questionsApi.json'
import Image from 'next/image'

const Options = () => {
    const [loading, setLoading] = useState(false)
    const [num, setNum] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(1)
    const slideRef = createRef<HTMLDivElement>()
    const TOTAL_SLIDES = 12
    const router = useRouter()
    const [mbti, setMbti] = useState<string[]>([])

    const nextSlideFir = () => {
        setMbti([...mbti, Questions[num].answers[0].type])
        setNum(num + 1)
        setCurrentSlide(currentSlide + 1)
        if (slideRef.current) {
            slideRef.current.style.transform += 'translateX(-100vw)'
        }
    }
    const nextSlideSec = () => {
        setMbti([...mbti, Questions[num].answers[1].type])
        setNum(num + 1)
        setCurrentSlide(currentSlide + 1)
        if (slideRef.current) {
            slideRef.current.style.transform += 'translateX(-100vw)'
        }
    }

    const mbtiChecker = () => {
        setLoading(true)
        let map: { [key: string]: number } = {}
        let result: string[] = []
        for (let i = 0; i < mbti.length; i++) {
            if (mbti[i] in map) {
                map[mbti[i]] += 1
            } else {
                map[mbti[i]] = 1
            }
        }
        for (let count in map) {
            if (map[count] >= 2) {
                result.push(count)
            }
        }

        setTimeout(() => {
            const examResult = result.join('')
            router.push(`/result/${examResult}`)
        }, 3000)
    }
    useEffect(() => {
        currentSlide > TOTAL_SLIDES && mbtiChecker()
    }, [currentSlide])

    return (
        <>
            <section className={styles.container}>
                {!loading && (
                    <>
                        <div className={styles.slider} ref={slideRef}>
                            {Questions.map((item) => {
                                // const nextSlideSec = () => {

                                setMbti([
                                    ...mbti,
                                    Questions[num].answers[1].type,
                                ])
                                setNum(num + 1)
                                setCurrentSlide(currentSlide + 1)
                                if (slideRef.current) {
                                    slideRef.current.style.transform +=
                                        'translateX(-100vw)'
                                }

                                // }
                                return (
                                    <div
                                        className={styles.content}
                                        key={item.id}
                                    >
                                        <div className={styles.top}>
                                            <div
                                                className={styles.mbti__counter}
                                            >
                                                <span
                                                    className={
                                                        styles.mbti__progress__color
                                                    }
                                                >
                                                    {currentSlide}
                                                </span>
                                                <span
                                                    className={
                                                        styles.mbti__end__color
                                                    }
                                                >
                                                    /{TOTAL_SLIDES}
                                                </span>
                                            </div>
                                            <h1
                                                className={
                                                    styles.mbti__question
                                                }
                                            >
                                                {item.question}
                                            </h1>
                                        </div>
                                        <article
                                            className={styles.mbti__btn__box}
                                        >
                                            <button
                                                className={styles.mbti__button}
                                                onClick={nextSlideFir}
                                            >
                                                {item.answers[0].content}
                                            </button>
                                            <button
                                                className={styles.mbti__button}
                                                onClick={nextSlideSec}
                                            >
                                                {item.answers[1].content}
                                            </button>
                                        </article>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                )}
                {loading && (
                    <div className={styles.loading__container}>
                        <Image
                            className={styles.ticket}
                            src="img/flying.png"
                            alt="e-ticket"
                        />
                        <div className={styles.loading}></div>
                    </div>
                )}
            </section>
        </>
    )
}

export default Options
