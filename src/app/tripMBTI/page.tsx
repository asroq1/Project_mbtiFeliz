'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './option.module.css'
import Questions from '../../common/api/questionsApi.json'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import ProgressBar from '../../components/common/ProgressBar'

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
            <section className="bg-primary w-dvw h-dvh">
                {loading && (
                    <div className="p-6 w-dvw h-dvh">
                        <div className="w-4/6 margincenter h-full flex flex-col gap-4 justify-center">
                            <img
                                className="animate-up-down"
                                src="img/plane.svg"
                                alt="e-ticket"
                            />
                            <h1 className="text-2xl font-semibold text-center text-white">
                                여행지 분석 중
                            </h1>
                        </div>
                    </div>
                )}

                {!loading && (
                    <>
                        <div className="overflow-hidden mx-auto my-0">
                            <div
                                className="w-[1200vw] overflow-hidden"
                                ref={slideRef}
                            >
                                {Questions.map((item) => {
                                    return (
                                        <div
                                            className="flex flex-col justify-evenly w-[100vw] h-[100vh] float-left"
                                            key={item.id}
                                        >
                                            <div className="flex flex-col items-center w-4/5 margincenter">
                                                <Image
                                                    src={item.image}
                                                    alt="상황 이미지"
                                                    width={300}
                                                    height={300}
                                                />
                                                <div className="text-secondary font-semibold">
                                                    <h1>Q.{item.id}</h1>
                                                    <h1 className="text-lg font-bold text-center text-secondary">
                                                        {item.question}
                                                    </h1>
                                                </div>
                                            </div>
                                            <article className="flex flex-row justify-between	 w-4/5 h-[25vh] mx-auto">
                                                <button
                                                    className="w-2/5 flex justify-center h-full  p-5 bg-secondary text-primary border border-gray-300 rounded-md font-semibold items-center"
                                                    onClick={clickFirstOption}
                                                >
                                                    {item.answers[0].content}
                                                </button>
                                                <button
                                                    className="w-2/5 flex justify-center h-full  p-5 bg-secondary text-primary border border-gray-300 rounded-md font-semibold items-center"
                                                    onClick={clickSecondOption}
                                                >
                                                    {item.answers[1].content}
                                                </button>
                                            </article>
                                            <ProgressBar
                                                currentSlide={currentSlide}
                                                TOTAL_SLIDES={TOTAL_SLIDES}
                                                progressStatus={progressStatus}
                                            />
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
