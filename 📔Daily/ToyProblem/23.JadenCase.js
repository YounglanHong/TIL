// Toy Problem: Jaden Case 문자열 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12951

/* 블로깅 주소: https://www.notion.so/5-28-8d58907af4224283bc5a45cf4f016374 */

// 풀이1
function solution(s) {
  /* s의 첫글자 영문이면, 대문자/ 영문 아니면, 그대로 */

  var answer = "";
  let words = s.toLowerCase().split("");
  let check_eng = /[a-zA-Z]/; // (ref)https://ryulog.tistory.com/152

  words.map((word, i) => {
    // console.log(word, i)
    // [조건1] 문자열의 첫글자 영문 => 대문자
    if (check_eng.test(word)) {
      words[0] = words[0].toUpperCase();
    }
    // [조건2] 공백 다음 문자 => 대문자
    if (words[i - 1] === " ") {
      words[i] = words[i].toUpperCase();
    }
  });

  answer = words.join("");
  return answer;
}
