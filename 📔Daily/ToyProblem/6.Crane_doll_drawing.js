// Toy Problem: 인형 뽑기
// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  // 2차원 배열
  // 인형이 담길 바구니 변수 필요
  var answer = 0;
  const board_len = board.length;
  const moves_len = moves.length;
  let stack = [];
  let count = 0;
  let pick = [];

  while (count < moves_len) {
    for (let i = 0; i < board_len; i++) {
      //console.log(board[i][moves[0]-1])
      //console.log(board[i][moves[1]-1])
      //console.log(board[i][moves[2]-1])
      pick.push(board[i][moves[count] - 1]);
      console.log("pick", pick);
      if (pick[i] !== 0) {
        // console.log(pick[i])
        stack.push(pick[i]);
        // console.log("stack", stack)
        break; // 인형 하나만 이동
      }
    }
    count++;
  }
  return answer;
}
