`tip` && `기타 배운 점`

- ts → js 바로 라이브로 변환하는 방법
  tsc -w // 저장할때마다 자동으로 ts, tsx 파일을 js, jsx 파일 변환해서 만들어줌
- .ts 파일 실행시키는 방법
  ts 파일 실행시키려면 `index.html` 만든 다음에 script 에서 js 파일 임포트해서 하면 됨
  걍 `Code Runner` 다운 받아서 실행해도 됨
  참고: [https://kay-log.tistory.com/13](https://kay-log.tistory.com/13)
- `tsconfig.json`
  어떤 게 맞는 것인가 아주 어렵다 이말이지
  그렇다면 node.js 버전에 맞는 친구로 걍 진행해버리는 게 어떠하냐?
  참고: [https://github.com/tsconfig/bases#centralized-recommendations-for-tsconfig-bases](https://github.com/tsconfig/bases#centralized-recommendations-for-tsconfig-bases)
  내 버전은 `node 16` 이기 때문에 설치하고 걍 `tsconfig.json` 에 박아버리면 됨
  ```bash
  npm install --save-dev @tsconfig/node16
  ```
  `tsconfig.json`
  ```json
  "extends": "@tsconfig/node16/tsconfig.json"
  ```
- `Array.isArray`
  배열인지 확인하는 함수
  ```jsx
  Array.isArray(x); // true or false
  ```
- const 키워드 설명
  const 는 재할당을 막아주는 키워드임. const 로 선언된 object 변수의 안의 값은 변경 가능
- `callback` 함수
  ```tsx
  function 함수11(a: Function) {
    a();
  }
  function 함수22() {
    console.log(123);
  }
  함수11(함수22);
  // 함수11 안에서 함수22를 실행시키고 싶다.
  // 함수22: 콜백함수
  ```
- html 직접 건드는 방법
  ```tsx
  let 제목 = document.querySelector("#title"); // title 이라는 아이디의 dom 요소에
  if (제목 !== null) {
    제목.innerHTML = "반가워요"; // 내용을 바꾼다.
  }
  ```
- class 및 prototype
  같은 객체 많이 만들어야할때 사용하셈
  예를 들어 lol 캐릭터 객체들 많이 만들고 싶음 → 이때 사용 ㄱㄱ
  ```jsx
  class Hero {
    // 부모
    constructor(q) {
      this.q = q;
      this.w = "snowball";
    }
  }
  // prototype: === 유전자라 생각하면 됨
  // 이렇게 추가하면 nunu, garen 에서는 안 보이지만, nunu.name, garen.name 으로 사용할 수 있음
  Hero.prototype.name = "kim";

  let nunu = new Hero("consume"); // 자식
  let garen = new Hero("strike"); // 자식
  ```
  array 자료에 .sort(), .length 사용할 수 있는 이유는?????? → Array 가 class 문법에서 prototype에 미리 작성해 두어서
  Array 라는 부모 유전자에 .sort(), .length 가 있기 때문에
  ```jsx
  let 어레이 = [4, 2, 1];
  let 어레이 = new Array(4, 2, 1); // class
  ```
  모든 array 자료에서 쓸 수 잇는 함수 추가??
  ```jsx
  Array.prototype.함수 = function () {]
  ```

## 1강

`tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es6", // es3, es5 es2 등 가능
    "module": "commonjs", // 무슨 import 문법 쓸 건지 commonjs, amd, es2015, esnext
    "jsx": "preserve" // tsx 파일을 jsx로 어떻게 컴파일할 것인지
  }
}
```

## 2강

`타입 지정 원래 자동으로 됩니다`

```tsx
let 회원: string = "kim";
let 회원 = "kim";

let 나이: number = 34;
let 나이 = 34;

다 같은 의미이다.
```

## 3강

`union type` : 복수의 타입 지정이 가능하게 함

```tsx
let 회원들: (number | string)[] = [1, "2", 3];
```

`any` : 모든 타입 허용 → 이거 많이 사용하면 ts를 사용하는 이점이 없음

```tsx
let 이름: any; // 편하지만 ts 사용하는 의미가 없어짐.
이름 = 123;
이름 = true;
이름 = [];
```

`unknown` : 모든 타입 허용, any 와 비슷함 but, any 보다 안전함

```tsx
let 이름언논: unknown;
이름언논 = 123;
이름언논 = {};
// 더 안전한 이유는
// let 변수1: string = 이름3강; -> ok
// 변수1 = 이름언논; -> 에러 발생 할당 불가능
```

## 3강

`엄격한 연산`

지금 변경하려는 변수의 타입이 확실해야 연산을 수행해준다.

ts는 엄격한 연산만 가능하다!!!

```tsx
let 나이3: string | number;
나이3 + 1; // 에러 밠생 -> string | number !== number 타입이 다르다.

let 나이4: unknown = 1;
나이4 - 1; // 에러 발생 -> unknown !== number 타입이 다르다.
```

## 4강

`함수 && 파라미터 옵션`

```tsx
function 함수(x?: number): number {
  // function 함수(x: number | undefined): number {
  // x: 파라미터
  // ?: 옵션. 있거나 말거나. 들어올 수 있다. => x?: number === x: number | undefined
  // x: number -> x 파라미터 타입 지정
  // :number -> return 타입 지정

  return x * 2;
}
```

`void 함수`

```tsx
// return 없는 함수
function 함수void(x: number): void {
  1 + 1;
}
```

`!!` 함수 → 값을 boolean으로 표현해준다.

## 5강

`Narrowing`: Type을 거른다.

Type이 아직 하나로 확정되지 않았을 경우 Type Narrowing 써야합니다. -> 꼭 지켜야할 코딩 방식

어떤 변수가 타입이 아직 불활식하면 if문 등으로 Narrowgin 해줘야 조작 가능

```tsx
function 내함수(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}
```

`assertion`: Type 덮어쓰기

```tsx
function 내함수3(x: number | string) {
  let array: number[] = [];
  array[0] = x as number; // x의 타입을 number로 덮어씌워주세요
}
```

assertion 막 쓰지 마라! 문법의 용도는 다음과 같다.

1. Narrowing 할 때

2. 무슨 타입이 들어올지 100% 확실할 때 쓴다. 정말 확실할때!!! -> 근데 그냥 if문 쓰면 되는건데...

so... 남이 짠 코드 수정할때 / 왜 타입에러가 나는지 모르겠을때... / 비상용... / 디버깅용...

## 6강

`type alias` : type 별칭 → type 변수

type 이름은 UpperCammelCase 로 작성하는 것이 국룰

```tsx
type Animal = string | number | undefined;
let 동물: Animal = "kim";

type AnimalObj = { name: string; age: number };
let 동물Obj: AnimalObj = { name: "kim", age: 123 };
```

ts를 사용하면 const 로 선언된 값 변경 오류 내줌

```tsx
type Girlfriend = {
  readonly name?: string; // readonly -> 수정하면 오류를 내줌
  // ? : 선택 사항  name?: string === string | undefined
};
const 여친: Girlfriend = {
  name: "엠버",
};
// 여친.name = "주연"; // editor 오류 발생, 실제 js에서는 바꿔줌. 실행 됨.
```

`extend`: type 키워드 여러개 합친다.

```tsx
// string, number 타입
type Name = string;
type Age = number;
type Person = Name | Age;

// 2. object extend === object 합치기
type PositionX = { x: number };
type PositionY = { y: number };
type NewType = PositionX & PositionY; // { x: number, y: number } 둘 다 있어야함
type NewType2 = PositionX | PositionY; // 둘 중에 하나만 있어도 됨

let position: NewType = { x: 10, y: 20 };
let position2: NewType2 = { x: 10 };
```

## 7강

`Literal Types`

좀 더 엄격한. 이 변수엔 무조건 이것만 들어올 수 있음.

1. 변수에 뭐가 들어올지 더 엄격한 관리 가능
2. 자동완성 힌트 굿
3. const 변수의 한계를 보완할 수 있다. object 형식에서 속성, 속성 값을 바꿀 수 없어

```tsx
let 이름7: 123;
// 이름7 = 456; // 불가능

let 접니다: "대머리" | "솔로";

// "hello" 라는 타입만 들어올 수 있습니다.
function 함수7(a: "hello"): 1 | 0 {
  return 1;
}

function Q1(x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}
```

```tsx
var 자료 = { name: "kim" } as const; // as const -> 자료.name 의 타입을 kim으로 한다.
function 내함수(a: "kim") {}
내함수(자료.name); // as const 를 사용함으로서 자료.name 의 타입이 kim으로 지정됨
```

## 8강

type alias에 함수 type 지정 하는 방법

1. 함수타입은 () => {} 화살표 함수로 사용해야
2. 함수 표현식

```tsx
type 함수타입 = (a: string) => number;

let 함수8: 함수타입 = function (a) {
  return 10;
};
```

object 안에 함수 만들 수 있음

```tsx
let 회원정보 = {
  name: "kim",
  plusOne(a: number): number {
    return a + 1;
  },
  changeName: () => {},
};
회원정보.plusOne(1);
```

## 9강

Narrowing 하는 5가지 방법

1. if문 사용 → 가장 일반적인 거 같음

   ```tsx
   let 제목 = document.querySelector("#title");
   if (제목 != null) {
     제목.innerHTML = "반갑소";
   }
   ```

2. instanceof 연산자 사용 // 가장 많이 사용하게 될 것임

   부모로부터 기인한 것이냐

   ```tsx
   let 제목 = document.querySelector("#title");
   if (제목 instanceof HTMLElement) {
     제목.innerHTML = "반갑소";
   }
   ```

3. assertion 사용 → as 사용

   ```tsx
   let 제목 = document.querySelector("#title") as HTMLElement;
   제목.innerHTML = "반갑소";
   ```

4. ?. 사용 → optional chaning

   ```tsx
   let 제목 = document.querySelector("#title");
   if (제목?.innerHTML != undefined) {
     제목.innerHTML = "반갑소";
   }
   ```

5. tsconfig.json 에서 null 체크를 false 로 바꿔줌 → 귀찮은 strict 모드 끈다.

## 10, 11강

class 및 prototype

같은 객체 많이 만들어야할때 사용하셈

예를 들어 lol 캐릭터 객체들 많이 만들고 싶음 → 이때 사용 ㄱㄱ

```jsx
class Hero {
  // 부모
  constructor(q) {
    this.q = q;
    this.w = "snowball";
  }
}
// prototype: === 유전자라 생각하면 됨
// 이렇게 추가하면 nunu, garen 에서는 안 보이지만, nunu.name, garen.name 으로 사용할 수 있음
Hero.prototype.name = "kim";

let nunu = new Hero("consume"); // 자식
let garen = new Hero("strike"); // 자식
```

array 자료에 .sort(), .length 사용할 수 있는 이유는?????? → Array 가 class 문법에서 prototype에 미리 작성해 두어서

Array 라는 부모 유전자에 .sort(), .length 가 있기 때문에

```jsx
let 어레이 = [4, 2, 1];
let 어레이 = new Array(4, 2, 1); // class
```

모든 array 자료에서 쓸 수 잇는 함수 추가??

```jsx
Array.prototype.함수 = function () {]
```

## 12강

class 만들때 type 지정

```jsx
class Person {
  data = 0; // class 필드 값  === data: number = 0
  name: string = ""; // ts에서 사용하려면 constructor 에서 사용하려면 위에서 미리 class 필드 값 지정해둬야함
  constructor(name: string) {
    this.name = name;
  }
  //prototype 함수 넣는 자리
  함수(x: string) {
    console.log("안녕" + x);
  }
}
let 사람1 = new Person("kim");
let 사람2 = new Person("park");
사람1.함수("785");
```
