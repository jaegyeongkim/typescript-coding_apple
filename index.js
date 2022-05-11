// 변수 옆에 type 설정해줌
var 이름 = "kim";
var 이름array = ["kim", "park"];
// ?: 선택, 있어도 되고, 없어도 되고
var 이름object = {};
// Union type
var 이름stringnumber = 123;
var 이름내타입 = 123;
// parameter x의 type -> number
// return 값 의 type -> number
function 함수(x) {
    return x * 2;
}
var johnArray = [123, true];
var johnObject = { name: "kim" };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
