// Toy Problem: 기능개발
// https://programmers.co.kr/learn/courses/30/lessons/42586

/* 블로깅 주소: https://www.notion.so/5-13-c3f6892809c94e478e09829cd1558ca4 */

// 풀이1
function solution(progresses, speeds) {
  // 작업의 진도 + 작업 속도 = 100 일 때 배포
  // 결과값: 각 배포마다 몇 개의 기능이 배포되는지 반환s
  var answer = [];
  let days = [];
  let count = 0; // 배포시 기능의 수
  let max = 0; // days 중 가장 큰 값
  for (let i = 0; i < progresses.length; i++) {
    days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    //console.log(days) // [ 7, 3, 9 ]
  }
  days.forEach(function (curr, idx) {
    // 배포
    if (curr > max) {
      max = curr;
      if (idx > 0) {
        answer.push(count);
        count = 0; // 초기화
      }
    }
    count++;
  });
  answer.push(count);
  return answer;
}

// 풀이2
function solution(progresses, speeds) {
  // 작업의 진도 + 작업 속도 = 100 일 때 배포
  // 결과값: 각 배포마다 몇 개의 기능이 배포되는지 반환
  var answer = [];
  let days = [];
  let count = 0; // 배포시 기능의 수

  for (let i = 0; i < progresses.length; i++) {
    days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    //console.log(days) // [ 7, 3, 9 ]
  }
  let init = days[0]; // 초기값(비교값)
  days.forEach((day) => {
    // [조건] 초기값(비교값)보다 현재값 클 경우, 배포
    // init = 7; day = 7; count = 1
    // init = 7; day = 3; count = 2
    // init = 7; day = 9; count = 1

    if (init < day) {
      answer.push(count);
      count = 1;
      init = day; // 비교값 변경
    } else {
      count++;
    }
  });
  answer.push(count);
  return answer;
}
