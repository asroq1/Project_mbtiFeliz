import React from 'react'
import styles from './countries.module.css'
import { Link } from 'react-router-dom'
import Countries from '../../common/api/countriesApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faCopy } from '@fortawesome/free-solid-svg-icons'
import { faEarlybirds } from '@fortawesome/free-brands-svg-icons'

const Profile = ({ match }) => {
	const { countryName } = match.params
	const nation = Countries[countryName]
	if (!nation) {
		return <div>존재하지 않는 결과입니다.</div>
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<FontAwesomeIcon icon={faEarlybirds} className={styles.header} />
				<div className={styles.reust__title}>
					<h2 className={styles.result__header}>
						{nation.subhead}에게 어울리는 여행지
					</h2>
					<p className={styles.result__city}>{nation.subject}</p>
				</div>
				<img src={nation.img} alt="img" className={styles.main__img} />
				<div>
					<h2 className={styles.result__type}>
						{nation.nickname}&nbsp;
						{countryName}의 여행스타일은 ?
					</h2>
				</div>
				<ul>
					<li className={styles.result__style__detail}>
						{nation.description[0].des}
					</li>
					<li className={styles.result__style__detail}>
						{nation.description[1].des}
					</li>
					<li className={styles.result__style__detail}>
						{nation.description[2].des}
					</li>
					<li className={styles.result__style__detail}>
						{nation.description[3].des}
					</li>
					<li className={styles.result__style__detail}>
						{nation.description[4].des}
					</li>
					<li className={styles.result__style__detail}>
						{nation.description[5].des}
					</li>
				</ul>
				<div className={styles.result__advice__box}>
					<div className={styles.result__advice}>
						<img src={nation.duo[0].img} alt="mbti캐릭터" />
						<div>
							<h4>함께하면 좋아요!</h4>
							<p className={styles.advice__strong}>
								찰떡궁합 그 자체 {nation.duo[0].subhead}
							</p>
							<p>{nation.duo[0].des}</p>
						</div>
					</div>
					<div className={styles.result__advice}>
						<img src={nation.counter[0].img} alt="mbti캐릭터" />
						<div>
							<h4>가능하면 피하는게 좋겠어요!</h4>
							<p className={styles.advice__strong}>
								도망가세요 {nation.counter[0].subhead}
							</p>
							<p>{nation.counter[0].des}</p>
						</div>
					</div>
				</div>
				<div className={styles.button__box}>
					<Link to="/">
						다시하기
						<FontAwesomeIcon icon={faSignOutAlt} className={styles.icon} />
					</Link>
					<a href="#">
						링크복사
						<FontAwesomeIcon icon={faCopy} className={styles.icon} />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Profile
