import React from 'react'
import styles from './shareIcon.module.css'
const FacebookShareButton = () => {
	const shareFacebook = () => {
		window.open(
			'http://www.facebook.com/sharer.php?u=https://felizmbti.netlify.app/'
		)
	}
	return (
		<div>
			<a href="/#" onClick={shareFacebook}>
				<img
					src="/img/facebook.png"
					className={styles.facebook__icon}
					alt="facebook_icon"
				/>
			</a>
		</div>
	)
}

export default FacebookShareButton
