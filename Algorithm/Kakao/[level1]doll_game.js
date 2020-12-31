// 크레인 인형뽑기 게임
// https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript

function solution(board, moves) {
  let basket = []; // 인형 담길 바구니
  let answer = 0; // 결과 값: 터트려져 사라진 인형 개수

  for (let i = 0; i < moves.length; i++) {
    for (let row of board) {
      let target = row[moves[i] - 1];
      if (target !== 0) {
        // 인형이 존재할 때,
        // 바구니의 마지막 요소와 target 요소 같지 않을 때,
        if (target === basket[basket.length - 1]) {
          basket.pop();
          answer += 2;
          // 바구니의 마지막 요소와 target 요소 같을 때,
        } else {
          basket.push(target);
        }
        row[moves[i] - 1] = 0;
        break; // 루프 종료
      }
    }
  }
  return answer;
}
