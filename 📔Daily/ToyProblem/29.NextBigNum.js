// Toy Problem: 다음 큰 숫자
// https://programmers.co.kr/learn/courses/30/lessons/12911

/* 블로깅 주소: https://www.notion.so/6-12-c67d9a363a294dfbbc753549b11f782c */

// 풀이 1
// 2진수로 변환한 n의 1의 개수 구하는 함수
function findBinOne(n) {
  // [조건1] n을 2진수로 변환
  let binary = n.toString(2);
  // [조건2] 2진수로 변환한 n의 1의 개수
  let count = 0;
  let findOne = binary.indexOf("1");
  /* str.indexOf(searchValue[, fromIndex])
      /  fromIndex >= str.length 이면, -1을 반환 */
  while (findOne !== -1) {
    count++;
    // 첫 번째 '1' 이후의 인덱스부터 '1' 탐색
    findOne = binary.indexOf("1", findOne + 1);
  }
  // console.log(count); // 4 4
  return count;
}

/* 결과값: n보다 큰 자연수 중에 2진수로 변환했을때, 
     1의 개수가 n과 동일한 가장 작은 수 */
// 결과값 구하는 함수
function solution(n) {
  var answer = 0;
  // [조건3] n보다 큰 수 중에 count값 동일한 수
  // 임의의 수 100을 조건으로...?
  for (let i = 1; i < 100; i++) {
    if (findBinOne(n) === findBinOne(n + i)) {
      // console.log(i);
      answer = n + i;
      break;
    }
  }
  return answer;
}

// 풀이 2
// 2진수로 변환한 n의 1의 개수 구하는 함수
function findBinOne(n) {
  return n.toString(2).match(/1/g).length;
}

// 결과값 구하는 함수
function solution(n) {
  let num = n + 1;
  // 1의 개수 동일하지 않을 때,
  //! 조건문 if일 때는 통과 못함
  while (findBinOne(n) !== findBinOne(num)) {
    num++;
  }
  // 1의 개수 동일할 때,
  return num;
}

// 풀이 3
function solution(n, num = n + 1) {
  return n.toString(2).match(/1/g).length === a.toString(2).match(/1/g).length
    ? num
    : solution(n, num + 1);
}
