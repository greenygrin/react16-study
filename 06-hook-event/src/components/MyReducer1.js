import React from 'react';

/**
 * useReduce에 의해 호출될 사용자 정의 함수
 * --> action값이 00일 때  state값을 ~~~해라.
 * --> action값이 DataType은 개발자가 결정할 수 있다. (int, string, boolean, json ...)
 * --> state값의 DataType 역시 개발자가 결정할 수 있다. (int, string, boolean, json ...)
 * @param {int} state - 상태값 (useState의 state값과 동일)
 * @param {string} action - 어떤 동작인지에 대한 구문
 */
function setCounterValue(state, action) {
    console.log("[%o] %o", action, state);
    // action값의 상태에 따른 state값의 가공 처리를 분기
    switch (action) {
        case 'HELLO':
            return state + 1;
        case 'WORLD':
            return state - 1;
        default:
            return state;
    }
}

const MyReducer1 = () => {
    /**
     * 상태값(myCounter)와 상태값 갱신함수(setMyCouter)를 정의한다.
     * --> setCounterValue: setMyCounter()가 호출됨에 따라 간접적으로 호출될 함수
     * --> 0: myCounter에 저장될 초기값
     * 
     * setMyCounter()함수에게 action값을 전달하면 React 내부적으로 setCounterValue() 함수가 호출되며, 상태값으로 지정된 myCounter와 "HELLO"|"WORLD"가 파라미터로 전달된다.
     */
    const [myCounter, setMyCounter] = React.useReducer(setCounterValue, 0);

    return (
        <div>
            <h2>MyReducer1</h2>
            <p>현재 카운트 값: {myCounter}</p>
            <button type="button" onClick={e => setMyCounter("HELLO")}>UP</button>
            <button type="button" onClick={e => setMyCounter("WORLD")}>DOWN</button>
        </div>
    );
};

export default MyReducer1;