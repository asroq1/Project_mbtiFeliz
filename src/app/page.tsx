'use client'

import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { trackEvent } from '@/utils/analytics'

const HomePage = () => {
    const [displayCount, setDisplayCount] = useState<number>(0)
    const countRef = useRef<number>(0)
    const animationRef = useRef<number | null>(null)
    const router = useRouter()

    const getTotalCount = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API}/users/total-counts`,
            )
            const totalCount = response.data.totalCount

            // Start the counting animation
            startCountAnimation(totalCount)
        } catch (error) {
            console.log(error)
        }
    }

    const startCountAnimation = (targetCount: number) => {
        // Reset the counter
        countRef.current = 0
        setDisplayCount(0)

        // Calculate animation duration based on count size
        const duration = 2000 // 2 seconds
        const fps = 30
        const totalFrames = (duration / 1000) * fps
        const increment = targetCount / totalFrames

        // Cancel any existing animation
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current)
        }

        const animate = () => {
            countRef.current += increment

            if (countRef.current < targetCount) {
                setDisplayCount(Math.floor(countRef.current))
                animationRef.current = requestAnimationFrame(animate)
            } else {
                setDisplayCount(targetCount)
            }
        }

        animationRef.current = requestAnimationFrame(animate)
    }

    // Clean up animation on unmount
    useEffect(() => {
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [])

    // In your handleStart function
    const handleStart = async () => {
        try {
            // Track the start button click
            trackEvent('test_started', { source: 'homepage' })

            // const response = await axios.post(
            //     `${process.env.NEXT_PUBLIC_API}/test-count`,
            // )
            // console.log('응답', response.data.totalTests)
            router.push('/tripMBTI')
        } catch (error) {
            console.log(error)
            router.push('/tripMBTI')
        }
    }

    useEffect(() => {
        getTotalCount()
    }, [])

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full min-h-dvh bg-primary-TEST">
                <div className="max-w-[480px] w-full mx-auto px-4 flex flex-col justify-center items-center gap-10">
                    <div className="flex flex-col gap-4 text-center">
                        <h1 className="text-5xl text-primary gmarket-font">
                            Travel MBTI
                        </h1>

                        <p className="text-light-text-LIGHT text-lg">
                            AI가 알려주는 나를 위한 여행지
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/img/FelizLogo.png"
                            className="animate-up-down"
                            alt="대표 이미지"
                            priority
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className="text-white w-full">
                        <div className="bg-white w-full h-[120px] rounded-xl text-center flex flex-col justify-center items-center gap-2">
                            <h3 className="text-light-text-LIGHT text-base">
                                현재 참여자 수
                            </h3>
                            <p className="text-primary text-4xl font-bold relative overflow-hidden">
                                <span className="inline-block min-w-[2ch] text-center">
                                    {displayCount.toLocaleString()}
                                </span>
                                명
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleStart}
                        className="flex justify-center bg-primary text-white font-semibold py-2 px-4 h-[60px] items-center text-2xl w-full rounded-xl"
                    >
                        시작하기
                    </button>
                </div>
            </div>
        </>
    )
}

export default HomePage
