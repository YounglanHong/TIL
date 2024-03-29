// Toy Problem: H-index
// https://programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
  /* [조건] h 지수는 그 사람이 쓴 모든 논문 중 n회 이상 인용된 논문이 
      n개 이상일 때, 이 둘을 동시에 만족하는 n의 최대값 */
  var answer = 0;
  let length = citations.length;
  let array = [];
  // 오름차순 정렬
  citations.sort((a, b) => a - b);
  for (let i = 0; i < length; i++) {
    array.push(Math.min(citations[i], length - i));
  }
  console.log(array);
  answer = Math.max.apply(null, array);
  return answer;
}
