// Toy Problem: String_compression
// https://programmers.co.kr/learn/courses/30/lessons/60057

/* 블로깅 주소: https://www.notion.so/5-4-065a86efa7f944af9713c123f27b0192 */

function solution(s) {
  // 문자열 n개 단위(n>=1) 잘라서 압축

  // 압축한 문자열 순서대로 비교
  // 1) 같은 값: count + 압축 문자열
  // 2) 다른 값: 압축 문자열

  // 결과값: 압축 문자열의 최소 길이
  /* 문자열 길이가 n일 때, 1 ~ n/2 길이로 자르는 방법을 모두 탐색한 후 그중 가장 짧은 방법을 선택 */
  //(참고: https://tech.kakao.com/2019/10/02/kakao-blind-recruitment-2020-round1/)
  var answer = s; // 문자열 반환
  const slicedLeng = s.length / 2;
  const strLeng = s.length;
  for (let i = 1; i < slicedLeng; i++) {
    let pressedStr = ""; // 압축한 문자열 저장
    let slicedStr = s.slice(0, i); // n개 단위로 slice한 문자열 저장
    let count = 1;

    // slice 마지막 index에서 시작(i만큼 증가)
    for (let j = i; j < strLeng; j += i) {
      //console.log(s.slice(j, j+1))
      const str = s.slice(j, j + 1);
      if (slicedStr === str) {
        count++;
      } else {
        pressedStr += count > 1 ? count + slicedStr : slicedStr;
        slicedStr = str; // 기준 문자열을 새로 n개 단위로 slice한 문자로 대체
        count = 1; // count 초기화
      }
    }
    if (slicedStr) {
      pressedStr += count > 1 ? count + slicedStr : slicedStr;
    }
    // 압축한 문자열 길이가 더 작은 경우, answer 대체
    if (answer.length > pressedStr.length) {
      answer = pressedStr;
    }
  }
  return answer.length;
}
