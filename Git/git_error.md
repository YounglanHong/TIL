## git push, pull error

### (fatal: refusing to merge unrelated histories)

- 원인: 서로 관련 history가 없는 레포를 병합(merge)할 때 생기는 오류
- 해결방법: `allow-unrelated-histories` 옵션 추가

  ```
  git pull origin <branch name> --allow-unrelated-histories
  ```
