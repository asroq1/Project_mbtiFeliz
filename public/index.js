import { useState } from 'react'
function Header({ title }) {
    return
    ;<h1>{title ? title : 'Default title'}</h1>
}
function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']
    const [likes, setLikes] = useState(0)
    function handleClick() {
        setLikes(likes + 1)
    }
    return (
        <div>
            <header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                    <li key="{name}">{name}</li>
                ))}
            </ul>

            <button onClick="{handleClick}">Like ({likes})</button>
        </div>
    )
}
// <!doctype html>
// <html lang="ko">
//     <head>
//         <meta charset="utf-8" />
//         <link rel="icon" href="img/favicon.ico" />
//         <meta
//             name="viewport"
//             content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"
//         />
//         <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
//         <script
//             deferasync
//             crossorigin="anonymous"
//             src="https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v10.0"
//             nonce="rXB1wDTT"
//         ></script>
//         <script
//             type="text/javascript"
//             src="https://ssl.pstatic.net/share/js/naver_sharebutton.js"
//         ></script>
//         <script type="text/javascript">
//             new ShareNaver.makeButton({ type: 'e' })
//         </script>
//         <meta property="og: title" content="FelizMBTI" />
//         <meta property="og: url" content="url" />
//         <meta
//             property="og: description"
//             content="나한테 어울리는 여행지는 어디일까?"
//         />
//         <meta property="og: image" content="넣고싶은 이미지 경로" />
//         <title>Feliz for Travel</title>
//     </head>
//     <body>
//         <div id="root"></div>
//     </body>
// </html>
//
