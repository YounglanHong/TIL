// Toy Problem: Palindrome
// https://programmers.co.kr/learn/courses/30/lessons/12904

/* 블로깅 주소: https://www.notion.so/5-6-c028324f1b924ec18f5a3b6c6956e432 */

function solution(s) {
  // 결과값: 문자열 s의 부분문자열 중 가장 긴 팰린드롬의 길이
  // 문자열 reverse(참고: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/)
  // s.split('').reverse().join('')
  let reversedStr = s.split("").reverse().join("");
  // 기존 문자열이 반전된 문자열과 같을 경우,
  if (s === reversedStr) {
    return s.length;
    // 기존 문자열 안에 부분 문자열에서 팰린드롬의 경우,
  } else {
    let a = solution(s.substring(0, s.length - 1));
    let b = solution(s.substring(1, s.length));
    return Math.max(a, b);
  }
  // return answer;
}
