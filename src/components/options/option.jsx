import React, { createRef, useEffect, useState } from 'react'
import styles from './option.module.css'
import { useHistory } from 'react-router-dom'
const Options = () => {
	const questions = [
		{
			option: 'EI',
			question: '이번 여행은 어디로 떠나볼까?',
			answers: [
				{
					type: 'E',
					score: 2,
					content: '수 많은 리뷰로 검증된 장소로 가자!',
				},
				{
					type: 'I',
					score: 5,
					content: '아무도 안 가본 새로운 장소로 떠나자!',
				},
			],
		},
		{
			option: 'EI',
			question: '	우리 여행지 가서 뭐할까?',
			answers: [
				{
					type: 'E',
					score: 2,
					content: '자전거, 카약 등 다양한 액티비티를 하자!',
				},
				{
					type: 'I',
					score: 5,
					content: '편안한 장소에서 느긋하게 힐링하자!',
				},
			],
		},
		{
			option: 'EI',
			question: '친구와 함께하는 여행 VS 혼자 떠나는 여행',
			answers: [
				{
					type: 'E',
					score: 2,
					content: '역시 친구랑 함께하는 우정여행이 최고야 ! ',
				},
				{
					type: 'I',
					score: 5,
					content: '여행은 혼자 배낭 메고 떠나는게 낭만 아닐까 ?',
				},
			],
		},
		{
			option: 'SN',
			question: '화려한 건축물을 보며 드는 생각은 ?',
			answers: [
				{
					type: 'S',
					score: 2,
					content: '어떻게 저걸 지었을까 ? 라며 고민한다',
				},
				{
					type: 'N',
					score: 5,
					content: '와 지린다.,.. 하고 감탄한다',
				},
			],
		},
		{
			which: 'SN',
			question: '친구가 쓸데없는 기념품을 살 때',
			answers: [
				{
					type: 'S',
					score: 2,
					content: '그래 니가 행복하다면 됐어...',
				},
				{
					type: 'N',
					score: 5,
					content: '그거 결국 쓰레기 된다 ',
				},
			],
		},
		{
			which: 'SN',
			question: '나는 여행지를 선택할 때 주로',
			answers: [
				{
					type: 'S',
					score: 2,
					content: '사람이 많은 도시로',
				},
				{
					type: 'N',
					score: 5,
					content: '나무가 많은 자연으로',
				},
			],
		},
		{
			option: 'TF',
			question: '숙소를 구할 때',
			answers: [
				{
					type: 'T',
					score: 2,
					content: '저녁에 바비큐 파티를 여는 곳',
				},
				{
					type: 'F',
					score: 5,
					content: '조용하고 아늑한 곳',
				},
			],
		},
		{
			option: 'TF',
			question: '여행지에 대한 감상을',
			answers: [
				{
					type: 'T',
					score: 2,
					content: '말로 내뱉어야 직성이 풀린다',
				},
				{
					type: 'F',
					score: 5,
					content: '내 마음 속에 저_장, 마음에 담고 느낀다',
				},
			],
		},
		{
			option: 'TF',
			question:
				'고민을 얘기하는 친구, 듣다 보니 친구의 잘못인 것 같다. 그럴 때 나는?',
			answers: [
				{
					type: 'T',
					score: 2,
					content: '친구의 잘못된 점을 말해준다.',
				},
				{
					type: 'F',
					score: 5,
					content: '직접적으로 말하면 친구가 그래 할까봐 돌려 말한다.',
				},
			],
		},
		{
			option: 'JP',
			question: '준비물을 준비할 때 나는?',
			answers: [
				{
					type: 'J',
					score: 2,
					content: '하루 전 날 미리 준비한다.',
				},
				{
					type: 'P',
					score: 5,
					content: '‘내일 챙겨야지’ 하다가 까먹고 놓고 오는 일이 많다.',
				},
			],
		},
		{
			option: 'JP',
			question:
				'끝나고 집에 가서 공부하려 했는데, 친구들이 놀자고 붙잡는다. 나는?',
			answers: [
				{
					type: 'J',
					score: 2,
					content: '계획에 없던 일인데…매우 당황스럽다.',
				},
				{
					type: 'P',
					score: 5,
					content: '오케이! 역시 계획대로 안 되는 것이 인생! 놀자!!!!',
				},
			],
		},
		{
			option: 'JP',
			question: '내가 가고싶은 여행지 스타일은?',
			answers: [
				{
					type: 'J',
					score: 2,
					content:
						'내가 계획한대로! 계획적으로 일의 순서대로 진행하는 것을 좋아해!',
				},
				{
					type: 'P',
					score: 5,
					content:
						'그때그때 생각나는 대로 일 처리! 융통성 있게 하는 것을 좋아해!',
				},
			],
		},
	]
	const TOTAL_SLIDES = 12
	const [score, setScore] = useState(0)
	//성향 로직
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
		///////////////////
		setScore(score + 2)
		setCurrentSlide(currentSlide + 1)
		slideRef.current.style.transform += 'translateX(-100vw)'
		// console.log(`btn1 =${currentSlide}`)
	}
	const nextSlideSec = () => {
		setNum(num + 1)
		setType(questions[num].answers[1].type)
		setMbti(mbti + type)
		///////////////
		setScore(score + 5)
		setCurrentSlide(currentSlide + 1)
		slideRef.current.style.transform += 'translateX(-100vw)'
		// console.log(`btn2 =${currentSlide}`)
	}
	// const mbitChecker = () => {
	// 	let result = 'E'
	// 	if (mbti == 'EEE') {
	// 		return (mbti = 'E')
	// 	}
	// 	console.log(`res = ${result}`)
	// }
	useEffect(() => {
		currentSlide === 13 && history.push(`/result/${mbti}`)
		console.log(`${mbti}`)
		// mbitChecker()
	})
	// E E E S S S T T F P P
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
