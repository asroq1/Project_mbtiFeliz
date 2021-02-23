import React, { createRef, useEffect, useState } from 'react'
import styles from './option.module.css'
import { useHistory } from 'react-router-dom'
import Questions from '../../common/api/questionsApi/../questionsApi'
const Options = () => {
	const TOTAL_SLIDES = 12
	const [num, setNum] = useState(0)
	const [currentSlide, setCurrentSlide] = useState(1)
	const slideRef = createRef(null)
	const history = useHistory()
	const [mbti, setMbti] = useState([])
	const nextSlideFir = () => {
		setMbti(mbti + Questions[num].answers[0].type)
		console.log(mbti)
		setNum(num + 1)
		setCurrentSlide(currentSlide + 1)
		slideRef.current.style.transform += 'translateX(-100vw)'
	}
	const nextSlideSec = () => {
		setMbti(mbti + Questions[num].answers[1].type)
		console.log(mbti)
		setNum(num + 1)
		setCurrentSlide(currentSlide + 1)
		slideRef.current.style.transform += 'translateX(-100vw)'
	}
	//마지막 한 개가 씹힘
	const mbtiChecker = () => {
		let map = {}
		let result = []
		for (let i = 0; i < mbti.length; i++) {
			if (mbti[i] in map) {
				map[mbti[i]] += 1
			} else {
				map[mbti[i]] = 1
			}
		}
		for (let count in map) {
			if (map[count] >= 2) {
				result.push(count)
			}
		}
		const awesome = result.join('')
		history.push(`/result/${awesome}`)
	}
	useEffect(() => {
		currentSlide > TOTAL_SLIDES && mbtiChecker()
	})

	return (
		<div className={styles.container}>
			<div className={styles.slider} ref={slideRef}>
				{Questions.map(item => {
					return (
						<div className={styles.content} key={item.id}>
							<div className={styles.top}>
								<div className={styles.mbti__counter}>
									<span className={styles.mbti__progress__color}>
										{currentSlide}
									</span>{' '}
									<span className={styles.mbti__end__color}>
										/{TOTAL_SLIDES}
									</span>
								</div>
								<h1 className={styles.mbti__question}>{item.question}</h1>
							</div>
							<div className={styles.mbti__btn__box}>
								<button className={styles.mbti__button} onClick={nextSlideFir}>
									{item.answers[0].content}
								</button>
								<button className={styles.mbti__button} onClick={nextSlideSec}>
									{item.answers[1].content}
								</button>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Options
