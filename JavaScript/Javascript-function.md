# 자바스크립트 함수

## 함수(function)

* 자바스크립트 애플리케이션의 기본 구성 블록(building block)

  * `data ---> [function] ---> output`
  * **재사용** 가능한 코드 조각

### 함수의 매개변수와 전달인자(arguments)

  ```js
  function addTen(number) {
    return number + 10;
  }
  const numberOne = addTen(1);
  ```

* **매개변수**(parameters): 함수를 실행하기 위해 받아야하는 입력값 또는 입력값의 목록(placeholders to receive input values, *number*)

* **전달인자**(arguments): 함수 호출 시 전달되는 매개변수의 실제 값(actual values of function parameters, to input data, *1*)


### return 문
* `return` 키워드를 사용하여 함수에서 값을 반환 
  * 대부분의 함수의 결과 값을 반환하고, 반환되는 값은 코드의 어디서나 사용 가능
* `return` 키워드는 함수를 즉시 종료(exits the function)

  <a href="https://imgur.com/mIf3luC"><img src="https://i.imgur.com/mIf3luC.png" title="source: imgur.com" /></a>


***

### 함수 선언문(function declarations)

  ```js
  function greetName(firstName, lastName) {
    return `Welcome, ${firstName} ${lastName}!`
  }

  const greeting = greetName("GilDong", "Hong") // "Welcome, GilDong Hong!"
  ```

### 함수 표현식(function expressions)

* 표현식(expression)은 값(value)을 생성하므로 해당 값을 저장할 **변수**(*greetName*) 필요

  ```js
  const greetName = function (firstName, lastName) {
    return `Welcome, ${firstName} ${lastName}!`
  }

  const greeting = greetName("GilDong", "Hong")
  ```

> ### 💡함수 선언문과 표현식의 차이점
> * 함수 선언문은 선언 이전에 호출이 가능하다(**호이스팅**, hoisting)
> * 함수 표현식은 **호이스팅**이 일어나지 않는다.
>   ```js
>   const greeting = greetName("GilDong", "Hong") 
>   console.log(greeting) // "Welcome, GilDong Hong!"
> 
>   function greetName(firstName, lastName) {
>   return `Welcome, ${firstName} ${lastName}!`
>   }
>   ``` 

### 화살표 함수(arrow function)

* 함수의 축약 표현: `() => {}`
  ```js
  const greetName = (firstName, lastName) => `Welcome, ${firstName} ${lastName}!`

  const greeting = greetName("GilDong", "Hong") 
  ```

*** 

### Reference

🔗 [JavaScript Functions: Explain Like I'm Five](https://dev.to/sumusiriwardana/javascript-functions-explain-like-i-m-five-5009)