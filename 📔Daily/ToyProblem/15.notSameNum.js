// Toy Problem: 같은 숫자는 싫어
// https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript

// 중복값 제거
// 풀이 1
function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// 풀이 2
function solution(arr) {
  //* filter 반환값: 테스트를 통과한 요소로 이루어진 새로운 배열
  return arr.filter((ele, index) => ele !== arr[index + 1]);
}

// 풀이 3
function solution(arr) {
  let answer = [];
  arr.forEach((value, index) => {
    if (arr[index] !== arr[index + 1]) {
      answer.push(value);
    }
  });
  return answer;
}

// 풀이 4
function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    } else {
      answer.push(arr[i]);
    }
  }
  return answer;
}
