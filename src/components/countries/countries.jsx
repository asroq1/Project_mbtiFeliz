import React from 'react'
import { Link } from 'react-router-dom'
import Countries from '../../common/api/countriesApi'
const Profile = ({ match }) => {
	// 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.
	const { countryName } = match.params
	const nation = Countries[countryName]
	if (!nation) {
		return <div>존재하지 않는 결과입니다.</div>
	}
	return (
		<>
			<h>당신에게 제일 어울리는 여행지는</h>
			<h3>{nation.subject}</h3>

			<img src={nation.img} alt="img" width="500px" height="500px" />
			<div>나의 여행 유형은? {nation.subhead}</div>
			<div>
				{nation.nickname}
				{countryName}의 여행스타일은 ?
			</div>
			<ul>
				<li>{nation.description[0].des}</li>
				<li>{nation.description[1].des}</li>
				<li>{nation.description[2].des}</li>
				<li>{nation.description[3].des}</li>
				<li>{nation.description[4].des}</li>
				<li>{nation.description[5].des}</li>
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
