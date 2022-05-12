// 변수 옆에 type 설정해줌
let 이름: string = "kim";
let 이름array: string[] = ["kim", "park"];
// ?: 선택, 있어도 되고, 없어도 되고
let 이름object: { name?: string } = {};
// Union type
let 이름stringnumber: string | number = 123;

// type을 변수화할 수 있는데, 보통 대문자로 만듬.
type Mytype = string | number;
let 이름내타입: Mytype = 123;

// parameter x의 type -> number
// return 값 의 type -> number
function 함수(x: number): number {
  return x * 2;
}

// array 에 쓸 수 있는 tuple 타입
// 무조건 첫 번째는 number, 둘째는 boolean
type MemberArrayTuple = [number, boolean];
let johnArray: MemberArrayTuple = [123, true];

type MemberObject = { [key: string]: string }; // 글자로 된 모든 object 속성의 타입은 string
let johnObject: MemberObject = { name: "kim" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
