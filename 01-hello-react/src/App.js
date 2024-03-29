/**
 * 필요한 패키지 참조하기
 * - 패키지 경로에 "./"나 "../"가 있는 경우
 *    -> 현재 소스를 기준으로 한 상대경로로 소스파일을 참조함
 * - 패키지 경로가 단어로 시작되는 경우
 *    -> node_modules에서 패키지를 검색하여 참조함
 */
// 리액트 패키지 참조
import React from 'react';

// 직접 장성한 컴포넌트 참조
import MyComponent1 from './MyComponent1';
import MyComponent2 from './MyComponent2';

/** Appp이라는 이름의 함수형 컴포넌트(재사용 가능한 HTML 조각단위) 정의 */
// 프로젝트에서 컴포넌트를 렌더링(화면에 출력)하면 함수에서 반환하고 있는 내용이 브라우저에 나타난다
// 반환되는 HTML 코드는 JSX 문법 사용
// JSX --> XML 과 비슷한 React 전용 Javascript 확장 문법
//const App = () => <h1>Hello World</h1>
const App = () => {
    return (
        <div>
            <h1>Hello React</h1>
            <MyComponent1 />
            <MyComponent2 />
        </div>
    )
}

export default App;
