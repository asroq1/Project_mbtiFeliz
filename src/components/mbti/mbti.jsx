import Options from '../options/option'

const MBTI = () => {
	const options = [
		{
			id: 1,
			situation: '이번 여행은 어디로 떠나볼까?',
			descriptionA: '수 많은 리뷰로 검증된 장소로 가자!',
			descriptionB: '아무도 안 가본 새로운 장소로 떠나자!',
		},
		{
			id: 2,
			situation: '	우리 여행지 가서 뭐할까?',
			descriptionA: '자전거, 카약 등 다양한 액티비티를 하자!',
			descriptionB: '편안한 장소에서 느긋하게 힐링하자!',
		},
	]

	return (
		<>
			<h2>MBTI PAGES</h2>
			<Options options={options} />
		</>
	)
}

export default MBTI
