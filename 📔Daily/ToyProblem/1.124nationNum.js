// Toy Problem: 124 나라의 숫자
// https://programmers.co.kr/learn/courses/30/lessons/12899

/* 블로깅 주소: https://www.notion.so/4-27-372c3e26102d4483864609c9a7eeb5cb */

/* 규칙성 찾기
4 ⇒ (3*1) + 1 ⇒ 11
5 ⇒ (3*1) + 2 ⇒ 12
6 ⇒ (3*2) + 0  ⇒ 14

7 ⇒ (3*2) + 1 ⇒ 21
8 ⇒ (3*2) + 2 ⇒ 22
9 ⇒ (3*3) + 0 ⇒ 24

10 ⇒ (3*3) + 1 ⇒ 41
11 ⇒ (3*3) + 2 ⇒ 42
12 ⇒ (3*4) + 0 ⇒ 44
*/

function solution(n) {
  //* 결과값: 10진수 n을 124 숫자로 반환
  // n/3의 몫 => 124진수(1,2,4)
  // n/3의 나머지(n%3)
  // => 1, 2인 경우: 마지막 자릿수 = 나머지
  // => 0인 경우: 마지막 자릿수 = 4 & 진수변화

  let answer = "";
  let decimal = n;

  while (decimal > 0) {
    if (decimal % 3 === 1) {
      answer = "1" + answer;
      decimal = Math.floor(decimal / 3);
    } else if (decimal % 3 === 2) {
      answer = "2" + answer;
      decimal = Math.floor(decimal / 3);
    } else {
      // 나머지 0
      answer = "4" + answer;
      decimal = decimal / 3 - 1;
    }
  }
  return answer;
}
