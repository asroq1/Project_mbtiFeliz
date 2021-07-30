# Feliz for Travel :airplane:

<img src="https://user-images.githubusercontent.com/62472550/109385258-eb217c80-7935-11eb-8d19-0a112d4446ea.png" width="300">

**링크**
<a>https://felizmbti.netlify.app/

## About this

**제작동기**

최근에 유행한 MBTI 16개 유형을 바탕으로 각자 성향에 맞는 여행지를 추천해주는 React웹앱이다.
유명한 MBTI테스트 사이트 중 MBTI유형에 기반한 해외여행지 추천에 대한 마땅한 사이트가 없었고,
코로나 사태가 장기간 지속됨으로 인한 해외여행에 대한 일반인들의 니즈가 크다고 판단하여 제작하게 되었다.

**제작기간**
2021.02.12 ~ 2021.02.25

**제작인원**
1명

**실행순서**
1. 사용자는 2개의 선택지 중 하나의 선택지를 고르게 된다.

2. 총 12단계의 선택을 하게되면 자신의 결정에 따른 MBTI결과와 이에 대응하는 여행지를 하단에 추천해준다.

3. 자신의 성향과 맞는 다른 유형의 사람을 추천해준다.
	
**실행화면**

|     ![home](https://user-images.githubusercontent.com/62472550/109384839-e14a4a00-7932-11eb-8183-1e730136cbb7.PNG)      |     ![main](https://user-images.githubusercontent.com/62472550/109384840-e27b7700-7932-11eb-82ca-1541b2aa33e1.PNG)     | ![playing_page](https://user-images.githubusercontent.com/62472550/109384842-e27b7700-7932-11eb-8319-f6dd2e37bcfe.PNG) |
| :---------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
| ![delaying_page](https://user-images.githubusercontent.com/62472550/109384843-e3140d80-7932-11eb-818b-8990afc06dce.PNG) | ![result1_page](https://user-images.githubusercontent.com/62472550/109384845-e3aca400-7932-11eb-96bf-7cd9abf76995.PNG) | ![result2_page](https://user-images.githubusercontent.com/62472550/109384846-e4453a80-7932-11eb-9671-387425cc1723.PNG) |


<br />

## 참고자료

1. Forbes
   <a>https://www.forbes.com/sites/alexandratalty/2019/12/08/where-should-you-travel-based-your-myers-briggs-personality-type/?sh=4d821bb36dc0

2. MBTI 성격유형에 따른 관광자 행동의 차이: 20대 젊은 층을 대상으로 (**권보민, 박은경 관광경영연구 제23권 제2호**)
   <a>https://academic.naver.com/article.naver?doc_id=559917672

## Dependencies & Tools

# **tools**

**tools**

IDE : VScode
Deploy : netlify
Framework : ReactJS

**dependencies**

**dependencies**

1. fontawesome : 고퀄리티의 아이콘을 위하여 사용하였음
2. react-copy-clipboard : 링크 복사 기능을 위하여 사용함
3. react-router-dom : 라우터를 사용하여 결과물을 출력하기 위하여 사용
4. styled-reset : css초기화 등을 간편하게 하기 위하여 사용함.

```
	"dependencies": {
		"@fortawesome/fontawesome-free": "^5.15.2",
		"@fortawesome/fontawesome-svg-core": "^1.2.34",
		"@fortawesome/free-brands-svg-icons": "^5.15.2",
		"@fortawesome/free-regular-svg-icons": "^5.15.2",
		"@fortawesome/free-solid-svg-icons": "^5.15.2",
		"@fortawesome/react-fontawesome": "^0.1.14",
		"@testing-library/jest-dom": "^5.11.4",
		"@testing-library/react": "^11.1.0",
		"@testing-library/user-event": "^12.1.10",
		"postcss": "^8.2.6",
		"react": "^17.0.1",
		"react-copy-to-clipboard": "^5.0.3",
		"react-dom": "^17.0.1",
		"react-router-dom": "^5.2.0",
		"react-scripts": "4.0.2",
		"styled-components": "^5.2.1",
		"styled-reset": "^4.3.4",
		"web-vitals": "^1.0.1"
	},
```

## How to use

**설치방법**

1.create-react-app 설치

```
create-react-app
```

2.yarn 설치

```
npm install --global yarn
```

3.실행하기

```
yarn start
```

**_배포 방법_**
1.yarn build

```
yarn build
```

2.deploy netilfy

```
deploy netlify
```

2-1. 혹시 netlify를 사용할 줄 모른다면 참고해주시길 바랍니다.

<a>https://levelup.gitconnected.com/how-to-deploy-a-react-app-with-netlify-set-up-continuous-deployment-via-github-53859dcdaf40
