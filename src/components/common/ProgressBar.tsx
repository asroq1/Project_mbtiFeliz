import React from 'react'

type ProgressStatus = {
    currentSlide: number
    TOTAL_SLIDES: number
    progressStatus: number
}

const ProgressBar = ({
    currentSlide,
    TOTAL_SLIDES,
    progressStatus,
}: ProgressStatus) => {
    return (
        <section>
            <div className="flex justify-evenly items-center">
                <button>X</button>
                <h1>여행지 테스트</h1>

                <div>
                    <span className="text-base">{currentSlide}</span>
                    <span className="">/{TOTAL_SLIDES}</span>
                </div>
            </div>

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
        </section>
    )
}

export default ProgressBar
