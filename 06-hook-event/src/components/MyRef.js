import React from 'react';

const MyRef = () => {
    // HTML 태그를 react 안에서 참조할 수 있는 변수를 생성
    const myLabelRef = React.useRef();
    const myInputRef = React.useRef();

    // 출력을 목적으로 하는 참조변수를 생성
    const myName = React.useRef("리액트");
    console.log("컴포넌트 구동 시::: " + myName.current);

    return (
        <div>
            <h2>MyRef</h2>

            <h3 ref={myLabelRef}>...</h3>

            <h4>{myName.current}</h4>

            {/* 미리 준비한 컴포넌트 참조변수와 HTML 태그를 연결 */}
            <input type="text" ref={myInputRef} />

            {/* 버튼 클릭 시 input의 내용을 alert()으로 표시후 입력 내용 지음 */}
            <button onClick={e => {
                // 컴포넌트 참조변수를 사용해서 다른 HTML 태그에 접근 가능
                // --> "참조변수.current" 해당 HTML을 의미하는 Javascript DOM 객체
                console.log(myInputRef);
                alert(myInputRef.current.value);
                myLabelRef.current.innerHTML = myInputRef.current.value;
                myName.current = myInputRef.current.value;
                myInputRef.current.value = "";

                console.log("이벤트 발생 시::: " + myName.current);
            }}>클릭</button>
        </div>
    );
};

export default MyRef;