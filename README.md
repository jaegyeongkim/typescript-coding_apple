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
