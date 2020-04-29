### 3. 병합정렬(merge sort)

- 시간복잡도: O(nLogn) — 빠름
- 배열의 요소가 1개가 될 때까지 배열을 1/2씩 **분할**
- 분할한 배열의 요소들을 순서대로 *0번째 인덱스끼리 비교 정렬*하여 **정복**

```jsx
// 분할
[1, 11, 66, 77, 55, 33, 88, 99]

[1, 11, 66, 77], [55, 33, 88, 99]

[1, 11], [66, 77], [55, 33], [88, 99]

[1], [11], [66], [77], [55], [33], [88], [99]

// 정복
[1, 11], [66, 77], [33, 55], [88, 99]
// 0번째 인덱스 끼리 비교
[],[],[66, 77], [33, 55], [88, 99]
[],[],[66, 77], [], [], [88, 99]
[1, 11, 66, 77], [33, 55, 88, 99]
[1, 11, 33, 55, 66, 77, 88, 99]

// **재귀함수**
let arr = [1, 11, 66, 77, 55, 33, 88, 99]; // 입력 배열

// 분할
function mergeSort(arr) {
  let length = arr.length;
  if(length <= 1) {
    return arr;
  }
  let middleIdx = parseInt(length/2)
  let group1 = mergeSort(arr.slice(0, middleIdx));
  let group2 = mergeSort(arr.slice(middleIdx));
  return `group1: ${group1}, group2: ${group2}\n`
}
console.log(mergeSort(arr))

/* group1: group1: group1: **1**, group2: **11**
, group2: group1: **66**, group2: **77**

, group2: group1: group1: **55**, group2: **33**
, group2: group1: **88**, group2: **99** */

// **재귀함수**
let arr = [1, 11, 66, 77, 55, 33, 88, 99]; // 입력 배열

// 분할, 정복
function mergeSort(arr) {
  let length = arr.length;
  let result = []; // 결과값
  if(length <= 1) {
    return arr;
  }
  let middleIdx = parseInt(length/2)
  let group1 = mergeSort(arr.slice(0, middleIdx));
  let group2 = mergeSort(arr.slice(middleIdx));

  // group1, group2 모두 요소가 남아있을 때,
  while(group1.length !== 0 && group2.length !== 0) {
    if(group1[0] < group2[0]) {
     result.push(group1.shift());
    } else {
     result.push(group2.shift());
    }
  }
  // group1만 요소가 남아있을 때,
  while(group1.length !== 0) {
     result.push(group1.shift());
  }

  // group2만 요소가 남아있을 때,
  while(group2.length !== 0) {
     result.push(group2.shift());
  }
  return result;
}

console.log(mergeSort(arr))
// [1, 11, 33, 55, 66, 77, 88, 99]
```
