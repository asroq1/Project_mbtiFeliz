import styles from './countries.module.css'
import { Link } from 'react-router-dom'
import Countries from '../../common/api/countriesApi/../countriesApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faCopy } from '@fortawesome/free-solid-svg-icons'
import { faEarlybirds } from '@fortawesome/free-brands-svg-icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'
const Profile = ({ match }) => {
	const url = window.location.href // url 복사
	const { countryName } = match.params
	const nation = Countries[countryName]

	if (!nation) {
		return <div>존재하지 않는 결과입니다.</div>
	}
	const copyAlert = () => {
		alert('링크 생성!')
	}
	return (
		<div className={styles.wrapper} key={nation.id}>
			<div className={styles.container}>
				<div className={styles.header}>
					<FontAwesomeIcon icon={faEarlybirds} className={styles.birds} />
				</div>
				<div className={styles.reust__title}>
					<h1 className={styles.result__city}>{nation.subject}</h1>
				</div>
				<img src={nation.img} alt="img" className={styles.main__img} />
				<div className={styles.result__type}>
					<h2>나의 여행성향은?</h2>
					<br />
					<h3>{nation.subhead}</h3>
				</div>
				<ul>
					{nation.description.map(item => {
						return (
							<li className={styles.result__style__detail} key={item.des}>
								{item.des}
							</li>
						)
					})}
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
					<Link to="/" className={styles.button}>
						다시하기
						<FontAwesomeIcon icon={faSignOutAlt} className={styles.icon} />
					</Link>
					<CopyToClipboard text={url}>
						<button className={styles.copy__button} onClick={copyAlert}>
							링크복사
							<FontAwesomeIcon icon={faCopy} className={styles.icon} />
						</button>
					</CopyToClipboard>
				</div>
			</div>
		</div>
	)
}

export default Profile
