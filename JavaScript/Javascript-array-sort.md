# 자바스크립트 배열 정렬 메서드(Array.prototype.sort)

* [`sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)는 배열의 요소를 정렬합니다.
* 원본 배열을 직접 변경(mutable)하며, 정렬된 배열을 반환합니다.

> * ES10 이전에는 quicksort 알고리즘을 사용했지만, 이후에는 timsort 알고리즘으로 변경되었습니다.
> ([Array.prototype.sort() 메서드의 안정성 향상 | 네이버 D2](https://d2.naver.com/helloworld/4007447))

```js
const alphabet = ['A', 'C', 'B'];

alphabet.sort();
console.log(alphabet); //  ["A", "B", "C"];

const 한글 = ['가', '다', '나'];

한글.sort(); 
console.log(한글);  //  ["가", "나", "다"]
```

* 기본 정렬은 **오름 차순** 입니다. **내림차순** 정렬을 위해 `reverse` 메서드를 함께 사용합니다.

```js
alphabet.sort().reverse();
// ["C", "B", "A"]
```

* 기본 정렬은 [**유니코드 코드 포인트**](https://d2.naver.com/helloworld/19187) 입니다. 
  * 배열의 요소가 숫자 타입일 경우, 매개변수로 별도의 함수를 명시하지 않으면 *문자열로 변환한 후 정렬*합니다.

```js
const numbers = [100, 2, 30, 400, 0.5]

numbers.sort() // [0.5, 100, 2, 30, 400]  // 💣
```
* 숫자 타입을 정렬할 떄는 (정렬 순서 나타내는) **비교 함수**를 매개변수로 전달해야 합니다. 

  * 비교함수(a, b)가 **양수**를 반환하면, b를 우선 정렬(**오름차순**)
  * 비교함수(a, b)가 **0**를 반환하면, 정렬 X
  * 비교함수(a, b)가 **음수**를 반환하면, a를 우선 정렬(**내림차순**)

    ```js
    const numbers = [100, 2, 30, 400, 0.5]
    numbers.sort((a,b) => a - b) // 오름차순
    // [0.5, 2, 30, 100, 400]
    
    numbers.sort((a,b) => b - a) // 내림차순
    //  [400, 100, 30, 2, 0.5]
    ```

* 객체 배열을 정렬할 때는 **프로퍼티의 키**를 매개변수로 하는 비교 함수의 **비교 연산**을 사용합니다. 

  ```js
  const profile = [
    { id: 5, name: 'Amy'},
    { id: 1, name: 'Bonne'},
    { id: 3, name: 'Michelle'},
    { id: 2, name: 'Danny'},
    { id: 4, name: 'John'},
  ]

  const compare = (key) => {
    return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
  }

  profile.sort(compare('id'));
  console.log(profile); 
  /* 0: {id: 1, name: "Bonne"}
     1: {id: 2, name: "Danny"}
     2: {id: 3, name: "Michelle"}
     3: {id: 4, name: "John"}
     4: {id: 5, name: "Amy"} */

  profile.sort(compare('name'));
  console.log(profile);
  /* 0: {id: 5, name: "Amy"}
     1: {id: 1, name: "Bonne"}
     2: {id: 2, name: "Danny"}
     3: {id: 4, name: "John"}
     4: {id: 3, name: "Michelle"} */
  ```

