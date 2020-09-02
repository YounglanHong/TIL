// 비밀 지도
// https://programmers.co.kr/learn/courses/30/lessons/17681

// 풀이1
function solution(n, arr1, arr2) {
  /* 비트연산자(https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators) */
  let binary = "";

  var decode = [];
  for (let i = 0; i < n; i++) {
    binary = (arr1[i] | arr2[i]).toString(2).padStart(n, "0");
    decode[i] = ""; // ''로 초기화

    for (let bin of binary) {
      bin === "0" ? (decode[i] += " ") : (decode[i] += "#");
    }
  }
  // console.log(decode)
  return decode;
}
