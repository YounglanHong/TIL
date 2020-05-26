// Toy Problem: 쇠막대기
// https://programmers.co.kr/learn/courses/30/lessons/42585

/* 블로깅 주소: https://www.notion.so/5-26-281e17dc4e2d40f4b4d0a83640e59b94 */

function solution(arrangement) {
  var answer = 0;
  let stack = [];

  for (let i = 0; i < arrangement.length; i++) {
    // [조건1] 좌괄호 연속: 좌괄호 개수만큼 stack에 push
    if (arrangement[i] === "(") {
      stack.push(arrangement[i]);
      // console.log(stack.length)
    } else if (arrangement[i] === ")") {
      stack.pop();
      // [조건2] 레이저(좌,우괄호): stack의 길이만큼 반환
      if (arrangement[i - 1] === "(") {
        answer += stack.length;
        // console.log(stack.length)
        // [조건3] 우괄호 연속: 항상 1개 반환
      } else answer += 1;
      // console.log(answer)
    }
  }
  return answer;
}
