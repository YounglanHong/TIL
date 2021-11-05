# Ajax(Asynchronous JavaScript and XML)

* 자바스크립트를 사용해 브라우저가 서버에게 **비동기** 방식으로 데이터를 요청하고, 서버가 응답한 데이터를 받아서 웹페이지를 **동적으로 업데이트**하는 프로그래밍 방식이다.

  * [***XMLHttpRequest***](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest) 객체를 기반으로 동작한다.

  > XMLHttpRequest(XHR) 객체는 서버와 상호작용하기 위하여 사용됩니다. 전체 페이지의 새로고침없이도 URL로부터 데이터를 받아올 수 있습니다. 이는 웹 페이지가 사용자가 하고 있는 것을 방해하지 않으면서 페이지의 일부를 업데이트할 수 있도록 해줍니다. XMLHttpRequest 는 AJAX 프로그래밍에 주로 사용됩니다.

  1. 변경할 부분을 업데이트하는 데 필요한 데이터만 서버로부터 전송받기 때문에 **불필요한 데이터 통신이 발생하지 않는다**.
  2. 변경할 필요 없는 부분은 다시 렌더링하지 않아 **화면 깜빡임 현상이 없다**.
  3. 클라이언트와 서버 간 비동기 방식으로 통신이 이루어져 서버에게 요청을 보낸 이후 **블로깅이 발생하지 않는다**.

## XMLHttpRequest

* 브라우저에서 제공하는 Web API인 XMLHttpRequest 객체는 HTTP 요청 전공과 응답 수신을 위한 다양한 메서드와 프로퍼티를 제공한다.

  ```js
  // XMLHttpRequest 객체 생성
  cosnt xhr = new XMLHttpRequest();
  ```

