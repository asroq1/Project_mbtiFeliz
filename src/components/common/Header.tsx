import React from 'react'
import Image from 'next/image'
const Header = () => {
    return (
        <header>
            <Image
                src="/img/logo.jpg"
                width={100}
                height={100}
                priority
                alt="로고 이미지"
            ></Image>
        </header>
    )
}

export default Header
