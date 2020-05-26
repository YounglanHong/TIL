// Toy Problem: 예산
// https://programmers.co.kr/learn/courses/30/lessons/43237

/* 블로깅 주소: https://www.notion.so/5-22-0a2b2d8ccce147389473bcbd9cc85f56 */

function solution(budgets, M) {
  var answer = 0;
  let length = budgets.length;
  budgets.sort((a, b) => a - b);
  let sum = budgets.reduce((acc, curr) => {
    return acc + curr;
  });
  // 조건: budgets 합 < M 인 경우, max 리턴
  if (sum < M) {
    return budgets[length - 1];
  }
  // 조건 아니면, sum - Max(i)
  // ((M - sum) / i) 과 budgets[i-1] 비교
  for (let i = length - 1; i > 0; i--) {
    sum -= budgets[i];
    let rest = (M - sum) / i;
    if (rest >= budgets[i - 1]) {
      return Math.floor(rest);
    }
    // console.log("rest",rest)
  }
  answer = Math.floor(M / length);
  return answer;
}
