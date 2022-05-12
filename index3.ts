let 회원: number | string = 123; // Union Type: 타입 2개 이상 합친 새로운 타입
let 회원들3: (number | string)[] = [1, "2", 3];
let 오브젝트3: { a: string | number } = { a: "123" };

let 이름3강: any; // 편하지만 ts 사용하는 의미가 없어짐.
이름3강 = 123;
이름3강 = true;
이름3강 = [];

let 이름언논: unknown; // any 와 같은 용도이지만 조금 더 안전하다
이름언논 = 123;
이름언논 = {};
// 더 안전한 이유는
// let 변수1: string = 이름3강; -> ok
// 변수1 = 이름언논; -> 에러 발생 할당 불가능

// let 나이3: string | number;
// 나이3 + 1;
// let 나이4: unknown = 1;
// 나이4 - 1;
