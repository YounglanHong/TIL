# Regular Expression(정규 표현식)

* **정규 표현식**은 검색 패턴을 정의한 문자열들의 집합입니다. 

## RegExp 객체

[RegExp](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp)로 정규표현식을 생성합니다. 

  ```js
    RegExp(pattern[, flag]);

    // RegExp(/[abc]/, 'i');
  ```

  * flag
    |문자|설명|
    |------|---|
    |`i`|대소문자 구분 없이 문자열 검색|
    |`g`|전역적으로 일치하는 문자열 검색|
    |`m`|여러줄의 문자 검색|


## RegExp 관련 메소드

  * RegExp

    1. [`exec()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec): 문자열 내에 일치하는 문자열 탐색. 일치하는 첫째 문자열 반환

    2. [`test()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test): 문자열 내에 일치하는 문자열 탐색. `true` or `false` 반환
      
  * String

    1. [`match()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match): 일치하는 **문자열** 모두 반환

    2. [`search()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/search): 일치하는 문자열의 **인덱스** 반환

    3. [`replace()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace): 일치하는 문자열을 교체한 새로운 문자열 반환

    4. [`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split): 일치하는 문자열을 기준으로 기존 문자열 분할하여 배열로 반환

## 정규 표현식 - 기본

  |문자|설명|
  |------|---|
  |`^`|문자열 또는 줄의 시작|
  |`$`|문자열 또는 줄의 끝|
  |`a*`|a가 0개 이상|
  |`a+`|a가 1개 이상|
  |`\d`|모든 숫자|
  |`[abc]`|괄호 안 문자 탐색|
  |`[^abc]`|괄호 안 문자 제외한 모든 문자 탐색|
  |`[0-9]`|괄호 안 숫자 탐색|
  |`[^0-9]`|괄호 안 숫자 제외한 모든 숫자 탐색|
  |`(x\|y)`|x 또는 y 탐색|


## 정규 표현식 - 예시

  1. 숫자를 포함하는 문자: `/\d+/`

  2. 숫자만 포함하는 문자: `/^\d+$/`

  3. 부동소수점 문자: `/^[0-9]*.[0-9]*[1-9]+$/`

  ```js
  let regEx = /^[0-9]*.[0-9]*[1-9]+$/;

  regEx.test("10");    // false
  regEx.test("10.1");  // true
  regEx.test("0.01");  // true
  ```

  4. 숫자와 알파벳만 포함하는 문자: `/[a-zA-Z0-9]/`

  5. URL 쿼리 문자열: `([^?=&]+)(=([^&]*))`

  ```js
  const URL = "https://your.domain/product.aspx?category=1&product_id=1000&query_id=book";

  URL.match("([^?=&]+)(=([^&]*))",  "g")
  // ["category=1", "category", "=1", "1"]
  ```

  ***


## Reference

[정규 표현식 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions)

<자바스크립트로 하는 자료구조와 알고리즘> by.배세민