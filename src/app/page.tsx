'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { trackEvent } from '@/utils/analytics'

const HomePage = () => {
    const [testCount, setTestCount] = useState<number>(0)
    const router = useRouter()
    const getTotalCount = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API}/users/total-counts`,
            )
            setTestCount(response.data.totalCount)
        } catch (error) {
            console.log(error)
        }
    }

    // In your handleStart function
    const handleStart = async () => {
        try {
            // Track the start button click
            trackEvent('test_started', { source: 'homepage' })

            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API}/test-count`,
            )
            console.log('응답', response.data.totalTests)
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
                            TravelMBTI
                        </h1>
                        <h2 className="text-light-text text-2xl text-cente font-bold">
                            나의 여행 스타일 MBTI 테스트
                        </h2>
                        <p className="text-light-text-LIGHT text-lg">
                            AI가 알려주는 나를 위한 여행지
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/img/main.jpg"
                            className="animate-up-down"
                            alt="대표 이미지"
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className="text-white w-full">
                        <div className="bg-white w-full h-[120px] rounded-xl text-center flex flex-col justify-center items-center gap-2">
                            <h3 className="text-light-text-LIGHT text-base">
                                현재 참여자 수
                            </h3>
                            <p className="text-primary text-4xl font-bold">
                                {testCount}명
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
