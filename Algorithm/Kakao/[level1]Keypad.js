// 키패드 누르기
// https://tech.kakao.com/2020/07/01/2020-internship-test/

function solution(numbers, hand) {
  let left_key = [1, 4, 7]; // 왼손 키패드
  let right_key = [3, 6, 9]; // 오른손 키패드
  let hand_position = ["*", "#"]; // 왼손, 오른손 현재 위치
  let result = ""; // 사용한 손 결과값
  let near_hand = ""; // 가까운 손

  //⭐️ 키패드 좌표값
  let position = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  const check_near_hand = (position, hand, l, r, num) => {
    // |left_x – next_x| + |left_y – next_y|
    let left_distance =
      Math.abs(position[l][0] - position[num][0]) +
      Math.abs(position[l][1] - position[num][1]);
    // |right_x – next_x| + |right_y – next_y|
    let right_distance =
      Math.abs(position[r][0] - position[num][0]) +
      Math.abs(position[r][1] - position[num][1]);

    // 왼손과 오른손의 거리가 같을 때,
    if (left_distance === right_distance) {
      near_hand = hand === "left" ? "L" : "R";
    } else {
      near_hand = left_distance < right_distance ? "L" : "R";
    }

    return near_hand;
  };

  for (let num of numbers) {
    // 왼손
    if (left_key.includes(num)) {
      result += "L";
      hand_position[0] = num;
      // 오른손
    } else if (right_key.includes(num)) {
      result += "R";
      hand_position[1] = num;
      // 중앙
    } else {
      // (함수)더 가까운 손 사용
      near_hand = check_near_hand(
        position,
        hand,
        hand_position[0],
        hand_position[1],
        num
      );
      if (near_hand === "L") {
        result += "L";
        hand_position[0] = num;
      } else {
        result += "R";
        hand_position[1] = num;
      }
    }
  }
  return result;
}
