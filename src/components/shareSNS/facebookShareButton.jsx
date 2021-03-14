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
			<a onClick={shareFacebook}>
				<img src="/img/facebook.png" className={styles.facebook} />
			</a>
		</div>
	)
}

export default FacebookShareButton
