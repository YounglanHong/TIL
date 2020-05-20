# chrome이랑 node.js 환경 다른 점

- `Chrome`과 `Node.js` 모두 JavaScript의 개발 또는 실행 환경입니다.
- 브라우저인 `Chrome` 은 HTML, CSS, JavaScript를 실행하여 웹 페이지에 렌더링하는 것이 목적이라면, `Node.js` 는 JavaScript의 서버 개발 환경을 제공하는 것이 주목적입니다.
- `Chrome`과 `Node.js` 모두 **ECMAScript표준** 을 기반으로 하고 있고, JavaScript를 해석(기계어로 번역)하는 **V8 자바 스크립트 엔진** 을 사용합니다.
- `Chrome`과 `Node.js` 환경에서 사용할 수 있는 **API** 에서 차이가 있습니다.

  ```jsx
  // only JS runtime(client-side Web API)
  var element = document.body;
  alert("JavaScript");
  localStorage.setItem("runtime", "JavaScript");

  var reader = new FileReader();
  //(https://blog.teamtreehouse.com/reading-files-using-the-html5-filereader-api)

  // only Node.js runtime([Node.js unique API](https://nodejs.org/dist/latest-v11.x/docs/api/fs.html))
  const http = require("http");

  fs.readFile("/etc/passwd", "utf8", callback);
  ```

---

※ Reference

https://poiemaweb.com/js-hello-world

https://jsdev.kr/t/chrome-console-nodejs/4947/2
