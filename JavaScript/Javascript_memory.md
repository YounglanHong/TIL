# 자바스크립트 메모리 관리

* C 같은 저수준 언어에서는 `malloc()` 과 `free()`를 사용해 수동으로, 자바스크립트에서는 **자동으로** 메모리를 할당·해제합니다. 

* 자바스크립트는 객체가 생성될 때 메모리를 할당하고 사용하지 않는 변수는 자바스크립트 엔진 내 가비지 컬렉터(garbage collector)가 삭제합니다. 

## 메모리 누수

* 자바스크립트 엔진의 가비지 컬렉터가 메모리를 올바른 방식으로 해제하지 않은 경우 발생할 수 있습니다. 

  * 메모리 누수로 인해 성능이 떨어지고, 프로그램이 중단됩니다.


### 1. 객체에 대한 참조

  * 객체가 참조 중이면 해당 객체는 메모리에 존재합니다.

    ```js
    let memory = {
      key1: func(), // 5KB
      key2: func(),  // 5KB
    };

    // key1 속성에 접근하기 위해서 memory 객체 전체를 함수 범위에 포함
    const clickEvent = () => {
      alert(obj.key1); // 10KB
    }
    ```

### 2. DOM 메모리 누수

  * DOM 함수를 가리키는 변수가 이벤트 콜백 외부에 선언된 경우 *해당 DOM 항목을 제거해도 해당 항목은 메모리에 남습니다.*

    ```html
    <div id="first">First</div>
    <div id="second">Second</div>
    ```

    ```js
    let first = document.getElementById("first");
    let second = document.getElementById("second");

    first.addEventListener("click", () => {
      second.remove();
      console.log(second); // 제거해도 출력(메모리 누수)
    });
    ```

  * 메모리 누수 막는 방법

  1. 이벤트 핸들러 콜백 범위 내에 제거할 DOM 항목 선언하고 항목 제거

      ```js
      let first = document.getElementById("first");

      first.addEventListener("click", () => {
        let second = document.getElementById("second");
        second.remove();
      });
      ```

  2. 이벤트 사용 후 **등록 해지**

      ```js
      let first = document.getElementById("first");

      first.addEventListener("click", () => {
        let second = document.getElementById("second");
        second.remove();
      });
      first.removeEventListener("click");
      ```
### 3. `window` 전역 객체

  * `window` 전역 객체에 포함되는 객체는 메모리에 존재합니다.

    ```js
    var global = "🌎";
    window.global // "🌎"
    ```

    * 전역 속성으로 추가된 객체(전역변수)는 제거할 수 없습니다.
    * 따라서 가능하면 `var`로 선언한 전역변수를 사용하지 않는 것이 메모리 절약에 유리합니다.
    * 필수적이지 않은 전역변수는 함수 내부로 위치를 이동할 수 있습니다. 

### 4. 객체 참조 제한

  * 함수에 객체의 전체 범위가 아닌 *필요한 부분만 참조*하여 과도한 메모리 사용을 최소화해야 합니다.
  * 객체 전체보다는 **객체의 속성**만 전달합니다.

    ```js
    let obj = {
      key1: "value1",
      key2: "value2"s
    }

    /* 💣 
    const printValue = (obj) => {
      console.log(obj.key1);
    }

    printValue(obj); // "value1" */

    // 👍
    const printValue = (key) => {
      console.log(key);
    }

    printValue(obj.key1); // "value1"
    ```

### 5. `delete` 연산자

  * 불필요한 객체 속성 제거하기 위해 `delete` 연산자 사용합니다.

    ```js
    let obj = {
      key1: "value1",
      key2: "value2"s
    }

    delete obj.key2;
    console.log(obj.key2); // undefined
    ```

***

## Reference

[자바스크립트의 메모리관리 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management)

<자바스크립트로 하는 자료구조와 알고리즘> by.배세민