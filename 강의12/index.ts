class Person12 {
  data = 0; // class 필드 값  === data: number = 0
  name: string = ""; // ts에서 사용하려면 constructor 에서 사용하려면 위에서 미리 class 필드 값 지정해둬야함
  constructor(name: string) {
    this.name = name;
  }
  //prototype 함수 넣는 자리
  함수(x: string) {
    console.log("안녕" + x);
  }
}
let 사람1 = new Person12("kim");
let 사람2 = new Person12("park");
사람1.함수("785");
