// Toy Problem: H-index
// https://programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
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
