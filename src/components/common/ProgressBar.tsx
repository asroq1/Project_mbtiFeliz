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
        <section className="w-[85%] flex flex-col margincenter gap-2">
            <div className="w-full h-2 bg-primary-GRAY rounded">
                <div
                    className="rounded h-2 bg-primary items-end transition-all duration-500"
                    style={{
                        width: progressStatus + '%',
                    }}
                ></div>
            </div>
            <div className="flex justify-end">
                <span className="text-base text-light-text-LIGHT">
                    {currentSlide}
                </span>
                <span className="text-light-text-LIGHT px-1">
                    &nbsp;/&nbsp;{TOTAL_SLIDES}
                </span>
            </div>
        </section>
    )
}

export default ProgressBar
