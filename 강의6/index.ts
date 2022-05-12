type Animal = string | number | undefined; // type 변수명은 앞에 UpperCammelCase
let 동물: Animal = "kim";

type AnimalObj = { name: string; age: number };
let 동물Obj: AnimalObj = { name: "kim", age: 123 };

// const 변수는 재할당을 막는 키워드임. const 로 담은 object 수정은 자유롭게 가능
const 출생지역 = { region: "seoul" };
// 근데 ts 쓰면 object 자료 수정도 막을 수 있어
type Girlfriend = {
  readonly name?: string; // readonly -> 수정하면 오류를 내줌
  // ? : 선택 사항  name?: string === string | undefined
};
const 여친: Girlfriend = {
  name: "엠버",
};
// 여친.name = "주연"; // editor 오류 발생, 실제 js에서는 바꿔줌. 실행 됨.

// type 키워드 여러개 합칠 수 있어
// 1.
type Name = string;
type Age = number;
type Person = Name | Age;

// 2. object extend === object 합치기
type PositionX = { x: number };
type PositionY = { y: number };
type NewType = PositionX & PositionY; // { x: number, y: number }
type NewType2 = PositionX | PositionY; // 둘 중에 하나만 있어도 됨

let position: NewType = { x: 10, y: 20 };
let position2: NewType2 = { x: 10 };
