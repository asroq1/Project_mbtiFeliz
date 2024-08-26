'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './option.module.css'
import Questions from '../../common/api/questionsApi.json'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Options = () => {
    const slideRef = useRef<HTMLDivElement | null>(null)
    const TOTAL_SLIDES = 12
    const [num, setNum] = useState(0)
    const [mbti, setMbti] = useState<string>('')
    const [loading, setLoading] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(1)
    const router = useRouter()
    const [progressStatus, setProgressStatus] = useState<number>(0)
    // const getFlight = async () => {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://sky-scanner3.p.rapidapi.com/flights/cheapest-one-way',
    //         params: {
    //             fromEntityId: 'ICN',
    //             toEntityId: 'BKK',
    //             departDate: '2024-08-12',
    //         },
    //         headers: {
    //             'x-rapidapi-key':
    //                 'd6ad26b0ebmsh6d3b2e336571bf2p1256e9jsn42ac594efe02',
    //             'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com',
    //         },
    //     }

    //     try {
    //         const response = await axios.request(options)
    //         console.log(response.data)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    const clickFirstOption = () => {
        setMbti((prevMbti) => prevMbti + Questions[num].answers[0].type)
        setNum(num + 1)
        setCurrentSlide(currentSlide + 1)
        updateProgress()
        slideRef.current!.style.transform += 'translateX(-100dvw)'
    }

    const clickSecondOption = () => {
        setMbti((prevMbti) => prevMbti + Questions[num].answers[1].type)
        setNum(num + 1)
        setCurrentSlide(currentSlide + 1)
        updateProgress()
        slideRef.current!.style.transform += 'translateX(-100dvw)'
    }

    const updateProgress = () => {
        setProgressStatus((prev) => prev + 8.33333333333)
    }
    const verifyMbti = () => {
        setLoading(true)
        const selectedTypes = new Map<string, number>()
        const result: string[] = []
        for (let i = 0; i < mbti.length; i++) {
            const currentType = mbti[i]
            if (selectedTypes.has(currentType)) {
                selectedTypes.set(mbti[i], selectedTypes.get(mbti[i])! + 1)
            } else {
                selectedTypes.set(mbti[i], 1)
            }
        }

        selectedTypes.forEach((value, type) => {
            if (value >= 2) {
                result.push(type)
            }
        })

        setTimeout(() => {
            const examResult = result.join('')
            router.push(`/tripMBTI/result/${examResult}`)
        }, 1000)
    }
    // useEffect(() => {
    //     getFlight()
    // }, [])

    useEffect(() => {
        currentSlide > TOTAL_SLIDES && verifyMbti()
    }, [currentSlide])

    return (
        <>
            <section className={styles.container}>
                {loading && (
                    <div className={styles.loading__container}>
                        <img
                            className={styles.ticket}
                            src="img/flying.png"
                            alt="e-ticket"
                        />
                        <div className={styles.loading}></div>
                    </div>
                )}

                {!loading && (
                    <>
                        <div
                            style={{
                                width: '100%',
                                height: '12px',
                                background: '#e6e6e6',
                            }}
                        >
                            <div
                                style={{
                                    width: progressStatus + '%',
                                    height: '12px',
                                    background: '#ed6174',
                                }}
                            ></div>
                        </div>
                        <div
                            className="slider-container"
                            style={{ overflow: 'hidden', width: '100dvw' }}
                        >
                            <div className={styles.slider} ref={slideRef}>
                                {Questions.map((item) => {
                                    return (
                                        <div
                                            className={styles.content}
                                            key={item.id}
                                        >
                                            <div className={styles.top}>
                                                <div
                                                    className={
                                                        styles.mbti__counter
                                                    }
                                                >
                                                    <Image
                                                        src={item.image}
                                                        alt="상황 이미지"
                                                        width={100}
                                                        height={100}
                                                    />
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
                                                className={
                                                    styles.mbti__btn__box
                                                }
                                            >
                                                <button
                                                    className={
                                                        styles.mbti__button
                                                    }
                                                    onClick={clickFirstOption}
                                                >
                                                    {item.answers[0].content}
                                                </button>
                                                <button
                                                    className={
                                                        styles.mbti__button
                                                    }
                                                    onClick={clickSecondOption}
                                                >
                                                    {item.answers[1].content}
                                                </button>
                                            </article>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                )}
            </section>
        </>
    )
}

export default Options
