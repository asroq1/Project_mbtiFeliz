import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<>
			<h3>당신의 여행지를 찾아보세요! </h3>
			<Link to="/tripMBTI">
				<button>시작하기</button>
			</Link>
		</>
	)
}

export default Home
