// 배열의 각각의 원소를 가공해서 새로운 배열을 얻을 수 있는 함수
const data = [10, 20, 30];

const hello = data.map(function(v, i) {
    consoloe.log("v=%d", v, i);
    return v*10;
});