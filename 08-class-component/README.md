# ClassComponent vs FunctionComponent

## Class 기반

- React.component를 상속받는 클래스 형태로 구성
- render() 함수를 정의하고 이 함수가 리턴하는 JSX가 화면을 구성
- props, children 값 등을 객체 자신(this)을 통해서 접근해야 함
- propTypes, defaultProps, 이벤트 핸들러 등 추가적으로 정의해야하는 형태에 준수해야 할 scope가 존재
- LifeCycle이라는 정해진 규격 안에서 흐름을 제어

## Function 기반

- 일반 자바스크립트 함수
- 자신이 리턴하는 JSX가 화면을 구성
- 전달되는 파라미터 형태로 props, children 값에 접근
- Inner Function, 함수 밖에서 상수 형태로 정의 등 모든 형태가 유연하게 가능함
- Hook을 통해서 흐름을 제어