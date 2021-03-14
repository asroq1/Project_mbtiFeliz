import React, { createRef, useEffect } from 'react'
import styles from './animation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faWalking,
	faLuggageCart,
	faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons'

const Animation = () => {
	const tourlistRef = createRef(null)
	const touristHandler = () => {
		tourlistRef.current.style.transform += 'translateX( 6vw)'
		tourlistRef.current.style.transition += '125ms'
	}
	useEffect(() => {
		touristHandler()
	})
	return (
		<div>
			<div className={styles.arrow}>
				<FontAwesomeIcon
					icon={faAngleDoubleRight}
					className={styles.airplane}
				/>
				<FontAwesomeIcon
					icon={faAngleDoubleRight}
					className={styles.airplane}
				/>
				<FontAwesomeIcon
					icon={faAngleDoubleRight}
					className={styles.airplane}
				/>
			</div>
			<div ref={tourlistRef} className={styles.animation}>
				<FontAwesomeIcon icon={faWalking} className={styles.people} />
				<FontAwesomeIcon icon={faLuggageCart} className={styles.cart} />
			</div>
		</div>
	)
}

export default Animation
