// Toy Problem: 행렬의 곱셈
// https://programmers.co.kr/learn/courses/30/lessons/12949

/* 블로깅 주소: https://www.notion.so/5-25-1c4de00056a64b2ba8e161798443f8ce */

function solution(arr1, arr2) {
  // (ref) https://ko.wikipedia.org/wiki/%ED%96%89%EB%A0%AC_%EA%B3%B1%EC%85%88
  // (ref) https://www.youtube.com/watch?v=JpSe38UHaos
  // 예시2-1 => [2,3,2] * [5,2,3] = 22
  // [arr1[0][0],arr1[0][1],arr1[0][2]] * [arr2[0][0],arr2[1][0],arr2[2][0]]

  var answer = [[]];
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    // console.log("1",arr1);
    // console.log("2",arr2);
    console.log(arr2[0]);
    /* [ 3, 3 ]
         [ 3, 3 ]
         [ 3, 3 ] */

    for (let j = 0; j < arr2[0].length; j++) {
      for (let n = 0; n < arr2.length; n++) {
        sum += arr1[i][j] * arr2[j][n];
      }
    }
  }
  return answer;
}
