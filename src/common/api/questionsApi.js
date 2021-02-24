//여행MBTI
const Questions = [
	{
		option: 'EI',
		question:
			'여행지에 도착한 첫날 밤. 게스트하우스에서 처음 본 다른 여행자 나의 반응은?',
		answers: [
			{
				type: 'E',
				content: '인사를 하며 여행에 관한 이야기를 나눈다 ',
			},
			{
				type: 'I',
				content: '못본 척 하고 내일을 위해 빠른 잠을 청한다',
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

				content: '심심하니 말을 걸어 함께 걸어간다.',
			},
			{
				type: 'I',
				content: '버스를 다시 기다리며 정류장에 남는다',
			},
		],
	},
	{
		option: 'EI',
		question: '여행 마지막 날 도시에 열린 큰 축제',
		answers: [
			{
				type: 'E',
				content: '내 여행의 마지막을 축제로 아름답게 마무리할래',
			},
			{
				type: 'I',
				content: '여행 동안 좋았던 곳들을 한 번 더 다녀와야겠어',
			},
		],
	},
	{
		option: 'SN',
		question: '같은 가격에 오래 걸리는 야간열차 VS 빠른 비행기',
		answers: [
			{
				type: 'S',
				content: '빠른게 장땡이지 바로 비행기',
			},
			{
				type: 'N',
				content: '뭐야 완전 낭만적이잖아. 바로 야간열차',
			},
		],
	},
	{
		which: 'SN',
		question: '기념품 가게에서 발견한 너무 마음에 드는 기념품',
		answers: [
			{
				type: 'S',
				content: '결국엔 이쁜 쓰레기. 돈을 아끼자',
			},
			{
				type: 'N',
				content: '이런 걸 어디서 또 팔겠어 바로 구입',
			},
		],
	},
	{
		which: 'SN',
		question: '당신이 선호하는 여행지 스타일은 ?',
		answers: [
			{
				type: 'S',
				content: '사람들이 많이 가고 유럽이 최고야 ',
			},
			{
				type: 'N',
				content: '나는 남들이 다 가는 곳은 싫어 남미 ',
			},
		],
	},
	{
		option: 'TF',
		question: '갑자기 나에게 교통비가 모자란다며 돈을 빌려달라는 외국인',
		answers: [
			{
				type: 'T',
				content: '정중하게 쏘리를 말하고 거절한다',
			},
			{
				type: 'F',
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
				content: '바로 다음 날 차를 알아본다.',
			},
			{
				type: 'F',
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
				content: '스쳐 가는 인연이니 남은 일정을 위해 헤어진다.',
			},
			{
				type: 'F',
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
				content: '영어도 잘 못 하고 두려워서 함께하는 게 좋아',
			},
			{
				type: 'P',
				content: '혼자 다니는 여행이 제일 속 편하고 즐거워',
			},
		],
	},
	{
		option: 'JP',
		question: '나의 여행스타일은?',
		answers: [
			{
				type: 'J',
				content: '1분 1초도 허투루 쓰지 않고 스케줄을 완벽하게 세워야 해',
			},
			{
				type: 'P',
				content: '스마트폰만 있으면 두려울 게 없는 노플래너',
			},
		],
	},
	{
		option: 'JP',
		question: '여행지에 맛집 찾는 방법',
		answers: [
			{
				type: 'J',
				content: '맛집 리스트를 쭉 뽑아와서 골라 간다!',
			},
			{
				type: 'P',
				content: '맛있어 보이면 곧장 들어가서 먹는다',
			},
		],
	},
]
export default Questions
