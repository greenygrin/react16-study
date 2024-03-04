const arr = [1, 2, 3, 4, 5];
const find = 3;

// for문 전통적인 배열 탐색 방법
for (let i = 0; i < arr.length; i++) {
    console.log("arr[%d]=%d", i, arr[i]);
    if (arr[i] === find) {
        console.log("찾음");
        break;
    }
}

// forEach문 배열의 원소 수만큼 콜백함수를 실행함
arr.forEach((v, i) => {
    console.log("d%번째 원서 %d", i, v);

    if (find === v) {
        console.log("찾음");
        // 원소 수 만큼 함수를 호출하는 것이므로, 중단을 위해 return하더라도 해당 원소에 해서만 적용됨 --> fofEach 문의 맹점
        return;
    }
});

// some
arr.some((v, i) => {
    console.log("d%번째 원서 %d", i, v);

    if (find === v) {
        console.log("찾음");
        // 반복 중단함
        return true;
    }
});
