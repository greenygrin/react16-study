import React from 'react';

/**
 * 기본 표현식 연습
 */
const Expr1 = () => {
    /** 사용자 정의 변수 */
    const name = "리액트";
    const age = 19;
    const color = "#f00";
    const message = "리액트는 가장 주목받는 프론트앤드 프레임워크 입니다.";

    /** 개발자가 직접 정의한 함수 */
    const myEllipsis = (message, len) => {
        let str = message;
        if (str.length > len) {
            str = str.substring(0, len) + "...";
        }
        return str;
    };

    return (
        // jsx - 리액트에서 자체 개발한 자바스크립트 확장 문법
        // 프로젝트 생성 시에 프로젝트 내부에 WebPack이라는 도구와 바벨이라는 도구가 함께 설치된다.
        // 이 도구에 의해서 JSX는
        // document.write( ... ) 형태의 문법으로 변환된다.
        
        // 절대 HTML이 아님
        // style="background-color: #f60" (X)
        // style={backgroundColor: "#f60"}  (O)
        <div>
            <h2>Expr <small>(jsx 기본 표현식)</small></h2>

            {/* 기본 변ㄴ수 출력하기 - 간단한 사칙연산 가능 */}
            <h3>{name}님은 {age+1}세 입니다.</h3>
            <p>
                <font color="#00f">{name}</font>님은&nbsp;
                {/* HTML 속성에 변수를 출력할 경우 따옴표를 사용할 수 없다. */}
                <font color={color}>리액트 개발자</font> 입니다.
            </p>

            {/* 사용자 정의 함수 호출하기 */}
            <blockquote>
                {myEllipsis(message, 15)}
            </blockquote>
        </div>
    );
};

export default Expr1;