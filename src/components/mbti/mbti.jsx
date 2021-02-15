import Options from '../options/option'

const MBTI = () => {
	// const questions = [
	// 	{
	// 		option: 'EI',
	// 		question: '이번 여행은 어디로 떠나볼까?',
	// 		answers: [
	// 			{
	// 				type: 'E',
	// 				score: 2,
	// 				content: '수 많은 리뷰로 검증된 장소로 가자!',
	// 			},
	// 			{
	// 				type: 'I',
	// 				score: 5,
	// 				content: '아무도 안 가본 새로운 장소로 떠나자!',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		id: 2,
	// 		situation: '	우리 여행지 가서 뭐할까?',
	// 		descriptionA: '자전거, 카약 등 다양한 액티비티를 하자!',
	// 		descriptionB: '편안한 장소에서 느긋하게 힐링하자!',
	// 	},
	// 	{
	// 		id: 3,
	// 		situation: '친구와 함께하는 여행 VS 혼자 떠나는 여행',
	// 		descriptionA: '역시 친구랑 함께하는 우정여행이 최고야 ! ',
	// 		descriptionB: '여행은 혼자 배낭 메고 떠나는게 낭만 아닐까 ?',
	// 	},
	// 	{
	// 		id: 4,
	// 		situation: '화려한 건축물을 보며 드는 생각은 ?',
	// 		descriptionA: '어떻게 저걸 지었을까 ? 라며 고민한다',
	// 		descriptionB: '와 지린다.,.. 하고 감탄한다',
	// 	},
	// 	{
	// 		id: 5,
	// 		situation: '친구가 쓸데없는 기념품을 살 때',
	// 		descriptionA: '그래 니가 행복하다면 됐어...',
	// 		descriptionB: '그거 결국 쓰레기 된다',
	// 	},
	// 	{
	// 		id: 6,
	// 		situation: '나는 여행지를 선택할 때 주로',

	// 		descriptionA: '사람이 많은 도시로',
	// 		descriptionB: '나무가 많은 자연으로',
	// 	},
	// 	{
	// 		id: 7,
	// 		situation: '숙소를 구할 때',
	// 		descriptionA: '저녁에 바비큐 파티를 여는 곳',
	// 		descriptionB: '조용하고 아늑한 곳',
	// 	},
	// 	{
	// 		id: 8,
	// 		situation: '여행지에 대한 감상을',
	// 		descriptionA: '말로 내뱉어야 직성이 풀린다',
	// 		descriptionB: '내 마음 속에 저_장, 마음에 담고 느낀다',
	// 	},
	// 	{
	// 		id: 9,
	// 		situation: '여행을 떠날 때 계획은',
	// 		descriptionA: '내가 걷는 길이 곧 여행코스',
	// 		descriptionB: '계획은 필수',
	// 	},
	// 	{
	// 		id: 10,
	// 		situation: '여행 경비는',
	// 		descriptionA: '당장 국제거지만 안되면 되지!',
	// 		descriptionB: '걸어다니는 계산기로 변신',
	// 	},
	// 	{
	// 		id: 11,
	// 		situation: '여행을 다녀온 후',
	// 		descriptionA: '홈스윗홈.. 침대로 점프!',
	// 		descriptionB: '캐리어를 열고 물건을 정리한다',
	// 	},
	// 	{
	// 		id: 12,
	// 		situation: '여행지에서 식사할 때',
	// 		descriptionA: '유~명한 맛집을 작정하고 노리는 헌터',
	// 		descriptionB: '처음 본 순간 사랑에 빠진 길거리 가게',
	// 	},
	// ]

	return (
		<>
			<h2>MBTI PAGES</h2>
			<Options />
		</>
	)
}

export default MBTI
