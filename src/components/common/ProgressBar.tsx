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
        <section className="w-4/5 flex flex-col margincenter">
            <div className="w-full h-3 bg-gray-300">
                <div
                    className="h-3 bg-primary-3 items-end"
                    style={{
                        width: progressStatus + '%',
                    }}
                ></div>
            </div>
            <div className="flex justify-end	">
                <span className="text-base text-white">{currentSlide}</span>
                <span className="text-white">/{TOTAL_SLIDES}</span>
            </div>
        </section>
    )
}

export default ProgressBar
