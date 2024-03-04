import React from 'react';

// 컴포넌트 props의 필수 여부를 지정하거나 props의 DataType을 지정할 때 사용
import PropTypes from 'prop-types';

//const MyPropTypesSub = (props) => {
    // 자바스크립트 비구조 문법을 통해 변수 속성값을 변수로 선언. 하지만 이렇게 사용하지 않고 보통 (props) 자리에 바로 넣음
//    const {name, age, hobby} = props;
const MyPropTypesSub = ({name, age, hobby}) => {

    return (
        <div>
            <h3>MyPropTypesSub</h3>

            <p>안녕하세요. 제 이름은 <b>{name}</b>이고, 나이는 <b>{age}</b>입니다.</p>
            <p>{hobby && (<span>취미는 {hobby} 입니다.</span>)}</p>
        </div>
    );
};

/** 이 컨포넌트로 전달되는 props 값들에 대한형식과 필수 여부 지정 */
// 규칙에 맞지 않는 props값에 대해 브라우저 개발자 콘솔에 Warning 메시지가 출력된다.
MyPropTypesSub.propTypes = {
    // name 속성의 데이터 타입을 문자열 지정
    name: PropTypes.string,
    nage: PropTypes.number,
    // hobby의 데이터 타입과 필수 여부 지정
    // --> 필수 여부 설정은 데이터타입 뒤에 ".isRequired"를 추가 명시
    hobby: PropTypes.string.isRequired
};

export default MyPropTypesSub;