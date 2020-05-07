// Toy Problem: Skilltree
// https://programmers.co.kr/learn/courses/30/lessons/49993?language=javascript

/* 블로깅 주소: https://www.notion.so/5-7-b90bd7c60bc54325a32ced63b5a4d625 */

function solution(skill, skill_trees) {
  // skill: 순서 => 순서대로만 스킬 배울 수 있음("CBD" => "BD" x)
  // skill_tree: 순서쌍 배열

  var answer = 0;
  // skill 배열 안의 문자열 순서대로 탐색
  let skill_split = skill.split("");
  let skill_str = "";
  for (let i = 0; i < skill_trees.length; i++) {
    let skill_t_split = skill_trees[i].split("");
    // console.log(skill_t_split)
    skill_str = skill_t_split.filter((i) => skill_split.includes(i)).join("");
    // console.log(skill_str);
    if (skill_str === skill.substring(0, skill_str.length)) {
      answer++;
    }
  }
  return answer;
}
