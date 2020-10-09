// Toy Problem: 2 x n 타일링
// https://programmers.co.kr/learn/courses/30/lessons/12900

/* Fibonacci, DP */
/* 
      1) n=1, 1
      2) n=2, 2
      3) n>3, f(n) = f(n-1) + f(n-2)
         n=3, 3
         n=4, 5
         n=5, 8
         n=6, 13
         n=7, 21
         ...
    */

function solution(n) {
  let tile = [1, 2];

  // 2부터 시작(양수)
  // 경우의 수를 1,000,000,007으로 나눈 나머지를 return
  for (let i = 2; i < n; i++) {
    tile[i] = (tile[i - 1] + tile[i - 2]) % 1000000007;
    // console.log(i)
    // tile[2] = tile[1] + tile[0]
    // tile[3] = tile[2] + tile[1]
  }
  // console.log(tile);
  return tile[n - 1];
}
