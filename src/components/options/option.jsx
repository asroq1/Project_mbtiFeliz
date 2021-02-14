import React, { createRef, useState } from 'react'
import styles from './option.module.css'
const Options = ({ options }) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const TOTAL_SLIDES = 2
	const slideRef = createRef(null)
	const nextSlide = () => {
		if (currentSlide >= TOTAL_SLIDES) {
			setCurrentSlide(0)
		} else {
			setCurrentSlide(currentSlide + 1)
			slideRef.current.style.display = 'none'
		}
	}
	return (
		<div className={styles.container}>
			{options.map(item => {
				return (
					<div
						className={styles.slider__container}
						// ref={slideRef}
						key={item.id}
					>
						<h3>{item.situation}</h3>
						<button onClick={nextSlide}>{item.descriptionA}</button>
						<button onClick={nextSlide}>{item.descriptionB}</button>
						<h4>
							{currentSlide} / {TOTAL_SLIDES}
						</h4>
					</div>
				)
			})}
		</div>
	)
}

export default Options
