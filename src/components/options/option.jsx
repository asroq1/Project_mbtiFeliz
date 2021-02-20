import React, { createRef, useEffect, useState } from 'react'
import styles from './option.module.css'
import { useHistory } from 'react-router-dom'
const Options = () => {
	const questions = [
		{
			option: 'EI',
			question:
				'여행지에 도착한 첫날 밤. 게스트하우스에서 처음 본 다른 여행자 나의 반응은?',
			answers: [
				{
					type: 'E',
					score: 2,
					content: '인사를 하며 여행에 관한 이야기를 나눈다 ',
				},
				{
					type: 'I',
					score: 5,
					content: '짧은 인사만 하고 내일을 위해 빠른 잠을 청한다',
				},
			],
		},
		{
			option: 'EI',
			question:
				'버스를 한 정거장 빨리 내린 당신. 나처럼 실수하고 같이 내린 또래의 이성',
			answers: [
				{
					type: 'E',
					score: 2,
					content: '심심하니 말걸며 함께 걸어간다.',
				},
				{
					type: 'I',
					score: 5,
					content: '버스를 다시 기다리며 정류장에 서있는다.',
				},
			],
		},
		{
			option: 'EI',
			question: '여행 마지막 날 도시에 열린 큰 축제',
			answers: [
				{
					type: 'E',
					score: 2,
					content: '내 여행의 마지막을 축제로 아름답게 마무리 할래',
				},
				{
					type: 'I',
					score: 5,
					content: '여행동안 좋았던 곳들을 한 번 더 다녀와야겠어',
				},
			],
		},
		{
			option: 'SN',
			question: '같은 가격에 오래 걸리는 야간열차 VS 빠른 비행기',
			answers: [
				{
					type: 'S',
					score: 2,
					content: '빠른게 장땡이지 바로 비행기',
				},
				{
					type: 'N',
					score: 5,
					content: '뭐야뭐야 완전 낭만적이잖아 바로 야간열차',
				},
			],
		},
		{
			which: 'SN',
			question: '기념품 가게에서 발견한 너무 마음에 드는 기념품',
			answers: [
				{
					type: 'S',
					score: 2,
					content: '결국엔 이쁜 쓰레기. 돈을 아끼자',
				},
				{
					type: 'N',
					score: 5,
					content: '이런 걸 어디서 또 팔겠어 바로 구입',
				},
			],
		},
		{
			which: 'SN',
			question: '아 고민돼 도대체 어딜 가지 ?',
			answers: [
				{
					type: 'S',
					score: 2,
					content: '사람들이 많이 가는 유럽 ',
				},
				{
					type: 'N',
					score: 5,
					content: '나는 남들이 다 가는 곳은 싫어 남미 ',
				},
			],
		},
		{
			option: 'TF',
			question: '갑자기 나에게 교통비가 모자르다며 돈을 빌려달라는 외국인',
			answers: [
				{
					type: 'T',
					score: 2,
					content: '정중하게 쏘리를 말하고 거절한다',
				},
				{
					type: 'F',
					score: 5,
					content: '안타까우니 남는 동전을 준다',
				},
			],
		},
		{
			option: 'TF',
			question: '다음 도시로 떠나는 마지막 버스를 놓친 나',
			answers: [
				{
					type: 'T',
					score: 2,
					content: '바로 다음날 차를 알아본다.',
				},
				{
					type: 'F',
					score: 5,
					content: '에라 모르겠다 일단 밥부터 먹자',
				},
			],
		},
		{
			option: 'TF',
			question: '여행지에서 만난 마음에 드는 이성',
			answers: [
				{
					type: 'T',
					score: 2,
					content: '스쳐가는 인연이니 남은 일정을 위해 헤어진다',
				},
				{
					type: 'F',
					score: 5,
					content: '일정은 이미 안중에도 없다. 이 사람과 같이 여행하고 싶어',
				},
			],
		},
		{
			option: 'JP',
			question: '혼자 여행 VS 친구와 함께 여행',
			answers: [
				{
					type: 'J',
					score: 2,
					content: '혼자는 무서워 ㅜㅜ 친구랑 갈거야',
				},
				{
					type: 'P',
					score: 5,
					content: '역시 여행은 혼자지 ...',
				},
			],
		},
		{
			option: 'JP',
			question: '나의 여행스타일은?',
			answers: [
				{
					type: 'J',
					score: 2,
					content: '잠자기 전까지 모든 것을 스케줄링 한다',
				},
				{
					type: 'P',
					score: 5,
					content: '구글맵과 함께라면 내가 가는 그곳이 어디든 그곳이 여행지',
				},
			],
		},
		{
			option: 'JP',
			question: '여행지에 맛집 찾는 방법',
			answers: [
				{
					type: 'J',
					score: 2,
					content: '맛집 리스트를 쭉 뽑아와서 골라 간다!',
				},
				{
					type: 'P',
					score: 5,
					content: '맛있어 보이면 곧장 들어가서 먹는다',
				},
			],
		},
	]
	const TOTAL_SLIDES = 12
	const [type, setType] = useState([])
	const [num, setNum] = useState(0)
	const [currentSlide, setCurrentSlide] = useState(1)
	const slideRef = createRef(null)
	const history = useHistory()
	const [mbti, setMbti] = useState('')
	const nextSlideFir = () => {
		setNum(num + 1)
		setType(questions[num].answers[0].type)
		setMbti(mbti + type)
		setCurrentSlide(currentSlide + 1)
		slideRef.current.style.transform += 'translateX(-100vw)'
	}
	const nextSlideSec = () => {
		setNum(num + 1)
		setType(questions[num].answers[1].type)
		setMbti(mbti + type)
		setCurrentSlide(currentSlide + 1)
		slideRef.current.style.transform += 'translateX(-100vw)'
	}

	const mbtiChecker = () => {
		let map = {}
		let result = []
		for (let i = 0; i < mbti.length; i++) {
			if (mbti[i] in map) {
				map[mbti[i]] += 1
			} else {
				map[mbti[i]] = 1
			}
		}
		for (let count in map) {
			if (map[count] >= 2) {
				result.push(count)
			}
		}
		const awesome = result.join('')
		history.push(`/result/${awesome}`)
	}
	useEffect(() => {
		currentSlide > TOTAL_SLIDES && mbtiChecker()
	})

	return (
		<div className={styles.container}>
			<div className={styles.slider} ref={slideRef}>
				{questions.map(item => {
					return (
						<div className={styles.content} key={item.id}>
							<h2>
								{currentSlide} / {TOTAL_SLIDES}
							</h2>
							<h3>{item.question}</h3>
							<button className={styles.btnOne} onClick={nextSlideFir}>
								{item.answers[0].content}
							</button>
							<button className={styles.btnTwo} onClick={nextSlideSec}>
								{item.answers[1].content}
							</button>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Options
