## 1강

```bash
tsc -w // 저장할때마다 자동으로 ts, tsx 파일을 js, jsx 파일 변환해서 만들어줌
```

`tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es5", // es3, es5 es2 등 가능
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

`엄격한 연산`

지금 변경하려는 변수의 타입이 확실해야 연산을 수행해준다.

```tsx
let 나이3: string | number;
나이3 + 1; // 에러 밠생 -> string | number !== number 타입이 다르다.

let 나이4: unknown = 1;
나이4 - 1; // 에러 발생 -> unknown !== number 타입이 다르다.
```
