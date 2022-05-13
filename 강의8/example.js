"use strict";
let cutZero = function (x) {
    if (x[0] === "0") {
        x = x.slice(1);
    }
    return x;
};
let removeDash = function (x) {
    let res = Number(x.replaceAll("-", ""));
    return res;
};
// Q3
function Q83(x, y, z) {
    let a = z(y(x));
    console.log(a);
}
Q83("010-1111-2222", cutZero, removeDash);
