// Toy Problem: 야근 지수
// https://programmers.co.kr/learn/courses/30/lessons/12927

/* 블로깅 주소: https://www.notion.so/5-21-5226437304aa4b5aa1a5d1dbec440ee2 */

// 풀이 1 (테스트 통과)
function solution(n, works) {
  var answer = 0;
  // 배열의 가장 큰 값
  let max = Math.max(...works);

  while (n > 0) {
    for (let i = 0; i < works.length; i++) {
      // (예시 #2) max 값이 한 개 이상 일때
      if (n === 0) break;
      if (max === works[i]) {
        works[i]--;
        n--;
      }
    }
    max--;
    // (예시 #3 max !== 음수)
    if (max === 0) break;
    // console.log(works) // [ -1, -1 ]
    // console.log(max) // -1
  }
  for (let j = 0; j < works.length; j++) {
    answer += Math.pow(works[j], 2);
  }
  return answer;
}

// 풀이 2 (정확성 통과, 효율성 탈락)
function solution(n, works) {
  var answer = 0;
  // 내림 차순 정렬
  var sort = works.sort((a, b) => b - a);
  // console.log(sort)
  for (let i = 0; i < n; i++) {
    // 가장 큰 값-- 한 후 다시 내림차순 정렬
    sort = works.sort((a, b) => b - a);
    // console.log(sort)
    // 가장 큰 값은 sort[0](양수)
    if (sort[0] === 0) break;
    sort[0]--;
    // console.log(sort[0])
  }
  // console.log(sort) // [ 2, 2, 2 ]
  sort.forEach((element) => {
    answer = answer + Math.pow(element, 2);
  });
  return answer;
}
