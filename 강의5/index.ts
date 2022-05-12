// Type이 아직 하나로 확정되지 않았을 경우 Type Narrowing 써야합니다. -> 꼭 지켜야할 코딩 방식
// 어떤 변수가 타입이 아직 불활식하면 if문 등으로 Narrowgin 해줘야 조작 가능
// Type Narrowing: 타입을 거른다.

function 내함수(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}

function 내함수2(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  }
}

// assertion -> 타입 덮어쓰기
function 내함수3(x: number | string) {
  let array: number[] = [];
  array[0] = x as number; // x의 타입을 number로 덮어씌워주세요
}

// assertion 막 쓰지 마라! 문법의 용도는 다음과 같다.
// 1. Narrowing 할 때
// 2. 무슨 타입이 들어올지 100% 확실할 때 쓴다. 정말 확실할때!!! -> 근데 그냥 if문 쓰면 되는건데...
// so... 남이 짠 코드 수정할때 / 왜 타입에러가 나는지 모르겠을때... / 비상용... / 디버깅용...
