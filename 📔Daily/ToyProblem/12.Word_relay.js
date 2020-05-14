// Toy Problem: 영어 끝말잇기
// https://programmers.co.kr/learn/courses/30/lessons/12981

/* 블로깅 주소: https://www.notion.so/5-12-f5af3db99fbd4243abdee5229453fbf4 */

function solution(n, words) {
  // var answer = [];
  let word_relay = {};

  // 이전단어의 마지막 문자와 다음 단어의 첫 문자 같은지 확인

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (!word_relay[word]) {
      // 이전단어의 마지막 문자와 다음 단어의 첫 문자 같지 않으면,
      if (
        i > 0 &&
        words[i - 1].charAt(words[i - 1].length - 1) !== word.charAt(0)
      ) {
        return [(i % n) + 1, Math.ceil((i + 1) / n)];
        // console.log(i%n + 1, Math.ceil((i+1)/n))
      } else {
        word_relay[word] = word;
        // console.log(word_relay)
      }
    } else {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    }
  }
  return [0, 0];
  // return answer;
}
