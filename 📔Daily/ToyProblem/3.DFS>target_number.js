// Toy Problem: DFS>타겟 넘버
// https://programmers.co.kr/learn/courses/30/lessons/43165

/* 블로깅 주소: https://www.notion.so/4-29-337c44024a4748d5a7cb5c2515ea0faa */

function solution(numbers, target) {
  // 주어지는 숫자는 2 ~ 20
  // 조건: 숫자 양수(+), 음수(-) 고려
  // numbers 합 나타내는 sum 변수 필요
  // answer 증가 조건: sum === target
  var answer = 0;

  function dfs(numbers, target, node) {
    if (node === numbers.length) {
      // console.log(numbers)
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      if (sum === target) {
        return answer++;
      }
    } else {
      // 조건1: 양수
      numbers[node] *= 1;
      dfs(numbers, target, node + 1);
      // 조건2: 음수
      numbers[node] *= -1;
      dfs(numbers, target, node + 1);
    }
  }
  dfs(numbers, target, 0);
  return answer;
}
