'use client'

import styles from './countries.module.css'
import Countries from '../../../../common/api/countriesApi.json'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import CopyClipboard from '../../../../components/shareSNS/CopyClipboard'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Profile = () => {
    const path = usePathname().split('/').at(-1) || ''
    const nation = Countries[path as keyof typeof Countries]
    const [onGpt, setOnGpt] = useState(false)
    const [gptResult, setGptResult] = useState<any>('')

    const getTypeInfo = async () => {
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API}/get-result`,
                { type: nation.id },
            )
            console.log(response.data)
            response.data = 'ENFP'
        } catch (error) {
            console.error(error)
        }
    }

    const getGPTadvice = async () => {
        try {
            if (gptResult.length !== 0) {
                setGptResult('')
            }
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API}/gpt`,
                { mbti: nation.id, city: nation.city },
            )

            const typeResponse = async () => {
                for (let i = 0; i < response.data.length; i++) {
                    await new Promise((resolve) => setTimeout(resolve, 50)) // 각 글자마다 50ms 딜레이
                    setGptResult((prev: string) => prev + response.data[i])
                }
            }

            // 1초 후에 타이핑 효과 시작
            setTimeout(typeResponse, 1000)
            await setOnGpt(true)
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
                className="bg-primary-TEST w-full h-max flex justify-center py-4 gap-6"
                key={nation.id}
            >
                <div className="w-10/12 overflow-hidden gap-8 flex flex-col">
                    <div className="px-6 py-2 text-center text-lg font-bold text-gray-700">
                        <h1 className="text-lg text-light-text-LIGHT">
                            나한테 어울리는 여행지는
                        </h1>
                        <h1 className="text-3xl text">
                            {nation.city} {nation.country}
                        </h1>
                    </div>
                    <Image
                        src={nation.img}
                        alt="img"
                        className="w-full /2 my-4 rounded-2xl h-[450px]"
                        width={100}
                        height={250}
                    />

                    <ul className="gap-1">
                        {nation.description.map((item: any) => {
                            return (
                                <>
                                    <li
                                        className="text-slate-200 font-semibold text-xl"
                                        key={item.hashtag}
                                    >
                                        {item.hashtag}
                                    </li>
                                    <li
                                        className="text-light-text-LIGHT"
                                        key={item.des}
                                    >
                                        {item.des}
                                    </li>
                                </>
                            )
                        })}
                    </ul>
                    <div className="flex flex-col gap-4">
                        <div className="bg-secondary-2 text-light-text-1 flex flex-col items-center rounded-2xl bg-white gap-4 h-auto p-6">
                            {/* <Image src="/img/character/ENFP.png"></Image> */}
                            <h4 className="text-light-text-white text-2xl text-center text font-bold ">
                                나와 잘 맞는 타입은?
                            </h4>
                            <div className="flex flex-row gap-4">
                                <div>
                                    <Image
                                        src="/img/character/ENFP.png"
                                        alt="img"
                                        className="w-[100px] h-[100] rounded-full "
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div>
                                    <p className="text-center font-semibold">
                                        {nation.duo[0].subhead}
                                    </p>
                                    <p className="text-center">
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
                    <div className="bg-white w-[85dvw] h-[120px] rounded-xl text-center flex flex-col justify-center items-center gap-2">
                        <h3 className="text-light-text-LIGHT text-base">
                            나와 비슷한 사람들
                        </h3>
                        <p className="text-primary text-4xl font-bold">
                            42.42%
                        </p>
                    </div>
                    <h4 className="text-light-text-white text-2xl text-center font-bold">
                        AI 추천 여행 일정 확인하기
                    </h4>
                    <div className=" bg-secondary text-light-text-1 flex flex-col items-center rounded-2xl  h-auto p-4 bg-white">
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
                        {onGpt && (
                            <div className="">
                                <span className="inline-block p-2 rounded-lg bg-gray-200">
                                    {gptResult || '...'}
                                </span>
                            </div>
                            // <p className="text-black bg-primary-GRAY">
                            //     {gptResult.length !== 0
                            //         ? `${gptResult}`
                            //         : '@'}
                            // </p>
                        )}
                        <button onClick={getGPTadvice}>
                            <span>
                                {gptResult.length !== 0
                                    ? '다시 생성'
                                    : '확인하기'}
                            </span>
                        </button>
                        {/* <div>
                                <p className={styles.advice__strong}>
                                    도망가세요 {nation.counter[0].subhead}
                                </p>
                                <p>{nation.counter[0].des}</p>
                            </div> */}
                    </div>

                    <div className={styles.shareBox}>
                        <CopyClipboard />
                    </div>
                    <div className="p-2 bg-primary-GRAY text-text cursor-pointer text-center text-lg font-semibold">
                        <Link href="/">다시하기</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
