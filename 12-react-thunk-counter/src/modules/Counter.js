import { createAction, handleActions } from 'redux-actions';

/**
 * 1) 액션 - 컴포넌트가 겪는 상황을 구분하는 문자열 값
 * 여기서는 +1, -1 버튼이 눌러졌을 때를 의미하는 문자열로 사용함
 * "파일이름/상황이름" 값을 지정하면 다른 모듈과 Action값이 충돌하는 것을 방지할 수 있다.
 */
const PLUS = 'Counter/PLUS';
const MINUS = 'Counter/MINUS';

/**
 * 2) 액션 생성 함수 - 액션 객체를 만들어서 리턴한다.
 * 컴포넌트에 대한 액션 값의 수 만큼 정의한다.
 * --> createAction() 함수를 통해 함수 정의를 자동화
 */
export const plusAction = createAction(PLUS);
export const minusAction = createAction(MINUS);

/**
 * 3) 상태값 - 단순한 json 객체.
 * 컴포넌트에서 다루고자 하는 데이터들을 포함한다.
 */
const initialState = {
    number: 0,
    color: '#000'
};

/**
 * 4) 리듀서
 * 각각의 action값을 메서드로 갖는 객체 형태로 정의한다.
 * 각각의 메서드는 initialState와 동일한 구조를 갖는 객체를 리턴해야 한다.
 */
const myCountReducer = {
    [PLUS]: function(state, action) {
        const numberValue = state.number + 1;
        let colorValue = '#000';

        if (numberValue > 0) {
            colorValue = '#2f77eb';
        } else if (numberValue < 0) {
            colorValue = '#f60';
        }

        return { number: numberValue, color: colorValue };
    },
    [MINUS]: function(state, action) {
        const numberValue = state.number - 1;
        let colorValue = '#000';

        if (numberValue > 0) {
            colorValue = '#2f77eb';
        } else if (numberValue < 0) {
            colorValue = '#f60';
        }

        return { number: numberValue, color: colorValue };
    }
};

/**
 * 5) 스토어 생성
 * 스토어로 생성하기 위해 리듀서와 상태값을 묶어서 내보낸다.
 * 이 객체를 /index.js가 import하여 스토어로 생성한다.
 */
const MyCounterModule = handleActions(myCountReducer, initialState);

// 생성된 스토어를 내보낸다.
export default MyCounterModule;


/**  비동기 작업을 수행할 함수 정의 - 이 안에서 action함수들을 dispatch(호출)한다. */
// 이렇게 정의된 함수들은 컴포넌트의 props에 포함된다.
export const plusAsync = () => dispatch => {
    // 1초 뒤 액션 디스패치
    setTimeout(() => {
        dispatch(plusAction());     // Ajax 처리
    }, 1000);
};

export const minusAsync = () => dispatch => {
    // 1초 뒤 액션 디스패치
    setTimeout(() => {
        dispatch(minusAction());     // Ajax 처리
    }, 1000);
};