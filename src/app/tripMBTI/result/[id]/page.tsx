'use client'

import styles from './countries.module.css'
import Countries from '../../../../common/api/countriesApi.json'
import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import CopyClipboard from '../../../../components/shareSNS/CopyClipboard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { MarkdownContent } from '@/components/common/MarkdownRenderer'

export interface GPTResultProps {
    onGpt: any
    gptResult: any
    getDeepSeekAdvice: any
    isLoading: any
}

const Profile = () => {
    const path = usePathname().split('/').at(-1) || ''
    const params = useParams()
    const nation = Countries[path as keyof typeof Countries]
    const [onGpt, setOnGpt] = useState(false)
    const [gptResult, setGptResult] = useState<any>('')
    const [isLoading, setIsLoading] = useState(false)

    const getDeepSeekAdvice = async () => {
        try {
            setIsLoading(true)
            if (gptResult.length !== 0) {
                setGptResult('')
            }

            // Updated to use the backend server URL with query parameters
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API}/travels/gpt-responses`,
                {
                    params: {
                        mbti: nation.id,
                        city: nation.city,
                        country: nation.country,
                    },
                    timeout: 60000, // 타임아웃 설정 (60초)
                },
            )

            // Extract content from the new response format
            const content = response.data.choices[0].message.content

            // 타이핑 효과 구현
            const typeResponse = async () => {
                for (let i = 0; i < content.length; i++) {
                    await new Promise((resolve) => setTimeout(resolve, 10)) // 각 글자마다 10ms 딜레이
                    setGptResult((prev: string) => prev + content[i])
                }
                setIsLoading(false)
            }

            // 0.5초 후에 타이핑 효과 시작
            setTimeout(typeResponse, 500)
            await setOnGpt(true)
        } catch (error) {
            console.error('DeepSeek API 호출 오류:', error)
            setIsLoading(false)
            setGptResult(
                '죄송합니다. 여행 일정을 생성하는 중 오류가 발생했습니다. 다시 시도해주세요.',
            )
        }
    }

    const [duoMbti, setDuoMbti] = useState<string>('')
    const [duoRate, setDuoRate] = useState<number>(0)

    const getTypeInfo = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API}/travels/results?myMbtiType=${params.id}`,
            )
            console.log('받아온 데이터', response.data)

            // 응답에서 duoMbti와 duoRate 추출
            if (response.data && response.data.duoMbti) {
                setDuoMbti(response.data.duoMbti)
            }

            if (response.data && response.data.duoRate !== undefined) {
                // 백분율로 변환 (소수점 두 자리까지)
                const ratePercentage = (response.data.duoRate * 100).toFixed(2)
                setDuoRate(parseFloat(ratePercentage))
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getTypeInfo()
    }, [])

    if (!nation) {
        return <div>존재하지 않는 결과입니다.</div>
    }

    return (
        <>
            <div
                className="bg-primary-TEST w-full h-max flex justify-center py-4"
                key={nation.id}
            >
                <div className="max-w-[480px] w-full flex flex-col gap-8 overflow-hidden px-4">
                    <div className="px-6 py-2 text-center text-lg font-bold text-gray-300 flex flex-col items-center w-full gap-2">
                        <h1 className="text-lg text-light-text-LIGHT break-words">
                            나한테 어울리는 여행지는
                        </h1>
                        <h1 className="text-2xl text text-primary break-words">
                            {nation.city} {nation.country}
                        </h1>
                    </div>
                    <Image
                        src={nation.img}
                        alt={`${nation.city} 여행지 이미지`}
                        priority
                        className="w-full my-4 rounded-2xl mx-auto "
                        width={480}
                        height={350}
                        style={{
                            height: '350px',
                            width: '300px',
                        }}
                    />
                    <h2 className="text-xl font-semibold text-primary text-center">
                        {nation.subhead}
                    </h2>
                    <ul className="gap-1 list-disc pl-5 marker:text-primary">
                        {nation.description.map((item: any, index) => {
                            return (
                                <li className="text-light-gray-700" key={index}>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                    <div className="flex flex-col gap-4">
                        <div className="bg-secondary-2 text-light-text-1 flex flex-col items-center rounded-2xl bg-white gap-4 h-auto p-6">
                            {/* <Image src="/img/character/ENFP.png"></Image> */}
                            <h4 className="text-2xl text-center text font-bold whitespace-nowrap text-light-dark-text-3">
                                나와 잘 맞는 타입은?
                            </h4>
                            <div className="flex flex-row gap-4">
                                <div>
                                    <Image
                                        src={`/img/character/${duoMbti || nation.duo[0].subhead}.png`}
                                        alt={`나와 잘 맞는 ${duoMbti} 이미지`}
                                        className="w-[100px] h-[100] rounded-full "
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="flex flex-col  justify-center">
                                    <p className="text-center font-semibold text-primary">
                                        {duoMbti || nation.duo[0].subhead}
                                    </p>
                                    <p className="text-center text-light-text-LIGHT">
                                        {nation.duo[0].des}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* <h4 className="text-light-text-white text-2xl text-center text font-bold">
                            언제가 제일 저렴해?
                        </h4>
                        <div className="bg-secondary-2 text-light-text-1 flex flex-col items-center rounded-2xl bg-white">
                            <p>{nation.duo[0].subhead}</p>
                            <div>
                                <p className="">
                                    찰떡궁합 그 자체 {nation.duo[0].subhead}
                                </p>
                                <p>{nation.duo[0].des}</p>
                            </div>
                        </div> */}
                    </div>
                    <div className="bg-white w-full h-[120px] rounded-xl text-center flex flex-col justify-center items-center gap-2">
                        <h3 className="text-light-text-LIGHT text-base">
                            나와 비슷한 사람들의 비율은?
                        </h3>
                        <p className="text-primary text-4xl font-bold">
                            {duoRate >= 0 ? `${duoRate}%` : ''}
                        </p>
                    </div>

                    <div className="bg-secondary text-light-text-1 flex flex-col items-center rounded-2xl h-auto p-4 bg-white">
                        {/* <Link href={`${nation.counter[0].subhead}`}>
                                <div className="">
                                    <Image
                                        src={nation.counter[0].img}
                                        alt="mbti캐릭터"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                            </Link> */}
                        <h4 className="text-2xl text-center font-bold text-light-dark-text-3">
                            AI가 알려주는 여행지 정보
                        </h4>
                        <div className="bg-secondary text-light-text-1 flex flex-col items-center rounded-2xl h-auto p-4 bg-white">
                            {onGpt && (
                                <div className="w-full">
                                    <div className="inline-block p-4 rounded-lg bg-gray-100 text-gray-800 w-full whitespace-pre-wrap">
                                        <MarkdownContent
                                            content={gptResult || ''}
                                        />
                                    </div>
                                </div>
                            )}
                            <button
                                onClick={getDeepSeekAdvice}
                                className="flex items-center justify-center mt-4 px-6 py-2 bg-primary text-white rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50 w-full h-12"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                    </div>
                                ) : (
                                    <span>
                                        {gptResult.length !== 0
                                            ? '다시 물어보기'
                                            : '확인하기'}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className={styles.shareBox}>
                        <CopyClipboard />
                    </div>
                    <Link
                        className="p-4 bg-primary-GRAY text-gray-700 cursor-pointer text-center text-lg font-semibold rounded-lg"
                        href="/"
                    >
                        다시하기
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Profile
