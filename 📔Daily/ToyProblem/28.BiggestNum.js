// Toy Problem: 가장 큰 수
// https://programmers.co.kr/learn/courses/30/lessons/42746

/* 블로깅 주소: https://www.notion.so/6-11-931da97da64448edbf05877e07059116 */

// (ref: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
function solution(numbers) {
  var answer = "";
  let numStr = numbers.map((number) => number.toString());
  // 정렬기준: (b에 a를 더한 문자열) - (a에 b를 더한 문자열)
  // numStr.sort((a,b) => console.log(a,b,(b+a),(a+b), (b+a)-(a+b)))
  answer = numStr.sort((a, b) => b + a - (a + b));
  console.log(sorted);
  // [ '6', '2', '10' ]
  // [ '9', '5', '34', '3', '30' ]

  //! 예외처리(정확성 테스트 통과 못함) => "000"과 같은 경우에 "0"을 리턴하기 위한 방어코드
  return answer[0] === "0" ? "0" : answer;
}
