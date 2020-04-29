### 4. 퀵정렬(quick sort)

- 시간복잡도: O(nlog2n) (최악은 O(n^2))
- **기준값(pivot)** 을 정해서 그 값보다 **큰 요소는 오른쪽**에, **작은 요소는 왼쪽**에 위치, 이를 반복하여 정렬
- **기준값(pivot)** 은 주로 처음, 중간, 끝 값 많이 사용

```jsx
let arr = [1, 11, 66, 77, 55, 33, 88, 99]; // 입력 배열

// **기준값(pivot)**: 0번째 인덱스 값

// 기준값(pivot): 1
[~~11~~, 66, 77, 55, 33, 88, 99] + [1] + [11]
// 기준값(pivot): 66
[~~77~~, 55, 33, 88, 99] + [1] + [11] + [66] + [77]
// 기준값(pivot): 55
[~~33~~, 88, 99] + [1] + [11] + [33] + [55] + [66] + [77]
// 기준값(pivot): 88
~~[99]~~ + [1] + [11] + [33] + [55] + [66] + [77] + [88] + [99]

let arr = [1, 11, 66, 77, 55, 33, 88, 99]; // 입력 배열

function quickSort(arr) {
  let length = arr.length;
  if(length <= 1) {
    return arr;
  }
  let pivot = [arr.shift()]
  let group1 = [];
  let group2 = [];

  for(let i in arr) {
    if(arr[i] < pivot) {
      group1.push(arr[i])
    } else {
      group2.push(arr[i])
    }
  }

  console.log(`group1: ${group1}\n, group2: ${group2}\n, pivot: ${pivot}\n`)
  /*  group1: , group2: 11,66,77,55,33,88,99  , pivot: 1
      group1: , group2: 66,77,55,33,88,99, pivot: 11
      group1: 55,33, group2: 77,88,99, pivot: 66
      group1: 33, group2: , pivot: 55
      group1: , group2: 88,99, pivot: 77
      group1: , group2: 99, pivot: 88


  return quickSort(group1).concat(pivot, quickSort(group2))
}

console.log(quickSort(arr))
// [1, 11, 33, 55, 66, 77, 88, 99]

```
