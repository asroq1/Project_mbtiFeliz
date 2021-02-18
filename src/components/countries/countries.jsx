import React from 'react'
import { Link } from 'react-router-dom'

// 프로필에서 사용 할 데이터
const countries = {
	ESTJ: {
		name: 'marsoon',
		description: 'it works !!!!!! Fuck you I won_t give up',
	},
	velopert: {
		name: '김민준',
		description:
			'Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자',
	},
	gildong: {
		name: '홍길동',
		description: '전래동화의 주인공',
	},
	spain: {
		name: 'barcelona',
		description: '태양의 도시 !',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
	},
}

const Profile = ({ match }) => {
	// 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.
	const { countryName } = match.params
	const nation = countries[countryName]
	if (!nation) {
		return <div>존재하지 않는 결과입니다.</div>
	}
	return (
		<>
			<h3>
				{countryName}({nation.name})
			</h3>
			<p>{nation.description}</p>
			<img src={nation.img} alt="img" width="500px" height="500px" />
			<Link to="/">
				<button>다시하기</button>
			</Link>
			<button>링크복사</button>
		</>
	)
}

export default Profile
