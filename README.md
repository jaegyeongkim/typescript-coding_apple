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

`타입 지정 원래 자동으로 됩니다`

```tsx
let 회원: string = "kim";
let 회원 = "kim";

let 나이: number = 34;
let 나이 = 34;

다 같은 의미이다.
```
