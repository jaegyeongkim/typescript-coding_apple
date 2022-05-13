// type alias에 함수 type 지정 하는 방법
// 1. 함수타입은 () => {} 화살표 함수로 사용해야
// 2. 함수 표현식을 써야합니다.
type 함수타입 = (a: string) => number;

let 함수8: 함수타입 = function (a) {
  return 10;
};

// object 안에 함수 만들 수 있음
let 회원정보 = {
  name: "kim",
  plusOne(a: number): number {
    return a + 1;
  },
  changeName: () => {},
};
회원정보.plusOne(1);

// 콜백함수 개념
function 함수11(a: Function) {
  a();
}
function 함수22() {
  console.log(123);
}
함수11(함수22);
// 함수11 안에서 함수22를 실행시키고 싶다.
// 함수22: 콜백함수
