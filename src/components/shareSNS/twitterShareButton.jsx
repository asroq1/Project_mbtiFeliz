import React from 'react'
import styles from './shareIcon.module.css'
const TwitterShareButton = () => {
	return (
		<div>
			<a
				className="twitter-share-button"
				href="https://twitter.com/intent/tweet?text=https://felizmbti.netlify.app/"
				data-size="large"
			>
				<img
					src="/img/twitter.png"
					alt="twitter_icon"
					className={styles.twitter__icon}
				/>
			</a>
		</div>
	)
}

export default TwitterShareButton
