import React from 'react';

// /src폴더 하위의 임의의 경로에 존재하는 이미지 파일을 참조
// --> 현재 소스파일을 기준으로 하는 상대경로로 지정
// --> 실행 시에는 react에 의해 다른 경로로 복사된다.
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';

/**
 * Inline Css를 적용한 컴포넌트
 * ex) <div style="..."></div>
 */
const InlineCss = () => {
    /** CSS로 사용될 JSON 객체 정의 */
    // CSS속성이름은 바닐라스크립트의 프로퍼티 이름으로 지정해야 함
    // ex) document.getElementById("hello").style.backgroundColor = "#ff00ff";
    const myStyle = {
        backgroundColor: '#f60',
        fontSize: '20px',
        color: '#0f6',
        fontWeight: 'bold',
        padding: '10px 25px',
        marginBottom: '10px'
    };

    return (
        <div>
            <h2>InlineCss</h2>

            <h3>변수로 정의된 CSS 참조하기</h3>
            <div style={myStyle}>Hello React CSS (1)</div>

            <h3>직접 CSS 코딩하기</h3>
            <div
                style={{
                    backgroundColor: '#f60',
                    fontSize: '20px',
                    color: '#ff0',
                    fontWeight: 'bold',
                    padding: '10px 25px',
                    marginBottom: '10px'
                }}>
                Hello React CSS (2)
            </div>

            <h3>이미지 참조하기</h3>
            {/* 이미지 사용 시 alt 속성을 지정 안하면 경고 발생함 */}
            <img src={img1} width='240' height='240' alt='img1' />

            {/* public 폴더에 있는 파일들은 단순 절대경로로 참조 가능함 (public 폴더 하위에 임의의 폴더생성 가능) */}
            <img src='logo192.png' width='240' height='240' alt='react' />

            <div
                style={{
                    display: 'inline-block',
                    width: '240px',
                    height: '240px',
                    backgroundImage: 'url(' + img2 +')',
                    backgroundSize: 'cover'
                }}>
                배경이미지
            </div>
        </div>
    );
};

export default InlineCss;