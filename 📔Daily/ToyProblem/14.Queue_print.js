// Toy Problem: 프린트
// https://programmers.co.kr/learn/courses/30/lessons/42587

/* 블로깅 주소: https://www.notion.so/5-14-6a8b05da96954897b7073e9036c453bf */

function solution(priorities, location) {
  var answer = 0; // 인쇄 횟수
  // 결과값: 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 반환

  // (예제 #1) 내가 요청한 문서는 2번째 인덱스 문서
  // [2,1,3,2] <=> [A,B,C,D]
  // [3,2,2,1] <=> [C,D,A,B] ==> C 1번째로 출력

  // (예제 #2) 내가 요청한 문서는 0번째 인덱스 문서
  // [1,1,9,1,1,1] <=> [A,B,C,D,E,F]
  // [9,1,1,1,1,1] <=> [C,D,E,F,A,B] ==> A 5번째로 출력

  const printList = priorities.map((value, index) => ({
    value,
    index,
  }));
  // console.log(printList);
  /* [ { value: 2, index: 0 },
         { value: 1, index: 1 },
         { value: 3, index: 2 },
         { value: 2, index: 3 } ] */

  // 조건: 문서의 중요도 배열 모두 탐색
  while (priorities.length > 0) {
    // 1. 가장 앞에 있는 문서 추출(curr)
    const curr = printList.shift();
    // console.log(curr); // { value: 2, index: 0 }
    // 2. 맨 앞의 문서보다 중요도 높은 문서 있으면, 가장 마지막으로 이동(push)
    if (printList.some((list) => list.value > curr.value)) {
      printList.push(curr);
    } else {
      // 3. 맨 앞의 문서보다 중요도 높은 문서 없으면, 출력(answer++)
      // 현재 문서가 내가 인자로 받은 location과 일치하면,answer 반환
      answer++;
      if (curr.index === location) {
        return answer;
      }
    }
  }
}
