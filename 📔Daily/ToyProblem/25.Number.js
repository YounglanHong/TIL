// Toy Problem: 숫자의 표현
// https://programmers.co.kr/learn/courses/30/lessons/12924

/* 블로깅 주소: https://www.notion.so/6-1-TIL-774b50320a3741afbe1d56413cbfecc6 */

function solution(n) {
  var answer = 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum === n) {
        answer++;
        sum = 0;
        break;
      } else if (sum > n) {
        sum = 0;
        break;
      }
    }
  }
  return answer;
}
