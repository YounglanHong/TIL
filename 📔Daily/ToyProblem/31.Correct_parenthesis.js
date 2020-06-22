// Toy Problem: 짝지어 제거
// https://programmers.co.kr/learn/courses/30/lessons/12909

/* 블로깅 주소: https://www.notion.so/6-22-7f1e2427a6774ba49e185d9d7de8f248 */

function solution(s) {
  // var answer = true;
  //[조건1] '('로 시작, ')'로 끝 => 개수 동일
  //[조건2] 반드시 '(' 이후에 ')' 위치
  let count = 0;

  let array = s.split("");
  for (let str of array) {
    str === "(" ? count++ : count--;
    if (count < 0) break;
    // OR if(count < 0) return false;
  }
  return count === 0 ? true : false;
}
