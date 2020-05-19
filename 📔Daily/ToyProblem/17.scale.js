// Toy Problem: 저울
// https://programmers.co.kr/learn/courses/30/lessons/42886

/* 블로깅 주소: https://www.notion.so/5-19-36e31689721b472196d832ed4b94449f */

function solution(weight) {
  // weight 배열의 누적값으로 측정할 수 없는 무게 중 최솟값
  var answer = 0;
  let sorted = weight.sort((a, b) => {
    return a - b;
  });
  // sorted: 	[ 1, 1, 2, 3, 6, 7, 30 ]
  for (let i = 0; i < sorted.length; i++) {
    // 누적 값(answer) 다음 값이 sorted[i] 보다 작은 경우,
    // 측정이 안되는 구간이 생김
    if (answer + 1 < sorted[i]) {
      break;
    } else {
      // 누적 값 => 측정 가능 값
      answer += sorted[i];
      // console.log(answer)
      // answer: 1 2 4 7 13 20
    }
  }
  return answer + 1;
}
