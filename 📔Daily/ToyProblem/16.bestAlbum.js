// Toy Problem: 베스트 앨범
// https://programmers.co.kr/learn/courses/30/lessons/42579

/* 블로깅 주소: https://www.notion.so/5-18-0344bc84eb1e4c2d8e7ba87c319dc38f */

function solution(genres, plays) {
  var answer = [];
  let music = {
    max: [],
  };
  for (let i = 0; i < genres.length; i++) {
    if (music[genres[i]]) {
      for (let j = 0; j < music.max; j++) {
        if (music.max[j].genres === genres[i]) {
          music.max[j].play += plays[i];
        }
      }
      music[genres[i]].push({
        idx: i,
        play: plays[i],
      });
    } else {
      music[genres[i]] = [];
      music.max.push({
        genres: genres[i],
        play: plays[i],
      });
      music[genres[i]].push({
        idx: i,
        play: plays[i],
      });
    }
  }
  // console.log(music)
  return answer;
}
