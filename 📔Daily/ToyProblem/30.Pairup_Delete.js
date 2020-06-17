// Toy Problem: 짝지어 제거
// https://programmers.co.kr/learn/courses/30/lessons/12973

/* 블로깅 주소: https://www.notion.so/6-17-bacf19ed19864c7d800569b64a3ad3d8 */

// solution #1
function solution(s) {
  // 문자열의 문자 하나씩 탐색하면서 stack 배열에 추가
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    // [조건1] stack이 빈배열이거나 stack의 마지막 요소와
    // 문자열 i번째 문자 같지 않을 때, 문자열의 i번째 값 stack에 추가
    let last = stack[stack.length - 1];
    if (stack.length === 0 || last !== s[i]) {
      stack.push(s[i]);
    }
    // [조건2] stack의 마지막 요소와 문자열 i번째 문자 같을 때,
    else if (last === s[i]) {
      stack.pop();
    }
  }
  return stack.length === 0 ? 1 : 0;
}

// solution #2
function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    stack[stack.length - 1] === s[i] ? stack.pop() : stack.push(s[i]);
  }

  return stack.length ? 0 : 1;
}
