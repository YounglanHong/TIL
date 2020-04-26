### 2. 삽입정렬(insertion sort)

- 배열의 첫번째 요소 **정렬된 배열**로 이동
- 배열의 요소 차례대로 순회하면서 **정렬된 배열**에 알맞은 위치로 이동
- 기존 배열 모든 요소 순회하면 **정렬된 배열** 반환

```jsx
[1, 11, 66, 77, 55, 33, 88, 99]

[]
[1]
[1, 11]
[1, 11, 66]
[1, 11, 66, 77]
[1, 11, 55, 66, 77]
[1, 11, 33, 55, 66, 77]
[1, 11, 33, 55, 66, 77, 88]
[1, 11, 33, 55, 66, 77, 88, 99]

let arr = [1, 11, 66, 77, 55, 33, 88, 99]; // 입력 배열
let sortedArr = [];
let length = arr.length;
let insert = ''; // 삽입 값
let index = 0; // splice 시작할 인덱스

// splice 시작할 인덱스 위치 구하는 함수
function indexOfArr(sortedArr,insert) {
  for(let i in sortedArr) {
    if(insert < sortedArr[i]) {
      return i;
    }
  }
  return sortedArr.length;
}

for(let i=0; i < length; i++) {
  // **입력 배열**의 *맨 처음 요소* 꺼내서 **삽입 값**에 추가
  insert = arr.shift();
  // splice 시작할 인덱스
  index = indexOfArr(sortedArr,insert);
  // 정렬된 배열의 *index 앞*에 **삽입 값** 추가
  sortedArr.splice(index, 0, insert);
  // 출력
  console.log(index);
  console.log(sortedArr);
}

// 7
// [1, 11, 33, 55, 66, 77, 88, 99]
```
