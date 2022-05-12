// Q1
function 이름출력(name?: string): void {
  if (!!name) {
    console.log(`안녕하세요 ${name}`);
  } else {
    console.log("이름이 없습니다.");
  }
}

// 이름출력();
// 이름출력("홍길동");

// Q2
function 자리수출력(x: string | number): number {
  return x.toString().length;
}

// console.log(자리수출력("234"));
// console.log(자리수출력(3458976));

// Q3
function 결혼가능하니(
  소득: number,
  집보유: boolean,
  매력: string
): string | void {
  let total: number = 소득;
  if (집보유) total += 500;
  if (매력 === "상") total += 100;
  if (total >= 600) return "결혼가능";
}
// console.log(결혼가능하니(700, false, "중"));
// console.log(결혼가능하니(100, false, "상"));
