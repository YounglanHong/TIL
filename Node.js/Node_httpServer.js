// Node.js로 http server 구축

const http = require("http");
http
  .createServer((req, res) => {
    res.write("Hello Node Server");
    res.end();
  })
  .listen(8080);

console.log("http server를 실행합니다.");
