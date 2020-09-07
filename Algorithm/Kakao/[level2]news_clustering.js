// 뉴스 클러스터링
// https://programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  var answer = 0;
  let set1 = [];
  let set2 = [];

  // 대문자
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  //*** 정규표현식(영문자만)
  let engReg = /^[A-Z]*$/;
  // console.log(engReg.test(str1))

  // 공백처리
  // str1 = str1.replace(/ /gi, "");
  // str2 = str2.replace(/ /gi, "");

  // 다중 집합 구하는 함수
  function multiSet(str, set) {
    for (let i = 0; i < str.length - 1; i++) {
      let check = str.substring(i, i + 2);
      if (engReg.test(check)) {
        set.push(check);
      }
    }
  }

  multiSet(str1, set1); // [ 'FR', 'RA', 'AN', 'NC', 'CE' ]
  multiSet(str2, set2); // [ 'FR', 'RE', 'EN', 'NC', 'CH' ]

  set1.sort();
  set2.sort();
  console.log(set1);
  console.log(set2);

  let inter = 0; // 교집합 개수
  let sum = 0; // 합집합 개수

  // let inter1 = set1.filter(str => set2.includes(str));
  // let inter2 = set2.filter(str => set1.includes(str));
  // console.log("1", inter1)
  // console.log("2", inter2)
  // inter = Math.min(inter1.length, inter2.length);
  inter = new Set(set1.concat(set2));
  inter = inter.size;

  // console.log("inter",inter)
  sum = set1.length + set2.length - inter;

  console.log(sum);

  let jaccard = inter / sum;
  answer = sum === 0 ? 65536 : Math.floor(jaccard * 65536);
  return answer;
}
