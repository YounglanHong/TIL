# Git 

* Git(깃)은 **버전 관리 시스템**
  > 개발 과정 중 오류 발생 시 이전 상태로 돌아갈 수 있도록 해주기 때문에 디버깅에 용이합니다.

1. Git 레포 시작하기(Initialize git repo)
    ``` 
    git init
    ```

2. Git 저장소 상태 확인하기(Check repo status)
    ``` 
    git status
    ```

3. 파일을 stage로 올리기(Add file to stage)
    ``` 
    git add . | git add [filename]
    ```

4. 변경 내용을 커밋하기(Commit changes to repo)
    ``` 
    git commit -m "initial commit"
    ```

5. Github의 원격저장소 추가하기(Add remote repo)
    ``` 
    git remote add origin [remote_repo_url]
    ```

6. 원격 저장소로 코드 push하기(Push code to remote repo)
    ``` 
    git push -u origin master|[branch name]
    ```