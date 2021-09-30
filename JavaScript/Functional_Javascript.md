# 함수형 자바스크립트(Funtional Javascript)

> 🔗[Beginning Functional JavaScript](http://www.kyobobook.co.kr/product/detailViewEng.laf?ejkGb=BNT&mallGb=ENG&barcode=9781484240861) 내용을 정리한 글입니다. 

## 명령형 프로그래밍과 함수형(선언형) 프로그래밍
* **명령형 프로그래밍**: **문법**과 **언어**에 초점이 맞춰진 패러다임. 
절차형(코드 순서대로 실행)과 객체지향형(Class라는 개념 포함 - C, C++, Java 등 언어)

* 함수형 프로그래밍: **함수의 구성**에 초점이 맞춰진 패러다임
  1. 순수 함수: 동일한 입력에 항상 동일한 출력
  2. 고차 함수: 함수 중첩을 통해 여러 함수를 하나의 동작으로 묶은 함수

## 함수형 프로그래밍

* 각 함수의 **입력**에 따라 동작하는 **함수**를 생성하는 형태
  * 함수를 여러 번 호출해도 동일한 결과 반환
  * 함수 외부의 데이터 변경 불가 - 캐시와 테스트 가능한 코드 

  ```js
  // 의존적(percentValue) 
  let percentValue = 5;
  let calculateTax = (value) => {
    return value / 100 * (100 + percentValue)
  }

  // 독립적 => 함수형
  let calculateTax = (value, percentValue) => {
    return value / 100 * (100 + percentValue)
  }
  ```

### 참조 투명성

* 모든 함수는 동일한 입력에 대해 동일한 값을 반환한다는 속성

```js
const getAge = (age) => age;
```

> * 락 메커니즘(lock mechanism): 함수의 참조 투명성에 따라 함수는 각 인자의 입력에만 의존한다. 

### 선언형, 추상화

* 함수형은 *선언 가능*하고, *추상화된* 코드를 작성에 관한 속성

* **명령형**(imperative): 컴파일러에게 특정 작업을 어떻게 해야 하는지 알려주는 방식

```js
// 명령형
// '배열의 길이를 가져온 후 배열을 반복하면서 인덱스를 사용해 배열의 각 요소를 얻어오라'
let array = [1, 2, 3];
for(let i = 0; i < array.length; i++) {
  console.log(array[i]); // 1, 2, 3
}
```

* 선언형(declarative): 컴파일러에게 어떤 것이 필요한지가 중요한 방식. 
  * '어떻게'는 일반적인 함수 내에 **추상화** (재사용)

```js
// 선언형
let array = [1, 2, 3];
array.forEach((element) => console.log(element)); // 1, 2, 3
```



