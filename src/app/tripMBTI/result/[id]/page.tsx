'use client'

import styles from './countries.module.css'
import Countries from '../../../../common/api/countriesApi.json'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import CopyClipboard from '../../../../components/shareSNS/CopyClipboard'

const Profile = () => {
    // const url = window.location.href
    const path = usePathname().split('/').at(-1)
    const nation = Countries[path]

    if (!nation) {
        return <div>존재하지 않는 결과입니다.</div>
    }

    return (
        <>
            <div
                className="bg-primary w-full h-max flex justify-center"
                key={nation.id}
            >
                <div className="w-10/12 overflow-hidden">
                    <div className="px-6 py-2 text-center text-lg font-bold text-gray-700">
                        <h1 className="text-lg text-light-text">
                            나의 여행지는
                        </h1>
                        <h1 className="text-3xl text-white">
                            {nation.subject}
                        </h1>
                    </div>
                    <Image
                        src={nation.img}
                        alt="img"
                        className="w-full /2 my-4 rounded-2xl"
                        width={100}
                        height={350}
                    />

                    <ul className="">
                        {nation.description.map((item: any) => {
                            return (
                                <div>
                                    <li
                                        className="text-slate-200 font-semibold text-xl"
                                        key={item.hashtag}
                                    >
                                        {item.hashtag}
                                    </li>
                                    <li
                                        className="text-light-text"
                                        key={item.des}
                                    >
                                        {item.des}
                                    </li>
                                </div>
                            )
                        })}
                    </ul>
                    <div className="flex flex-col gap-3.5">
                        <h4 className="text-light-text-white text-2xl text-center text font-bold">
                            추천하는 여행지
                        </h4>
                        <div className="bg-secondary-2 text-light-text-1 flex flex-col items-center rounded-2xl">
                            <Link href={`${nation.duo[0].subhead}`}>
                                <div className="">
                                    <Image
                                        src={nation.duo[0].img}
                                        alt="mbti캐릭터"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                            </Link>
                            <div>
                                <p className="">
                                    찰떡궁합 그 자체 {nation.duo[0].subhead}
                                </p>
                                <p>{nation.duo[0].des}</p>
                            </div>
                        </div>
                        <h4 className="text-light-text-white text-2xl text-center font-bold">
                            궁합이 안 좋은 여행지
                        </h4>
                        <div className="bg-secondary-2 text-light-text-1 flex flex-col items-center rounded-2xl">
                            <Link href={`${nation.counter[0].subhead}`}>
                                <div className="">
                                    <Image
                                        src={nation.counter[0].img}
                                        alt="mbti캐릭터"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                            </Link>
                            <div>
                                <p className={styles.advice__strong}>
                                    도망가세요 {nation.counter[0].subhead}
                                </p>
                                <p>{nation.counter[0].des}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.shareBox}>
                        <CopyClipboard />
                    </div>
                    <div className="p-2 bg-secondary-2 cursor-pointer text-center text-3xl font-bold text-light-text-1">
                        <Link href="/" className="">
                            다시하기
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
