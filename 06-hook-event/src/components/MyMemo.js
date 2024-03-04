import React from 'react';

/**
 * 배열 원소값에 대한 평균을 리턴
 * @param {integer array} numbers
 * @returns {integer} 평균값
 */
const getAverage = numbers => {
    if (numbers.length === 0) return 0;

    console.group('[MyMemo::getAverage]');

    // 평균 구하기 (일반 로직)
    // let sum = 0;
    // for (let i=0; i < numbers.length; i++) {
    //     sum += numbers[i];
    // }

    // 평균 구하기 (2) -> (배열 객체의 reduce 함수 사용)
    // 배열을 순환하면서 결과값이 누적된 계산을 수행한다.
    // const sum = numbers.reduce( (accumulator, currentValue, currentIndex ) => {
    //     console.log("누적된 값=%d, %d번째 원소=%d", accumulator, currentIndex, currentValue);
    //     return accumulator + currentValue;
    // });
    const sum = numbers.reduce( (a, v, i) => a + v);    // vanillaJS 식 평균 구하기

    console.groupEnd();

    return sum / numbers.length;
};

const MyMemo = () => {
    // 입력값들을 지정할 배열에 대한 state정의
    const [myInputList, setMyInputList] = React.useState([]);

    // 입력값들이 누적된 배열에 대한 평균값
    // React.useMemo( () => 호출된 함수, [함수를 호출할 시점이 되는 state값]);
    // --> getAverage() 함수가 호출되는 시점을 myInputList 배열이 변경될 때로 한정함
    const myAvg = React.useMemo( () => getAverage(myInputList), [myInputList] );

    // input 태그를 참조할 변수
    const myNumberInputRef = React.useRef();

    // 버튼 클릭 시 동작할 이벤트 핸들러
    // --> useCallback을 사용하여 최초 1회 실행 시만 이벤트가 정의되도록 구현(중복실행 방지)
    // --> 단, 두번째 파라미터인 배열에 "myInputList"를 명시하여 이 값은 지속적으로 유지하도록 설정
    const onButtonClick = React.useCallback((e) => {
        const numberInput = myNumberInputRef.current;

        if (!numberInput.value || isNaN(numberInput.value)) {
            alert("숫자만 입력 가능합니다.");
            return false;
        }

        // myInputList에 방금 입력된 값을 새로운 원소로 추가함
        const nextList = myInputList.concat(parseInt(numberInput.value));
        // 새로운 원소가 추가된 배열을 state에 반영함
        setMyInputList(nextList);
        // <input> 태그의 입력값 삭제
        numberInput.value = "";

        console.group('MyMemo');
        console.debug(nextList);
        console.groupEnd();
    }, [myInputList]);

    return (
        <div>
            <h2>MyMemo</h2>

            <input type="number" ref={myNumberInputRef} placeholder="input number..." />

            <button type="button" onClick={onButtonClick}>등록</button>

            {/* 입력값들이 저장되어 있는 배열의 원소 수 만큼 반복하면서 렌더링 */}
            <h3>입력값 내역 : 평균={myAvg}</h3>
            <ul>
                {myInputList.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    );
};

export default MyMemo;