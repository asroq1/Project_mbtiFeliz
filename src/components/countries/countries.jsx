import React from 'react'
import { Link } from 'react-router-dom'

const countries = {
	INTJ: {
		subhead: '아는 만큼 보인다! 여행모범생',
		subject: '조용한 어쩌고 저쩌고 열정의 스페인!',
		nickname: '과학자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '1111111111',
			},
			{
				des: '222',
			},
			{
				des: '33',
			},
			{
				des: '44',
			},
			{
				des: '5555',
			},
			{
				des: '66',
			},
		],
		duo: [
			{
				subhead: 'ENTP',
				des: '남는 건 결국 음식이야 식도락 여행!',
			},
		],
		counter: [
			{
				subhead: 'ESFP',
				des: '이런 친구랑 함께 하다간 정말 큰일나는 여행일거예요 !',
			},
		],
	},
	INTP: {
		subhead: '혼자라서 즐거워요~ 자유가 최고야',
		subject: '조용한 어쩌고 저쩌고 열정의 스페인!',
		nickname: '과학자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '1111111111',
			},
			{
				des: '222',
			},
			{
				des: '33',
			},
			{
				des: '44',
			},
			{
				des: '5555',
			},
			{
				des: '66',
			},
		],
		duo: [
			{
				subhead: 'ENTJ',
				des: '여행지에서 국밥처럼 든든한',
			},
		],
		counter: [
			{
				subhead: 'ESFJ ',
				des: '이런 친구랑 함께 하다간 정말 큰일나는 여행일거예요 !',
			},
		],
	},
	INFJ: {
		subhead: '여행만큼 좋은 힐링이 있을까?',
		subject: '조용한 어쩌고 저쩌고 열정의 스페인!',
		nickname: '과학자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '1111111111',
			},
			{
				des: '222',
			},
			{
				des: '33',
			},
			{
				des: '44',
			},
			{
				des: '5555',
			},
			{
				des: '66',
			},
		],
		duo: [
			{
				subhead: 'ENFP',
				des: '물 흐르듯 흘러가는대로 여행하는 자유로운 영혼',
			},
		],
		counter: [
			{
				subhead: '으윽 정반대의 어쩌고 저쪼고',
				des: '이런 친구랑 함께 하다간 정말 큰일나는 여행일거예요 !',
			},
		],
	},
	INFP: {
		subhead: '영화나 드라마에서 나오는 장소의 주인공 ',
		subject: '조용한 어쩌고 저쩌고 열정의 스페인!',
		nickname: '과학자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '1111111111',
			},
			{
				des: '222',
			},
			{
				des: '33',
			},
			{
				des: '44',
			},
			{
				des: '5555',
			},
			{
				des: '66',
			},
		],
		duo: [
			{
				subhead: 'ENFJ',
				des: '작은 세세한 것까지 다 아름다운 감수성이 넘치는 스타일',
			},
		],
		counter: [
			{
				subhead: '으윽 정반대의 어쩌고 저쪼고',
				des: '이런 친구랑 함께 하다간 정말 큰일나는 여행일거예요 !',
			},
		],
	},
	ISTJ: {
		subhead: '여행계획은 출발 세 달 전부터 세우는 거야',
		subject: '조용한 어쩌고 저쩌고 열정의 스페인!',
		nickname: '과학자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '1111111111',
			},
			{
				des: '222',
			},
			{
				des: '33',
			},
			{
				des: '44',
			},
			{
				des: '5555',
			},
			{
				des: '66',
			},
		],
		duo: [
			{
				subhead: 'ESTP',
				des: '이런 친구랑 함께 하다간 정말 큰일나는 여행일거예요 !',
			},
		],
		counter: [
			{
				subhead: 'ENFP',
				des: '물 흐르듯 흘러가는대로 여행하는 자유로운 영혼',
			},
		],
	},
	ISFJ: {
		subhead: '여유롭지만 가성비 좋은 여행이 좋아',
		subject: '조용한 어쩌고 저쩌고 열정의 스페인!',
		nickname: '과학자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '1111111111',
			},
			{
				des: '222',
			},
			{
				des: '33',
			},
			{
				des: '44',
			},
			{
				des: '5555',
			},
			{
				des: '66',
			},
		],
		duo: [
			{
				subhead: '으윽 정반대의 어쩌고 저쪼고',
				des: '이런 친구랑 함께 하다간 정말 큰일나는 여행일거예요 !',
			},
		],
		counter: [
			{
				subhead: 'ENTP',
				des: '남는 건 결국 음식이야 식도락 여행!',
			},
		],
	},
	ISTP: {
		subhead: '혼자가 좋지만 그렇다고 심심한 건 싫어',
		subject: '조용한 어쩌고 저쩌고 열정의 스페인!',
		nickname: '과학자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '1111111111',
			},
			{
				des: '222',
			},
			{
				des: '33',
			},
			{
				des: '44',
			},
			{
				des: '5555',
			},
			{
				des: '66',
			},
		],
		duo: [
			{
				subhead: 'ESTJ',
				des: '이런 친구랑 함께 하다간 정말 큰일나는 여행일거예요 !',
			},
		],
		counter: [
			{
				subhead: 'ENFJ',
				des: '작은 세세한 것까지 다 아름다운 감수성이 넘치는 스타일',
			},
		],
	},
	ISFP: {
		subhead: '여행계의 메딕 힐링여행 러버!',
		subject: '조용한 어쩌고 저쩌고 열정의 스페인!',
		nickname: '과학자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '1111111111',
			},
			{
				des: '222',
			},
			{
				des: '33',
			},
			{
				des: '44',
			},
			{
				des: '5555',
			},
			{
				des: '66',
			},
		],
		duo: [
			{
				subhead: 'ESFJ',
				des: '이런 친구랑 함께 하다간 정말 큰일나는 여행일거예요 !',
			},
		],
		counter: [
			{
				subhead: 'ENTJ',
				des: '여행지에서 국밥처럼 든든한',
			},
		],
	},
	ESTP: {
		subhead: '우리는 모두 친구! 모든 지구인들은 내 친구',
		subject: '조용한 어쩌고 저쩌고 열정의 스페인!',
		nickname: '인싸형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '1111111111',
			},
			{
				des: '222',
			},
			{
				des: '33',
			},
			{
				des: '44',
			},
			{
				des: '5555',
			},
			{
				des: '66',
			},
		],
		duo: [
			{
				subhead: 'ISTJ',
				des: '이런 친구랑 함께 하다간 정말 큰일나는 여행일거예요 !',
			},
		],
		counter: [
			{
				subhead: 'INFJ',
				des: '여행만큼 좋은 힐링이 있을까?',
			},
		],
	},
	ESFP: {
		subhead: '여행계의 얼리어답터',
		subject: '조용한 어쩌고 저쩌고 열정의 스페인!',
		nickname: '과학자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '1111111111',
			},
			{
				des: '222',
			},
			{
				des: '33',
			},
			{
				des: '44',
			},
			{
				des: '5555',
			},
			{
				des: '66',
			},
		],
		duo: [
			{
				subhead: 'ISFJ',
				des: '이런 친구랑 함께 하다간 정말 큰일나는 여행일거예요 !',
			},
		],
		counter: [
			{
				subhead: 'INTJ',
				des: '이런 친구랑 함께 하다간 정말 큰일나는 여행일거예요 !',
			},
		],
	},

	ENTJ: {
		subhead: '여행지에서 국밥처럼 든든한',
		subject: '조용한 어쩌고 저쩌고 열정의 스페인!',
		nickname: '과학자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '1111111111',
			},
			{
				des: '222',
			},
			{
				des: '33',
			},
			{
				des: '44',
			},
			{
				des: '5555',
			},
			{
				des: '66',
			},
		],
		duo: [
			{
				subhead: 'INTP',
				des: '혼자라서 즐거워요~ 자유가 최고야',
			},
		],
		counter: [
			{
				subhead: '으윽 정반대의 어쩌고 저쪼고',
				des: '이런 친구랑 함께 하다간 정말 큰일나는 여행일거예요 !',
			},
		],
	},
	ENTP: {
		subhead: '남는 건 결국 음식이야 식도락 여행!',
		subject: '조용한 어쩌고 저쩌고 열정의 스페인!',
		nickname: '과학자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '1111111111',
			},
			{
				des: '222',
			},
			{
				des: '33',
			},
			{
				des: '44',
			},
			{
				des: '5555',
			},
			{
				des: '66',
			},
		],
		duo: [
			{
				subhead: '으윽 정반대의 어쩌고 저쪼고',
				des: '이런 친구랑 함께 하다간 정말 큰일나는 여행일거예요 !',
			},
		],
		counter: [
			{
				subhead: '으윽 정반대의 어쩌고 저쪼고',
				des: '이런 친구랑 함께 하다간 정말 큰일나는 여행일거예요 !',
			},
		],
	},
	ENFJ: {
		subhead: '작은 세세한 것까지 다 아름다운 감수성이 넘치는 스타일',
		subject: '조용한 어쩌고 저쩌고 열정의 스페인!',
		nickname: '과학자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '1111111111',
			},
			{
				des: '222',
			},
			{
				des: '33',
			},
			{
				des: '44',
			},
			{
				des: '5555',
			},
			{
				des: '66',
			},
		],
		duo: [
			{
				subhead: 'INFP',
				des: '영화나 드라마에서 보는 로맨틱한 여행지!',
			},
		],
		counter: [
			{
				subhead: '으윽 정반대의 어쩌고 저쪼고',
				des: '이런 친구랑 함께 하다간 정말 큰일나는 여행일거예요 !',
			},
		],
	},
	ENFP: {
		subhead: '물 흐르듯 흘러가는대로 여행하는 자유로운 영혼',
		subject: '조용한 어쩌고 저쩌고 열정의 스페인!',
		nickname: '과학자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '1111111111',
			},
			{
				des: '222',
			},
			{
				des: '33',
			},
			{
				des: '44',
			},
			{
				des: '5555',
			},
			{
				des: '66',
			},
		],
		duo: [
			{
				subhead: 'INFJ',
				des: '여행만큼 좋은 힐링이 있을까?',
			},
		],
		counter: [
			{
				subhead: 'ISTJ',
				des: '1분도 허투루 버리지 않는 철저한 계획의 끝판왕',
			},
		],
	},
	ESTJ: {
		subhead: '타고난 리더! 여행 단톡방의 독재자',
		subject: '조용한 어쩌고 저쩌고 열정의 스페인!',
		nickname: '과학자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '1111111111',
			},
			{
				des: '222',
			},
			{
				des: '33',
			},
			{
				des: '44',
			},
			{
				des: '5555',
			},
			{
				des: '66',
			},
		],
		duo: [
			{
				subhead: 'ISTP',
				des: '이런 친구랑 함께 하다간 정말 큰일나는 여행일거예요 !',
			},
		],
		counter: [
			{
				subhead: 'INFP',
				des: '이런 친구랑 함께 하다간 정말 큰일나는 여행일거예요 !',
			},
		],
	},
	ESFJ: {
		subhead: '사랑하는 사람들과 사랑하는 장소를 함께!',
		subject: '조용한 어쩌고 저쩌고 열정의 스페인!',
		nickname: '과학자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '1111111111',
			},
			{
				des: '222',
			},
			{
				des: '33',
			},
			{
				des: '44',
			},
			{
				des: '5555',
			},
			{
				des: '66',
			},
		],
		duo: [
			{
				subhead: 'ISFP',
				des: '이런 친구랑 함께 하다간 정말 큰일나는 여행일거예요 !',
			},
		],
		counter: [
			{
				subhead: 'INTP',
				des: '혼자라서 즐거워요~ 자유가 최고야',
			},
		],
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
			<h>당신에게 제일 어울리는 여행지는</h>
			<h3>{nation.subject}</h3>

			<img src={nation.img} alt="img" width="500px" height="500px" />
			<div>
				{nation.nickname}
				{countryName}의 여행스타일은 ?
			</div>
			<div>{nation.subhead}</div>
			<ul>
				{nation.description.map(item => {
					return <li>{nation.description[item]}</li>
				})}
			</ul>
			<div>
				<div>
					<img
						src="https://i.pinimg.com/564x/f3/59/bb/f359bbfa27bf5d6e975621037aa78cc8.jpg"
						alt=""
						width="100px"
						height="100px"
					/>
					<b>함께하면 좋아요 !</b>
					<p>{nation.duo[0].des}</p>
					<p>찰떡궁합 그 자체{nation.duo[0].subhead}</p>
				</div>
				<div>
					<img
						src="https://i.pinimg.com/564x/5a/85/22/5a8522a5d349d6adcbdb47d135d1d0f1.jpg"
						alt=""
						width="100px"
						height="100px"
					/>
					<b>가능하면 피하는게 좋겠어요 !</b>
					<p>{nation.counter[0].des}</p>
					<p>도망가세요 {nation.counter[0].subhead}</p>
				</div>
			</div>
			<Link to="/">
				<button>다시하기</button>
			</Link>
			<button>링크복사</button>
		</>
	)
}

export default Profile
