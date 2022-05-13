"use strict";
// Literal types
// 좀 더 엄격한. 이 변수엔 무조건 이것만 들어올 수 있음.
// 1. 변수에 뭐가 들어올지 더 엄격한 관리 가능
// 2. 자동완성 힌트 굿
let 이름7;
// 이름7 = 456;
let 접니다;
// "hello" 라는 타입만 들어올 수 있습니다.
function 함수7(a) {
    return 1;
}
// Q1
function Q1(x) {
    return ["가위"];
}
// const 변수의 한계 -> Literal type이 보완해줄 수 있음
var 자료 = { name: "kim" };
function 내함수9(a) { }
내함수9(자료.name);
