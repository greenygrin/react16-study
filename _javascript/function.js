/**
 * function.js
 * 
 * 함수 정의 문법
 */


/** ES5 ------------------------- */
function foo(a, b) {
    var c = a + b;
    return c;
}

// %d: 정수/실수, %s: 문자열/배열/객체, %o: 객체형 으로 치환
console.log("foo ==> %d", foo(10, 20));


// JS에서 function은 object 타입의 변수 --> 다른 변수에 대입 가능
var bar = foo;

// 함수가 대입된 변수는 그 자체가 함수 역할을 함
console.log("foo ==> %d", bar(10, 20));

// 익명함수
var noname = function (a, b){
    var c = a + b;
    return c;
}
console.log("noname ==> %d", bar(10, 20));


// 파라미터로 전달되는 함수를 사용 --> callback함수
// useCallback 함수에서 a와 b를 어떤식으로든 연산을 수행하고 그 결과를 리턴하고자 할 때, 수행해야 할 연산이 매번 달라져야 한다면 그 부분을 함수 형태로 전달받는다
function useCallback(a, b, something) {
    const result = something(a, b);
    return result;
}
console.log("useCallback ==> %d", useCallback(100, 200, foo));

// 미리 정의한 함수를 전달하는 것이 아닌, 호출 과정에서 함수 정의를 함께 처리할 수 있다.
console.log("useCallback ==> %d", useCallback(100, 200, function(a, b) {
    var c = a * b;
    return c;
}));


// 함수를 리턴하는 함수
function getCloser(k) {
    function plus(a, b) {
        return a + b;
    }

    function minus(a, b) {
        return a - b;
    }

    if(k === "+") {
        return plus;
    } else {
        return minus;
    }
}

const a = getCloser("+");
console.log("a ==> %d", a(10, 20));

const b = getCloser("-");
console.log("b ==> %d", b(10, 20));


// 비교연산자
// 1 == "1" true
// 1 === "1" false
// == 는 내용만 비교 : 쓰지마세요
// === 는 타입까지 일치해야만 true
// != : 쓰지마세요
// !==


// 불필요한 파라미터 생략 --> 함수 오버로드(파라미터를 조작하여 호출형태를 다양화함)
function foobar(x, y) {
    console.log("x=%s, y=%s", x, y);

    //undefined값은 연산을 수행할 수 없으므로, 파라미터를 검사 후 처리해야 함
    var result = 0;
    if (x != undefined) { result += x; }
    if (y != undefined) { result += y; }
    console.log(" >> result=%d", result);
}

foobar(100, 200);   // var x=100, y=200
foobar(1000);       // var x=1000, y=undefined
foobar();           // var x=undefined, y=undefined


// 값이 전달되지 않을 경우를 대비하여 뒤에서부터 하나씩 기본값을 설정할 수 있음
function helloworld(x=1, y=2) {
    console.log("x=%s, y=%s", x, y);

    //undefined값은 연산을 수행할 수 없으므로, 파라미터를 검사 후 처리해야 함
    var result = 0;
    if (x != undefined) { result += x; }
    if (y != undefined) { result += y; }
    console.log(" >> result=%d", result);
}

helloworld(100, 200);   // var x=100, y=200
helloworld(1000);       // var x=1000, y=2
helloworld();           // var x=1, y=2

console.log("-----------------------");


/** ES6 ------------------------- */

// 익명함수의 변형
const arrow1 = function() {
    var c = a + b;
    return c;
}
console.log("[ES6] arrow1 ==> %d", arrow1(1, 2));

// function 키워드가 제거되고 ()와 {} 사이에 화살표를 표기
const arrow2 = (a, b) => {
    var c = a + b;
    return c;
}
console.log("[ES6] arrow2 ==> %d", arrow2(10, 20));

// 파라미터가 하나뿐이라면 ()는 생략 가능하지만, 파라미터가 없거나 두개 이상인 경우는 () 생략 불가
const arrow3 = a => {
    return a + 100;
}
console.log("[ES6] arrow3 ==> %d", arrow3(100));

// 함수 안에 포함된 구문이 리턴을 목적으로 하는 한 줄로 된 구문이라면 {}와 return 키워드를 생략 가능
const arrow4 = a => a + 100;
console.log("[ES6] arrow4 ==> %d", arrow4(100));

// 콜백함수로서 사용하기
let count = 0;
const id = setInterval(() => {
    count++;
    console.log(">>> %d초...", count);

    if (count == 3) {
        console.log(">>> 타이머종료!!!");
        clearInterval(id);
    }
}, 1000);


/** JSON 객체에서의 활용 */
const user = {
    name: null,
    setName: value => { this.name = value; },
    getName: () => this.name
}
user.setName("helloworld");
console.log("name: %s", user.getName());


/** jQuery에 접목할 경우 주의사항 */
$("#btn").click(function(e) {
    e.preventDafault();
    $(this).html("Hello World");
});

$("#btn").click( e => {
    e.preventDefault();
    //this 객체에 대한 접근 방법이 변경됨
    $(e.currentTarget).html("Hello World");
});