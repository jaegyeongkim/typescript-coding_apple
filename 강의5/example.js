"use strict";
// Q1
function cleaning(array) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        res[i] = Number(array[i]);
    }
    return res;
}
// console.log(cleaning(["1", 2, "3"]));
// Q2
let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };
let 에러쌤 = { hello: "hi" };
const 만들함수 = (obj) => {
    if (obj.subject === "string") {
        return obj.subject;
    }
    else if (Array.isArray(obj.subject)) {
        return obj.subject[obj.subject.length - 1];
    }
    else {
        return "없음";
    }
};
console.log(만들함수(철수쌤));
console.log(만들함수(영희쌤));
console.log(만들함수(민수쌤));
// console.log(만들함수(에러쌤));
