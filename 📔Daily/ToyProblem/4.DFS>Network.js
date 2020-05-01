function solution(n, computers) {
  var answer = 0;
  // DFS => 각 컴퓨터는 하나의 노드
  // 탐색했는지 여부 알려주는 T/F 필요
  let searched = [];

  for (let i = 0; i < n; i++) {
    searched.push(false);
  }

  function dfs(computers, i) {
    if (searched[i]) {
      // return ;
    }
    // 현재 노드 탐색 여부 true로 표시
    searched[i] = true;
    //console.log(searched);

    for (let j = 0; j < computers.length; j++) {
      if (computers[i][j] === 1) {
        dfs(computers, j);
      }
    }
  }
  // 탐색하지 않은 노드인 경우, 다시 dfs 호출
  for (let i = 0; i < n; i++) {
    if (!searched[i]) {
      answer++;
      // console.log(answer)
      dfs(computers, i);
    }
  }
  return answer;
}
