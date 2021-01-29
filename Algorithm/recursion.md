## 재귀(Recursion)

- 자기 자신을 호출하는 과정/함수(A process/function that calls itself)
- 입력값이 다른 동일한 함수를 `base case`에 도달하기 전까지 호출
  (Invoke the same function with a different input until you reach your base case)

  - `Base Case`: 재귀가 멈추는 조건 (Condition that recursion ends)
  - `Recursive Case`: 재귀가 시작하는 조건(Condition that resumes recursion)

    ```js
    function countDown(num) {
      if (num <= 0) {
        console.error("Finish!");
        return; // Base Case
      }
      console.log(num);
      num--;
      countDown(num);
    }
    countDown(10);
    ```

### 재귀함수와 콜스택(Recursive functions and CallStack)

- 재귀함수는 반복해서 함수를 콜스택에 추가
  ```js
  function recursive(x) {
    if (x > 0) {
      console.log(x);
      recursive(x - 1);
    }
  }
  ```
  ![Recursion_CallStack](./Algorithm_Image/Recur_CallStack.png)

### ※ 재귀함수 필수 요소

1. **`Base Case`**

   ```js
   function factorial(num) {
     // if(num === 1) return 1;  // 👿No base case
     return num * factorial(num - 1);
   }
   // Maximun call stack size exceeded(Stack overflow)
   ```

2. **`Return`**

   ```js
   function factorial(num) {
     if (num === 1) console.log(1); // 👿No return
     return num * factorial(num - 1);
   }

   function factorial(num) {
     if (num === 1) return 1;
     return num * factorial(num); // 👿Wrong return!
   }
   // Maximun call stack size exceeded(Stack overflow)
   ```
