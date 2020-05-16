# Closure

- 외부 함수의 변수에 접근할 수 있는 내부의 함수를 **closure** 라고 합니다. closure는 **지역 변수** 와 **외부 함수의 변수**, **전역 변수** 에 접근할 수 있는 권한을 가지고 있습니다.
- 자바 스크립트에서 closure는 함수 내부에 함수를 작성될 때마다 함께 생성됩니다.

(ex)

- 내부 함수(innerFunc())에서 외부 함수(outerFunc())의 지역 변수 outerVar와 전역 변수 globalVar에 접근할 수 있기 때문에 결과 값은 "global/ outer/ inner"

  ```jsx
  let globalVar = "global/"; //* 전역 변수

  function outerFunc() {
    let outerVar = "outer/"; //* 외부 변수
    function innerFunc() {
      let innerVar = "inner"; //* 내부 변수
      console.log(globalVar, outerVar, innerVar);
    }
    innerFunc();
  }
  outerFunc(); // global/ outer/ inner

  //* closure: innerFunc()
  ```

- 반면에, 외부 함수(outerFunc())와 전역에서는 내부 함수(innerFunc())의 변수 innerVar에 접근할 수 없습니다.

  ```jsx
  let globalVar = "global/"; //* 전역 변수

  function outerFunc() {
    let outerVar = "outer/"; //* 외부 변수
    function innerFunc() {
      let innerVar = "inner"; //* 내부 변수
    }
    console.log(innerVar); // Error: innerVar is not defined
  }
  console.log(innerVar); // Error: innerVar is not defined

  //* closure: innerFunc()
  ```

## Closure Example

- 클로저를 통해 _원하는 시점에_ 내부 함수를 실행할 수 있습니다.

  ```jsx
  function studyClosure() {
    var name = "closure";
    return function () {
      console.log("Try to understand", name);
    };
  }

  // 원하는 시점에 내부함수를 실행하기 위해 'closure'를 활용합니다.
  // studyClosure 함수가 실행되면, 변수 myClosure는 studyClosure의 내부함수를 가리키게 됩니다.
  let myClosure = studyClosure();
  myClosure(); // Try to understand closure
  ```

- 클로저는 주로 private data를 저장하고, 접근하는데 사용됩니다. (**private 변수**)

  ```jsx
  function secret() {
    let password = "***";
    return {
      getPassword() {
        alert(password);
      },
    };
  }
  // 내부 함수의 변수는 외부에서 접근할 수 없습니다.
  console.log(getPassword()); // Error: getPassword is not defined

  // 내부 함수의 변수를 외부에서 접근하기 위해서 'closure'를 활용합니다.
  // secret 함수가 실행되면, 변수 privateVar는 secret의 내부함수를 가리키게 됩니다.
  const PrivateVar = secret(); // {getPassword: ƒ}
  PrivateVar.getPassword();
  ```

  - `getPassword` 는 `secret` 함수 내에서 정의된 `password` 에 접근 가능한 **내부 함수(closure)** 입니다. 따라서 이런 함수를 **특권 함수(privileged function)** 라고 부르기도 합니다.

---

※ Reference

[[Javascript] Closure, Hoisting (클로저, 호이스팅)](https://medium.com/@Dongmin_Jang/javascript-closure-hoisting-7bf8eb5062b9)

[Master the JavaScript Interview: What is a Closure?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)

[A simple guide to help you understand closures in JavaScript](https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4)

[[번역] 자바스크립트 스코프와 클로저(JavaScript Scope and Closures)](https://medium.com/@khwsc1/%EB%B2%88%EC%97%AD-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%EC%BD%94%ED%94%84%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%80-javascript-scope-and-closures-8d402c976d19)

[Javascript Closure? 클로저? 그리고 클로저 사용해 module을 만들기!](https://velog.io/@victor/Javascript-Closure-%ED%81%B4%EB%A1%9C%EC%A0%80)
