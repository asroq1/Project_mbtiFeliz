import React, { createRef, useEffect, useRef } from 'react'
import styles from './animation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faWalking,
	faLuggageCart,
	faPlaneDeparture,
} from '@fortawesome/free-solid-svg-icons'

const Animation = () => {
	const tourlistRef = createRef(null)
	const touristHandler = () => {
		tourlistRef.current.style.transform += 'translateX( 6vw)'
		tourlistRef.current.style.transition += '125ms'

		console.log('working ..')
	}

	useEffect(() => {
		touristHandler()
	})
	return (
		<div>
			<div className={styles.empty}>
				-------------------------------------------------------------------------------------------
			</div>
			<div ref={tourlistRef}>
				<FontAwesomeIcon icon={faWalking} className={styles.people} />
				<FontAwesomeIcon icon={faLuggageCart} className={styles.cart} />
			</div>
			<div className={styles.empty}>
				--------------------------------------------------------------------------------------------------------
			</div>
		</div>
	)
}

export default Animation
