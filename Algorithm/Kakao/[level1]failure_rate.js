// 실패율
// https://programmers.co.kr/learn/courses/30/lessons/42889

// 풀이1

function solution(N, stages) {
  var answer = [];
  let failed = {}; // 각 스테이지별 실패한 사용자
  let failure_rate = []; // 실패율
  let user_length = stages.length;

  for (let i = 1; i <= N; i++) {
    failed[i] = 0; // 자리수 맞추기(0)
    stages.map((stage) => {
      if (stage === i) {
        failed[i] ? (failed[i] += 1) : (failed[i] = 1);
      }
    });
    failure_rate.push({ index: i, rate: failed[i] / user_length });
    user_length = user_length - failed[i]; // 분모값 변화
  }
  // console.log(failed) { '1': 1, '2': 3, '3': 2, '4': 1 }

  // 내림차순 정렬
  failure_rate.sort((a, b) => b.rate - a.rate);
  // console.log(failure_rate)
  /* 	[
          { index: 3, rate: 0.5 },
          { index: 4, rate: 0.5 },
          { index: 2, rate: 0.42857142857142855 },
          { index: 1, rate: 0.125 },
          { index: 5, rate: 0 }
        ] */

  // 결과값(스테이지 번호 배열)
  failure_rate.forEach((item) => {
    answer.push(item.index);
  });

  return answer;
}
