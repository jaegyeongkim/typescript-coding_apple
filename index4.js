function 함수4(x) {
    // function 함수(x: number | undefined): number {
    // x: 파라미터
    // ?: 옵션. 있거나 말거나. 들어올 수 있다. => x?: number === x: number | undefined
    // x: number -> x 파라미터 타입 지정
    // :number -> return 타입 지정
    return x * 2;
}
// return 없는 함수
function 함수void(x) {
    1 + 1;
}
