// Toy Problem: 구명 보트
// https://programmers.co.kr/learn/courses/30/lessons/42885

// 풀이 1
function solution(people, limit) {
  // 구명보트엔 최대 2명
  var answer = 0;
  // let i=0;
  let i = 0;
  let j = 0;

  // 오름 차순
  people.sort((a, b) => a - b); // [ 50, 50, 70, 80 ]
  // [ 30, 40, 50, 60 ]
  // [ 50, 70, 80 ]

  // 최고 무게 + 최소 무게 <= limit
  //! 실행 시간이 더 짧은 다른 방법을 찾아보세요.
  for (i = people.length - 1; j < i; i--) {
    // 최고 무게 + 최소 무게 <= limit
    if (people[i] + people[j] <= limit) {
      j++;
      answer++;
    } else {
      answer++;
    }
  }
  // i===j 일 경우,
  if (i === j) {
    answer++;
  }
  // console.log(people)
  // console.log(answer)

  console.log(people);
  return answer;
}

// 풀이 2
function solution(people, limit) {
  // var answer = 0;
  // return answer;

  // 오름 차순 정렬
  people.sort((a, b) => a - b);
  console.log(people);
  // [ 50, 50, 70, 80 ]
  // [ 30, 40, 50, 60 ]
  // [ 50, 70, 80 ]
  let count = 0;
  while (people.length) {
    if (people[0] + people[people.length - 1] <= limit) {
      people.shift(); // 0번째 인덱스 제거
      people.pop(); // 마지막 인덱스 제거
    } else {
      people.pop(); // 마지막 인덱스 제거
    }
    count++;
  }
  return count;
}
