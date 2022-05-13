"use strict";
let 함수8 = function (a) {
    return 10;
};
// object 안에 함수 만들 수 있음
let 회원정보 = {
    name: "kim",
    plusOne(a) {
        return a + 1;
    },
    changeName: () => { },
};
회원정보.plusOne(1);
// 콜백함수 개념
function 함수11(a) {
    a();
}
function 함수22() {
    console.log(123);
}
함수11(함수22);
// 함수11 안에서 함수22를 실행시키고 싶다.
// 함수22: 콜백함수
