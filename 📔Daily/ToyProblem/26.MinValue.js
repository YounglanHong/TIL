// Toy Problem: 최솟값 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12941

/* 블로깅 주소: https://www.notion.so/6-2-0f39e8f5bff849b09dc91e0199a06463 */

// 풀이1
function solution(A, B) {
  //[조건] 정렬 후 각 배열의 max * min => 누적된 값 최소
  var answer = 0;
  // 오름차순 정렬
  let sortA = A.sort((f, s) => f - s);
  // console.log(sortA) // [ 1, 2, 4 ]
  // 내림차순 정렬
  let sortB = B.sort((f, s) => s - f);
  // console.log(sortB) // [ 5, 4, 4 ]

  //[조건] 배열의 값 존재할 때까지
  while (sortA.length) {
    let i = 0;
    let multiply = sortA[i] * sortB[i];
    answer += multiply;
    // 곱셈한 값들은 제거
    sortA.shift();
    sortB.shift();
    i++;
  }
  // console.log(answer)
  return answer;
}

// 풀이2
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((acc, value, index) => acc + value * B[index], 0);
}
