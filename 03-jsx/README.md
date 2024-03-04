# JSX

```shell
const Expr1 = () => {
    return (
        <div></div>  // <-- jsx
    );
};
```

jsx - 리액트에서 자체 개발한 자바스크립트 확장 문법
HTML속성이나 css속성을 Javascript 프로퍼티이름으로 기술해야 함
프로젝트 생성 시에 프로젝트 내부에 WebPack이라는 도구와 바벨이라는 도구가 함께 설치된다.
이 도구에 의해서 JSX는
document.write( ... ) 형태의 문법으로 변환된다.
        
절대 HTML이 아님
style="background-color: #f60" (X)
style={backgroundColor: "#f60"}  (O)

## 조건분기

## 반복처리