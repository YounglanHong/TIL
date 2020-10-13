// Toy Problem: 카펫
// https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  // [조건1] 카펫 가로 길이(x) >= 세로 길이(y)
  // [조건2] 카펫 가로 길이(x) * 세로 길이(y) = brown + yellow
  // [조건3] (x-2)*(y-2) = yellow
  var answer = [];
  let sum = brown + yellow; // [조건2]

  // 기준 값 y
  for (let y = 1; y <= sum; y++) {
    let x = sum / y;
    // [조건1], [조건3]
    if (x >= y && (x - 2) * (y - 2) === yellow) {
      answer.push(x, y);
    }
  }
  return answer;
}
