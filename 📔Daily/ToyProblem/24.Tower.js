// Toy Problem: 탑
// https://programmers.co.kr/learn/courses/30/lessons/42588

/* 블로깅 주소: https://www.notion.so/5-29-66c72b6f67c248b2a9d09750a05ccafe */

// 풀이1
//* - unshift: 배열의 맨 앞쪽에 추가

function solution(heights) {
  // 왼쪽부터 탐색 => 맨 오른쪽은 항상 0
  // unshift: 배열의 맨 앞쪽에 추가
  var answer = [];

  for (let i = heights.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (heights[i] < heights[j]) {
        // 몇번째(index + 1) 탑인지 기록
        answer.unshift(j + 1);
        break;
      }
      // 신호를 수신하는 탑이 없으면 0으로 표시
      if (j === 0) {
        answer.unshift(0);
      }
    }
    // console.log(answer)
  }
  return answer;
}

// 풀이2
/*
- map(value, index)의 성질 이용
    ⇒ map은 cb결과값을 새로운 배열로 반환 */

function solution(heights) {
  // map은 cb결과값을 새로운 배열로 반환
  return heights.map((value, i) => {
    // console.log(value, i)
    while (i) {
      i--;
      console.log(heights[i]);
      if (heights[i] > value) {
        // 몇번째(index + 1) 탑인지 기록
        return i + 1;
      }
    }
    // 신호를 수신하는 탑이 없으면 0으로 표시
    return 0;
  });
}
