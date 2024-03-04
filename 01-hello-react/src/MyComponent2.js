import React from 'react';

// 직접 작성한 컴포넌트 참조 --> 정의한 이름을 HTML 태그처럼 사용
import MySubComponent from './MySubComponent';

/** 함수형 컴포넌트를 익명함수 스타일로 정의 */
const MyComponent2 = function () {
    return (
        <div>
            <h2>Virtual DOM</h2>
            <p>This is React Component</p>

            {/* 여러 파일에서도 재사용 가능함 */}
            <MySubComponent />
        </div>
    );
}

export default MyComponent2;