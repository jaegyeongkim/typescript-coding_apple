// Q1
let 사진 = document.querySelector("#image");
if (사진 instanceof HTMLImageElement) {
  사진.src = "new.jpg";
}

// Q2
let 링크 = document.querySelectorAll(".naver");
링크.forEach((x) => {
  if (x instanceof HTMLAnchorElement) {
    x.href = "https://kakao.com";
  }
});
