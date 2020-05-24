# Package.json

- `npm init` 명령을 입력하고, 옵션을 추가하면 `package.json` 파일이 생성됩니다.

```jsx
// package.json 예시
{{
  "name": "npm_example",
  "version": "1.0.0",
  "description": "interview question",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "interview",
    "Q"
  ],
  "author": "younglan",
  "license": "ISC"
}
```

- 패키지 버전 변화를 관리하기 위해 package.json이 사용(의존)하는 패키지들의 버전을 **dependencies, devDependencies** (+ peer Dependencies)로 기록합니다.
  - `npm install`을 하면, `node_module` 디렉토리에 패키지 설치를 함과 동시에 `package.json`도 업데이트됩니다.
  - `—save` 옵션의 경우, dependencies, `—save-dev` 의 경우, devDependencies에 등록이 됩니다.
  - 따라서, 실제 어플리케이션 배포 시 필요한 것들은 `—save` , 배포할 때 필요하지 않은 Mocha, Jest와 같은 테스트 도구, webpack, babel 등은 `—save-dev` 로 설치합니다.

# Package-lock.json

- `npm install` 명령 실행 시, `package.json`을 통해 `node_modules` 폴더를 생성합니다.
- `package.json`에 명시된 의존성 패키지들을 폴더 안에 설치하며, **생성된 `node_modules` 폴더의 정보** 를 `package-lock.json` 파일 안에 담습니다.

\*\*\* 패키지들은 계속해서 버전을 갱신하고 있기 때문에 똑같은 조건으로 설치하기 힘들고, 같은 버전의 패키지라도 의존하는 패키지에는 다른 버전들이 존재할 수 있다.

```javascript

// package-lock.json 예시
"name": "gatsby-starter-hello-world",
  "version": "0.1.0",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "@babel/code-frame": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.8.3.tgz",
      "integrity": "sha512-a9gxpmdXtZEInkCSHUJDLHZVBgb1QS0jhss4cPP93EW7s+uC5bikET2twEF3KV+7rDblJcmNvTR7VJejqd2C2g==",
      "requires": {
        "@babel/highlight": "^7.8.3"
      }
```

⇒ `package-lock.json`은 `node_modules` 폴더(트리)를 설명하고, **[스냅샷](<https://ko.wikipedia.org/wiki/%EC%8A%A4%EB%83%85%EC%83%B7_(%EA%B8%B0%EC%96%B5_%EC%9E%A5%EC%B9%98)>)**을 저장하는 방식으로 `package.json`이 가지고 있는 약점을 보완합니다.

- `package-lock.json` 이 존재하면, npm install 시 `package.json`이 가지고 있는 dependencies를 다시 계산하지 않아도, `package-lock.json` 에 명시된 dependency package를 통해 `node_modules`를 생성합니다.
- 프로젝트를 진행하는 모든 개발자가 **같은 `node_modules`**를 가지고 작업하기 위해 필수로 **package-lock.json**을 포함시켜야 합니다.

---

**요약**

- `package-lock.json`은 `node_modules`나 `package.json`이 생성되거나 수정될 때 자동적으로 만들어지며, dependency 업데이트에 관계없이 **동일한 트리**를 생성하여 **개발자들이 같은 dependency(의존성)를 설치할 수 있도록 보장**해줍니다.
- 팀 프로젝트를 진행할 때 배포나 지속적인 통합이 이뤄져야 하는 상황에서 `package-lock.json`은 단순히 불필요한 파일이 아니라, 개발자들이 **통일성 있는 환경**에서 개발할 수 있도록 해주는 일종의 **연결고리**라고 할 수 있겠습니다.

---

※ Reference

[처음 시작하는 Node.js 개발 - 2 - npm](https://heropy.blog/2018/02/18/node-js-npm/)

[(NodeJS) package.json](https://www.zerocho.com/category/NodeJS/post/5825a3caaff5c70018279975)

[미처 알지 못했던 package-lock.json](https://pewww.tistory.com/11)
