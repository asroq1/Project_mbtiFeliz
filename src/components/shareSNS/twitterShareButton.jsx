import React, { Component } from 'react'

class TwitterShareButton extends Component {
	onClicTwitter = () => {
		window.open('https://www.twitter.com/intent/tweet?&url=https://google.com/')
	}
	render() {
		return (
			<div className="Twitter">
				<button onClick={this.onClickTwitter}>
					<img src="/img/kakaolink_btn_medium.png" alt="twitter" />
				</button>
			</div>
		)
	}
}

export default TwitterShareButton
