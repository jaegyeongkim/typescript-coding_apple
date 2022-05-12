// Q1
type Type1 = { number: number };
type Type2 = { number: string };
type NewType1 = Type1 & Type2;
// let abc: NewType1 = { number: 123 }; // never 형식에 할당할 수 없다.

// Q2
type Color = { color?: string };
type Size = { size: number };
type Position = { readonly position: number[] };
type Total = Color & Size & Position;
let testest = { size: 123, position: [1, 2] };

// Q3
type Q3 = { name: string; phone: number; email: string };

// Q4
type Q4 = Q3 & { older: boolean };
