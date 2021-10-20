# 에러 처리(Error Handling)

## 에러 처리 필요성

```js
console.log('[Start]')  // [Start]
error() // Uncaught ReferenceError: error is not defined
// 🚫프로그램 강제 종료
console.log('[End]')
```
* 프로그램이 *강제 종료되지 않고* 코드가 계속 실행되도록 에러 대응하는 방법

```js
console.log('[Start]')
try {
 error()
} catch(err) {
 console.log('Error:', err)
}
console.log('[End]')
// [Start]
// Error: ReferenceError: error is not defined
// [End]
```

## try...catch(...finally)문

* `try`: 코드블록의 에러를 테스트
* `catch`: 에러 처리
* `finally`(생략가능): 에러 발생과 상관없이 실행
  ```js
  try {
    // 실행할 코드(에러가 발생할 가능성 있는 코드)
  } catch(err) {
    // try 블록에서 에러 발생 시 실행되는 코드
    // (🔥catch에서만 유효)
    // err에 발생한 에러가 Error 객체로 전달
  } finally {
    // 에러 발생과 상관없이 한번 실행
  }
  ```

### Error 객체

```js
// 에러 객체 생성
const error = new Error(errMsg);
```

* `Error` 생산자 함수는 `Error`, `SyntaxError`, `ReferenceError`, `TypeError` 등 에러 객체를 생성하고 모두 **`Error.prototype`** 을 상속받는다.

### throw 문

```js
// 에러 발생
// throw errorExpression
try {
  throw new Error('invalid variable')
}
```

* 에러를 발생시키려면 `try`블럭 안에서 `throw`문으로 에러 던져야한다.

## 에러의 전파

* 🔥`throw`된 에러는 호출자 방향으로 전파되며 캐치하지 않으면 프로그램은 강제 종료된다.
* 🔥`setTimeout`이나 프로미스 후속 처리 메서드의 콜백함수는 호출자가 없다.






***

### Reference

🔗 [Discover JavaScript try catch | BitDegree](https://helloworldjavascript.net/pages/290-exception.html)
🔗 [예외 처리 | JavaScript로 만나는 세상](https://www.bitdegree.org/learn/javascript-try-catch)

📚[<모던 자바스크립트 Deep dive>](http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9791158392239)