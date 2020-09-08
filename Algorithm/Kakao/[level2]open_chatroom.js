// 오픈채팅방
// https://programmers.co.kr/learn/courses/30/lessons/42888

// 풀이1
function solution(record) {
  let result = [];
  let id_nickname = {}; // 최종 아이디, 닉네임
  let message = ["님이 들어왔습니다.", "님이 나갔습니다."];
  // 각 단계별 상태, 아이디, 닉네임 분리된 배열
  let steps = record.map((step) => step.split(" "));
  //* 배열 역순으로 배치해서 닉네임 변경 체크
  let reversed = steps.reverse();
  reversed.map((step) => {
    // 0: 상태, 1: 아이디, 2: 닉네임
    if (step[2] && !id_nickname[step[1]]) {
      id_nickname[step[1]] = step[2];
    }
  });
  // console.log(id_nickname)
  // { uid4567: 'Ryan', uid1234: 'Prodo' }

  // 각 단계별 상태에 따라 결과값 출력
  for (let step of steps) {
    if (step[0] === "Enter") {
      result.push(id_nickname[step[1]] + message[0]);
    } else if (step[0] === "Leave") {
      result.push(id_nickname[step[1]] + message[1]);
    }
  }
  // 다시 역순
  return result.reverse();
}

// 풀이2
function solution(record) {
  let result = [];
  let userMap = new Map();

  record.forEach((step) => {
    let [state, id, nickname] = step.split(" ");
    if (state === "Enter" || state === "Change") {
      userMap.set(id, nickname);
    }
  });
  record.forEach((step) => {
    let [state, id] = step.split(" ");
    if (state === "Enter") {
      result.push(`${userMap.get(id)}님이 들어왔습니다.`);
    } else if (state === "Leave") {
      result.push(`${userMap.get(id)}님이 나갔습니다.`);
    }
  });
  return result;
}
