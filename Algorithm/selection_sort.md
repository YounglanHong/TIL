## 1. 선택정렬(selection sort)

- 배열에서 가장 작은 요소를 **정렬된 배열**로 이동
- 계속해서 가장 작은 요소를 **정렬된 배열**로 이동
- 기존 배열 모든 요소 순회하면 **정렬된 배열** 반환

```jsx
[10, 8, 9, 1, 3, 6, 5, 4];

[]
[1]
[1, 3]
[1, 3, 4]
...
[1, 3, 4, 5, 6, 8, 9, 10]


// (1)
let arr = [10, 8, 9, 1, 3, 6, 5, 4];
let sortedArr = [];
let length = arr.length; // 값 고정

for(let i=0; i < length; i++) {
  // 배열에서 가장 작은 요소를 **정렬된 배열**로 이동
  sortedArr.push(Math.min.apply(null, arr));
  // 기존 배열에서 가장 작은 요소 삭제
  arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
  console.log(arr);
  console.log(sortedArr);
}

// (2)
let arr = [10, 8, 9, 1, 3, 6, 5, 4];
let sortedArr = [];

for(let i=0; i < length; i++) {
  // 배열에서 가장 작은 요소를 **정렬된 배열**로 이동
  sortedArr.push(Math.min(...arr));
  // 기존 배열에서 가장 작은 요소 삭제
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  // 출력
  console.log(arr);
  console.log(sortedArr);
}

// []
// [1, 3, 4, 5, 6, 8, 9, 10]

```
