// Q1
type 회원정보ex = {
  plusOne: (a: number) => number;
  changeName: () => void;
};

// Q2
type CutZeroType = (x: string) => string;
let cutZero: CutZeroType = function (x) {
  if (x[0] === "0") {
    x = x.slice(1);
  }
  return x;
};
type RemoveDashType = (x: string) => number;
let removeDash: RemoveDashType = function (x) {
  let res = Number(x.replaceAll("-", ""));
  return res;
};

// Q3
function Q83(x: string, y: CutZeroType, z: RemoveDashType) {
  let a = z(y(x));
  console.log(a);
}

Q83("010-1111-2222", cutZero, removeDash);
