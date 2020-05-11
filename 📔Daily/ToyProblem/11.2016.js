// Toy Problem: 2016
// https://programmers.co.kr/learn/courses/30/lessons/12901

/* 블로깅 주소: hhttps://www.notion.so/5-11-e516077418844395ba484b036c54a98d */

function solution(a, b) {
  // a는 1~ 12, b는 ~29 or 30, 31
  // 2016-01-01은 금요일
  // let sixteen = new Date("2016-01-01")
  // Fri Jan 01 2016 09:00:00 GMT+0900 (대한민국 표준시)

  var answer = "";
  let days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let end_date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let date = 0;

  for (let i = 0; i < a - 1; i++) {
    // a월 전까지 end_date의 합
    date += end_date[i];
    // console.log(date)
  }
  date += b;
  // date += b-1
  console.log(date);
  answer = days[date % 7];
  return answer;
}
