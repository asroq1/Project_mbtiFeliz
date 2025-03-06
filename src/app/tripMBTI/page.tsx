'use client'
import React, { useEffect, useRef, useState } from 'react'
import Questions from '../../common/api/questionsApi.json'
import { useRouter } from 'next/navigation'
import ProgressBar from '../../components/common/ProgressBar'
// import axios from 'axios'
import Image from 'next/image'
import axios from 'axios'

const Options = () => {
    const slideRef = useRef<HTMLDivElement | null>(null)
    const slideContainerRef = useRef<HTMLDivElement | null>(null)
    const TOTAL_SLIDES = 12
    const [num, setNum] = useState(0)
    const [mbti, setMbti] = useState<string>('')
    const [loading, setLoading] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(1)
    const router = useRouter()
    const [progressStatus, setProgressStatus] = useState<number>(0)

    // Reset slide position on component mount
    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.style.transform = 'translateX(0)'
        }
    }, [])

    const moveToNextSlide = () => {
        if (slideRef.current && slideContainerRef.current) {
            const slideWidth = slideContainerRef.current.clientWidth
            slideRef.current.style.transform = `translateX(-${currentSlide * slideWidth}px)`
        }
    }

    const clickFirstOption = () => {
        setMbti((prevMbti) => prevMbti + Questions[num].answers[0].type)
        setNum(num + 1)
        setCurrentSlide((prev) => {
            const newSlide = prev + 1
            setTimeout(() => moveToNextSlide(), 10)
            return newSlide
        })
        updateProgress()
    }

    const clickSecondOption = () => {
        setMbti((prevMbti) => prevMbti + Questions[num].answers[1].type)
        setNum(num + 1)
        setCurrentSlide((prev) => {
            const newSlide = prev + 1
            setTimeout(() => moveToNextSlide(), 10)
            return newSlide
        })
        updateProgress()
    }

    const updateProgress = () => {
        setProgressStatus((prev) => prev + 8.33333333333)
    }

    const verifyMbti = async () => {
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

        // const examResult = result.join('')
        // await axios.post(`${process.env.NEXT_PUBLIC_API}/send-result`, {
        //     type: examResult,
        // })
        console.log('result', result.join(''))
        await sendMbtiType(result.join(''))
    }

    const sendMbtiType = async (result: string) => {
        result = 'ENFP'
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API}/travel/result`, {
                mbtiId: result,
            })
        } catch (error) {
            console.error(error)
        }
        router.push(`/tripMBTI/result/${result}`)
    }

    useEffect(() => {
        currentSlide > TOTAL_SLIDES && verifyMbti()
    }, [currentSlide])

    return (
        <>
            <section className="bg-primary-TEST w-full h-[100svh] flex justify-center">
                <div
                    className="max-w-[480px] w-full h-full relative"
                    ref={slideContainerRef}
                >
                    {loading && (
                        <div className="p-6 w-full h-full flex items-center justify-center">
                            <div className="w-4/6 h-full flex flex-col gap-4 justify-center items-center">
                                <Image
                                    className="animate-up-down"
                                    src="/img/plane.svg"
                                    alt="e-ticket"
                                    width={250}
                                    height={250}
                                />
                                <h1 className="text-2xl font-semibold text-center text-text">
                                    여행지 분석 중
                                </h1>
                            </div>
                        </div>
                    )}

                    {!loading && (
                        <div className="overflow-hidden h-full">
                            <div
                                className="flex h-full will-change-transform"
                                ref={slideRef}
                                style={{
                                    transition:
                                        'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                                    WebkitBackfaceVisibility: 'hidden',
                                    backfaceVisibility: 'hidden',
                                }}
                            >
                                {Questions.map((item) => {
                                    return (
                                        <div
                                            className="flex-shrink-0 w-full h-full flex flex-col"
                                            key={item.id}
                                            style={{ width: '100%' }}
                                        >
                                            <header className="flex w-[85%] justify-end items-center mx-auto pt-2">
                                                <button
                                                    onClick={() =>
                                                        router.push('/')
                                                    }
                                                >
                                                    <Image
                                                        src="/img/close-icon.svg"
                                                        width={25}
                                                        height={25}
                                                        alt="뒤로 가기 버튼"
                                                    />
                                                </button>
                                            </header>

                                            <div className="flex flex-col flex-1 justify-between py-2">
                                                <div className="space-y-3">
                                                    <ProgressBar
                                                        currentSlide={
                                                            currentSlide
                                                        }
                                                        TOTAL_SLIDES={
                                                            TOTAL_SLIDES
                                                        }
                                                        progressStatus={
                                                            progressStatus
                                                        }
                                                    />
                                                    <div className="w-[85%] text-secondary font-semibold mx-auto">
                                                        <h1 className="text-xl font-bold text-center text-text">
                                                            {item.question}
                                                        </h1>
                                                    </div>
                                                    <div className="flex flex-col items-center w-4/5 mx-auto">
                                                        <Image
                                                            src={item.image}
                                                            alt="상황 이미지"
                                                            width={300}
                                                            height={300}
                                                            style={{
                                                                width: '100%',
                                                                height: 'auto',
                                                                maxHeight:
                                                                    '30svh',
                                                            }}
                                                            className="rounded-lg object-contain"
                                                            priority
                                                        />
                                                    </div>
                                                </div>

                                                <article className="flex flex-col gap-3 w-[85%] mx-auto mb-4">
                                                    <button
                                                        className="w-full flex flex-col justify-center p-4 bg-white text-text rounded-md font-semibold items-center border text-base transition duration-100 active:scale-[0.95] active:shadow-inner active:bg-gray-50 touch-manipulation"
                                                        onClick={
                                                            clickFirstOption
                                                        }
                                                    >
                                                        <span className="text-text font-bold mb-1">
                                                            {
                                                                item.answers[0]
                                                                    .subhead
                                                            }
                                                        </span>
                                                        <span className="text-light-text-LIGHT">
                                                            {
                                                                item.answers[0]
                                                                    .content
                                                            }
                                                        </span>
                                                    </button>
                                                    <button
                                                        className="w-full flex flex-col justify-center p-4 bg-white text-text border rounded-md font-semibold items-center text-base transition duration-100 active:scale-[0.95] active:shadow-inner active:bg-gray-50 touch-manipulation"
                                                        onClick={
                                                            clickSecondOption
                                                        }
                                                    >
                                                        <span className="text-text font-bold mb-1">
                                                            {
                                                                item.answers[1]
                                                                    .subhead
                                                            }
                                                        </span>
                                                        <span className="text-light-text-LIGHT">
                                                            {
                                                                item.answers[1]
                                                                    .content
                                                            }
                                                        </span>
                                                    </button>
                                                </article>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Options
