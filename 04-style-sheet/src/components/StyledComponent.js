import React from 'react';

// 기능 사용을 위한 참조
import styled, { css } from 'styled-components';

/**
 * 컴포넌트 코드 안에서 SCSS 문법을 적용한 컴포넌트를 직접 정의
 * 패키지 설치 필요함
 *      yarn add styled-components
 */

/** ul 태그로 구성된 컴포넌트 정의 --> style.태그이름``; (역따옴표 주의) */
const MyGridContainer = styled.ul`
    /* SCSSS 코딩 진행 */
    list-style: none;
    padding: 10px;
    margin: 0;
    width: 1024px;
    border: 5px solid #cc0;

    &:after {
        content: '';
        display: block;
        clear: both;
        float: none;
    }
`; // js 파일로 만든 하나의 컴포넌트 역할

/** li 태그로 구성된 컴포넌트 정의 */
const MyGridItem = styled.li`
    float: left;
    /* width: 20%; */

    /* 전달받은 변수값에 접근하기 위해서는 props하여 넓이를 동적으로 설정 <- 전달받는 변수들은 props라는 이름의 파라미터로 모아서 주입받은 콜백함수를 정의. 해당 변수에 대한 처리 후 리턴을 수행하면 그 값이 이 위치에 적용된다 */
    width: ${props => props.width};
`;

/** div 태그로 구성된 컴포넌트 정의 */
const MyBox = styled.div`
    border: 1px dotted #000;
    background-color: #eee;
    height: 100px;
    text-align: center;
    font-size: 20px;
    line-height: 100px;
    cursor: pointer;
    transition: all 0.1s ease-in;
    /* color: 'black'; */

    /* 색상값이 전달되는 경우 해당값 사용, 그렇지 않은 경우 "black"을 기본값으로 사용 */
    color: ${props => props.color || 'black'};

    &:hover {
        transform: scale(1.05, 1.05) rotate(-10deg);
        /* background-color: #eee; */
        background-color: ${props => props.color || '#eee'};
        color: #fff;
    }

    /** props 값에 대한 조건절 처리 */
    ${props => props.number % 2 === 1 && css`
        font-weight: bold;
        font-style: italic;
        text-decoration: underline;
    `}
`;

const StyledComponent = () => {
    // 색상이름이나 색상 코드에 대한 배열
    const myColors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow', 'pink'];

    // 배열 전체를 100으로 봤을 때 하나당 몇 %인지 계산
    const myWidth = 100 / myColors.length + '%';

    return (
        <div>
            <h2>StyledComponent</h2>

            <h3>단순 태그처럼 사용</h3>
            <MyGridContainer>
                <MyGridItem width={'20%'}><MyBox>Item1</MyBox></MyGridItem>
                <MyGridItem width={'20%'}><MyBox>Item2</MyBox></MyGridItem>
                <MyGridItem width={'20%'}><MyBox>Item3</MyBox></MyGridItem>
                <MyGridItem width={'20%'}><MyBox>Item4</MyBox></MyGridItem>
                <MyGridItem width={'20%'}><MyBox>Item5</MyBox></MyGridItem>
            </MyGridContainer>

            <h3>배열 원소를 활용한 컴포넌트 사용</h3>
            <MyGridContainer>
                {myColors.map((item, index) => {
                    return (
                        // styledComponent에게 HTML 속성처럼 전달하는 값들은 변수로서 작용한다
                        // 속성 이름은 특별히 정해진 것은 없다
                        <MyGridItem key={index} width={myWidth}>
                            <MyBox color={item} number={index}>
                                {item}
                            </MyBox>
                        </MyGridItem>
                    );
                })}
            </MyGridContainer>
        </div>
    );
};

export default StyledComponent;