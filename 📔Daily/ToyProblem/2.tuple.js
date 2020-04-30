// Toy Problem: 튜플
// https://programmers.co.kr/learn/courses/30/lessons/64065

/* 블로깅 주소: https://www.notion.so/4-28-77eb27bfc5cb497081e44414d06e95e1 */

function solution(s) {
  var answer = [];
  let array = [];
  // 객체 안의 요소 꺼내기(바깥 {} 제거)
  s = s.slice(1, s.length - 1);
  // console.log('s:', s)
  // 구분자 '}' 기준으로 구분하여 배열에 넣기
  array = s.split("}");
  // console.log('array:',array)
  // 조건: 배열을 요소 길이 기준으로 정렬
  array.sort((a, b) => a.length - b.length);
  // console.log('sortedArray:',array)
  for (let i = 0; i < array.length; i++) {
    // {} 제거 & ','기준으로 구분
    array[i] = array[i].replace("{", "");
    array[i] = array[i].split(",");
    console.log("splitedArray:", array);
  }
  // 결과값: answer 배열에 튜플 담아 반환
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] !== "") {
        // 요소의 첫번째 인덱스 존재하지 않을 때(-1)
        if (answer.indexOf(Number(array[i][j])) < 0) {
          console.log("answer:", answer.indexOf(Number(array[i][j])));
          answer.push(Number(array[i][j]));
          console.log("answer:", answer);
        }
      }
    }
  }
  return answer;
}
