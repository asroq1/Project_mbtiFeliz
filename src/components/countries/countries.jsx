import React from 'react'
import { Link } from 'react-router-dom'

const countries = {
	INTJ: {
		subhead: '아는 만큼 보인다! 여행모범생',
		subject: '동남아의 에메랄드, 싱가폴',
		nickname: '과학자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '계획적이고 분석력이 대개 분석력이 높은 편이에요',
			},
			{
				des: '1분 1초까지 철저하계 계획하는 것을 좋아해요',
			},
			{
				des:
					'개인주의적인 성향이 강해 타인에게 감정을 잘 드러내지 않는 편이에요',
			},
			{
				des: '마음을 연 상대에게도 무뚝뚝한 듯 보이지만 쑥스러워 티내지 않아요',
			},
			{
				des: '실용주의적이라 여행지에서 쓸데없는 소비는 하지 않는 편이에요',
			},
			{
				des: '여행중에도 종종 혼자만의 시간이 필요한 타입이에요',
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
				des: '여행계의 얼리어답터',
			},
		],
	},
	INTP: {
		subhead: '혼자라서 즐거워요~ 자유가 최고야',
		subject: '대만의 부산 가오슝, 대만',
		nickname: '과학자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: 'MBTI같은 자아 분석을 좋아하는 타입이에요!',
			},
			{
				des:
					'내향적인 성향이 강해 여행중에도 사람에게 관심을 가지는 일이 드물어요',
			},
			{
				des: '여행중에 혼자만의 시간이 매우 중요한 타입이에요',
			},
			{
				des: '가끔씩은 즉흥적인 행동을 하고 싶어질 때가 있어요',
			},
			{
				des: '여행중에도 교통수단,숙소 등 최대한 효율적인 선택을 하는 편이에요',
			},
			{
				des: '전체 인구의 3.3%, 한국인의 3%비율로 상당히 적은 유형이에요',
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
		subject: '인크레더블 인디아, 러크나우',
		nickname: '예언가형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des:
					'여행중 상대편을 잘 맞춰주지만 속에서 들끓는 불만을 표출하진 않아요!',
			},
			{
				des: '그렇지만 가끔 조심스럽게 할 말을 다 하는 경우도 가끔식은 있어요',
			},
			{
				des: '상대방을 배려하는 척하며 본인이 원하는 방향으로 잘 유도한답니다',
			},
			{
				des: '함께 여행한 뒤 자신과 별로 맞지 않았다면 조용히 손절하는 타입!',
			},
			{
				des: '인내심과 배려심이 많고 알고보면 따뜻한 사람이에요',
			},
			{
				des: '여행지에 대해서 호불호가 크게 나뉘는 타입이에요',
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
				subhead: 'ESTP',
				des: '우리는 모두 친구! 모든 지구인들은 내 친구',
			},
		],
	},
	INFP: {
		subhead: '영화나 드라마에서 나오는 장소의 주인공 ',
		subject: '느와르의 도시, 홍콩',
		nickname: '아이디어뱅크형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '말 그대로 가성비 러버! 효율성을 사랑하는 타입이에요',
			},
			{
				des: '남의 눈치를 많이 보지만 눈치가 빠르고 공감력이 뛰어난 편이에요',
			},
			{
				des: '여행이 싫지는 않지만 귀찮아서 못가는 유형이에요',
			},
			{
				des:
					'여행중에 문화 체험,유적지 문화재 관람,자연환경 감상들을 좋아할 확률이 높아요!',
			},
			{
				des:
					'여행중 일기를 적거나 사진을 찍어서 기록하고 추억을 남기는 것을 좋아해요!',
			},
			{
				des: '집돌이,집순이 성향이 강해 여행지에선 숙소가 중요한 타입이에요',
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
				subhead: 'ESFJ',
				des: '사랑하는 사람들과 사랑하는 장소를 함께!',
			},
		],
	},
	ISTJ: {
		subhead: '여행계획은 출발 세 달 전부터 세우는 거야',
		subject: '제일 가까운 일본, 후쿠오카',
		nickname: '세상의 소금형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '여행계획은 언제나 나의 몫!',
			},
			{
				des: '여행마저도 철저히 계획하에 움직여야 하는 성향이에요',
			},
			{
				des: '예약 전 쿠폰,할인등으로 최대한 합리적으로 소비하는 것을 좋아해요',
			},
			{
				des: '여행중에 예정에 없던 일이 일어나는 것을 극도로 싫어해요!',
			},
			{
				des:
					'즉흥적인 여행을 좋아하는 사람과 여행을 다니다가는 큰일 날 수 있어요!',
			},
			{
				des:
					'성향이 잘 맞는 친구와 함께라면 제일 든든한 여행메이트가 될 확률이 높아요!',
			},
			{
				des:
					'but 반대인 성향의 사람과 여행하면 빈틈이 없는 노잼 여행메이트가 될 확률이 높으니 조심하세요',
			},
		],
		duo: [
			{
				subhead: 'ESTP',
				des: '우리는 모두 친구! 모든 지구인들은 내 친구',
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
		subject: '호이안&후에, 베트남',
		nickname: '임금뒷편의 권력형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '눈치가 상당히 빨라 함께 여행하기 좋은 타입이에요!',
			},
			{
				des:
					'섬세하고 상대방의 의견을 경청하는 유형이라 단체여행에 꼭 필요한 사람이에요',
			},
			{
				des: '대비가 철저한 타입이라 여행시에 짐이 많은 편이에요',
			},
			{
				des: '사소한 것들을 잘 기억해 여행지에서 있던 일들을 잘 기억해요',
			},
			{
				des: '새로운 여행지보다 이전에 가봤던 여행지를 선호해요!',
			},
			{
				des: '남들을 배려하는 성향이 때로는 본인의 여행을 힘들게 한다',
			},
		],
		duo: [
			{
				subhead: 'ESFP',
				des: '여행계의 얼리어답터',
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
		subject: '에베레스트의 도시 포카라, 네팔',
		nickname: '백과사전형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '평소엔 소극적이지만 여행지에선 대담해지는 타입이에요!',
			},
			{
				des: '여행중에 가끔 특이한 것에 확 꽂히는 경우가 종종 있어요',
			},
			{
				des:
					'여행계획은 세세하게 짜지 않고 큰 틀만 계획하고 떠나는 성향이 높아요',
			},
			{
				des: '포기가 빠른 편이라 식당을 줄서서 기다리지 않아요',
			},
			{
				des: '여럿보단 혼자 여행하는 것을 즐기는 편이에요',
			},
			{
				des: '혼자 놀기의 끝판왕이라 혼밥,여행,영화관도 무리 없어요!',
			},
		],
		duo: [
			{
				subhead: 'ESTJ',
				des: '타고난 리더! 여행 단톡방의 독재자',
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
		subject: '고대 도시의 도시 시엠립, 캄보디아',
		nickname: '성인군자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '타고난 결정장애 스타일이라 최종결정을 힘들어할 때가 있어요',
			},
			{
				des: '상대방을 배려하는 배려심이 깊어 함께 여행하면 좋아요',
			},
			{
				des: '여행지에서 종종 분위기에 취할 때가 있어요',
			},
			{
				des: '혼자만의 시간을 좋아해 혼자 여행을 떠나기 좋아해요',
			},
			{
				des: '본인이 좋아하는 일에는 가끔 열정이 넘쳐요',
			},
			{
				des: '주변 사람들의 분위기에 따라 성격이 잘 변하는 편이에요',
			},
		],
		duo: [
			{
				subhead: 'ESFJ',
				des: '사랑하는 사람들과 사랑하는 장소를 함께!',
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
		subject: '서핑의 성지 발리, 인도네시아',
		nickname: '인싸형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des:
					'문제 해결능력이 높아 여행지에서 일어나는 돌발상황을 잘 대처하는 편이에요',
			},
			{
				des:
					'즐기며 사는 삶을 추구하는 경향이 높아 여행을 누구보다 사랑하는 사람이에요!',
			},
			{
				des:
					'스릴과 자유분방함을 좋아해 여행중에 액티비티 활동을 많이하는 편이에요',
			},
			{
				des: '사람을 좋아해 누구든지 자신의 친구로 만들 수 있어요',
			},
			{
				des:
					'가끔 여행지에서 사업아이템을 발견하고 눈독 들이는 일이 발생하기도 해요',
			},
			{
				des: '감정기복이 심한 사람이랑 여행하는 것을 많이 힘들어해요',
			},
		],
		duo: [
			{
				subhead: 'ISTJ',
				des: '여행계획은 출발 세 달 전부터 세우는 거야',
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
		nickname: '사교적인 유형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '항상 텐션이 높아서 함께 여행한다면 힘들수도 있어요!',
			},
			{
				des: '면세점과 아울렛에서 충동구매를 할 때가 종종 있어요',
			},
			{
				des: '타고난 인싸라서 여행중에는 인스타가 조용할 날이 없어요',
			},
			{
				des: '여행중 제일 설레는 시간은 여행 가기 전!',
			},
			{
				des: '신나고 재미있는 성격이라 여행지에서도 많은 친구를 만들어요',
			},
			{
				des:
					'매우 덜렁거려서 옆에서 잘 챙겨주는 타입의 사람과 여행하면 좋아요!',
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
				des: '아는 만큼 보인다! 여행모범생',
			},
		],
	},

	ENTJ: {
		subhead: '여행지에서 국밥처럼 든든한',
		subject: '신비의 지역 모리셔스',
		nickname: '지도자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '타고난 지도자형 답게 여행계획도 역할분담을 확실하게 나눠요!',
			},
			{
				des:
					'혼자 있는 것을 싫어하는 편이라 주로 함께하는 여행을 하는 편이에요',
			},
			{
				des:
					'가끔 고집이 센 것처럼 보이기도 하지만 자신의 생각이 잘못된 것이 확인되면 바로 수긍하는 편이에요',
			},
			{
				des:
					'지적 욕구가 강해 여행전 미리 여행정보에 대해 빠삭하게 알고 가는 편이에요',
			},
			{
				des:
					'효율성을 추구하는 타입이라 여행중에 무의미하게 시간을 보내는 것을 싫어해요',
			},
			{
				des: '항상 실행하기 전에 계획부터 하는 유형이에요!',
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
				subhead: 'ISFP',
				des: '여행계의 메딕 힐링여행 러버!',
			},
		],
	},
	ENTP: {
		subhead: '남는 건 결국 음식이야 식도락 여행!',
		subject: '도쿄, 일본',
		nickname: '발명가형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '아는 게 너무 많아서 여행지에서 투머치토커가 될 확률이 높아요!',
			},
			{
				des: '자기주장이 강해 여행중에 가끔 난처한 경우가 생길 수 있어요',
			},
			{
				des:
					'타고난 언변으로 함께 여행한다면 심심할 일 없는 타고난 입담을 소유한 사람일 확률이 높아요!',
			},
			{
				des:
					'가끔 이걸 모른다고? 싶을 정도로 관심없는 것에는 아예 신경을 쓰지 않아요',
			},
			{
				des:
					'이것저것 다 하자고 말만 하고 실제로는 그냥 숙소에서 빈둥거리는 것을 좋아한답니다',
			},
			{
				des:
					'독립적인 성격으로 누군가 주도하는 여행을 함께 한다면 좋아하지 않을 확률이 높아요!',
			},
			{
				des:
					'가끔 하나의 주제로 두 시간동안 얘기할 수 있는 특별한 능력을 소유하고 있어요!',
			},
		],
		duo: [
			{
				subhead: 'INTJ',
				des: '아는 만큼 보인다! 여행모범생',
			},
		],
		counter: [
			{
				subhead: 'ISFJ',
				des: '여유롭지만 가성비 좋은 여행이 좋아',
			},
		],
	},
	ENFJ: {
		subhead: '세세한 것까지 다 아름다운 감수성이 넘치는 스타일',
		subject: '커피의 본고장 멜버른, 호주',
		nickname: '언변능숙형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '적극적이고 추진력이 강해 단체여행에서 활발한 타입이예요',
			},
			{
				des: '여행중에 사서 고생할 확률이 높아요!',
			},
			{
				des: '준비가 철저해서 여행중에 없는 물건이 없어요',
			},
			{
				des: '친화력이 높아 여행지에서도 인싸일 확률이 높아요!',
			},
			{
				des: '때때로 감정기복이 심해 감수성이 넘치는 때가 있어요',
			},
			{
				des: '국내에서 1%의 비율로 가장 적은 유형의 타입이에요',
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
				subhead: 'ISTP',
				des: '혼자가 좋지만 그렇다고 심심한 건 싫어',
			},
		],
	},
	ENFP: {
		subhead: '물 흐르듯 흘러가는대로 여행하는 자유로운 영혼',
		subject: '천국의 섬 보라카이,필리핀',
		nickname: '과학자형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '새로운 사람을 만나기 좋아해서 어디에서나 친구를 만들어요 ',
			},
			{
				des:
					'여행중 사람을 만나는 것을 좋아하지만, 때론 혼자만의 시간이 필요한 때가 있어요',
			},
			{
				des: '멋내고 꾸미는 것을 좋아해서 여행지에서도 언제나 패피에요!',
			},
			{
				des: '여행중에 계획없이 그때그때 일어나는 일을 즐겨요',
			},
			{
				des:
					'여행지에서 관심이 끌리지 않는 장소가 있으면 눈길도 주지 않는 편이에요',
			},
			{
				des:
					'가끔 고집스러운 면이 있지만, 그렇다고 심하게 고집을 부리지는 않아요!',
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
		subject: '한반도의 심장 서울, 대한민국',
		nickname: '사업가형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des: '여행에서마저도 계획적이고 체계적인 모습이 드러나는 편이에요',
			},
			{
				des: '자신의 계획에 있어서 주관이 뚜렷한 편이에요',
			},
			{
				des: '계획이 틀어지는 일이 발생하면 매우 싫어해요!',
			},
			{
				des: '호불호가 확실해 때로는 여행하기 편한 점도 있어요',
			},
			{
				des: '힐링여행 보다는 이곳저곳 다 돌아다니는 여행을 선호해요',
			},
			{
				des: '외로움을 별로 타지 않는 스타일이에요',
			},
		],
		duo: [
			{
				subhead: 'ISTP',
				des: '혼자가 좋지만 그렇다고 심심한 건 싫어',
			},
		],
		counter: [
			{
				subhead: 'INFP',
				des: '영화나 드라마에서 나오는 장소의 주인공',
			},
		],
	},
	ESFJ: {
		subhead: '사랑하는 사람들과 사랑하는 장소를 함께!',
		subject: '방콕, 태국',
		nickname: '친선도모형',
		img:
			'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg?w=1600&ssl=1',
		description: [
			{
				des:
					'친구들의 선호도를 기반으로 여행을 계획하는 배려심이 많은 유형이에요',
			},
			{
				des: '리액션이 부자라서 함께 여행하면 심심하지 않아요!',
			},
			{
				des: '여행중 평화를 위해서 본인을 희생하는 편이에요',
			},
			{
				des: '사교적인 성향탓에 누구와 함께하는 여행을 좋아해요',
			},
			{
				des: '긍정적이고 낙천적인 성격을 가지고 있어요',
			},
			{
				des:
					'즉흥적인 행동은 후회하는 경우가 많아 대부분 계획을 세우고 행동해요',
			},
		],
		duo: [
			{
				subhead: 'ISFP',
				des: '여행계의 메딕 힐링여행 러버!',
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
				<li>{nation.description[0].des}</li>
				<li>{nation.description[1].des}</li>
				<li>{nation.description[2].des}</li>
				<li>{nation.description[3].des}</li>
				<li>{nation.description[4].des}</li>
				<li>{nation.description[5].des}</li>
				{/* <li>{nation.description[6].des}</li> */}
				{/* {nation.description.map(item => {
					return <li>{nation.description[item]}</li>
				})} */}
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
