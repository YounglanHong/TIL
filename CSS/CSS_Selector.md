# CSS selector

- **CSS selector**: CSS 규칙의 첫 부분으로, 웹 페이지에 CSS 속성 값을 적용하기 위해 어떤 **HTML 요소(태그)** 를 선택해야 하는지 알려 줍니다.

  ```jsx
  h1 {
  	color: blue;
    background-color: yellow;
  }
  ```

- **element(요소)**: 여는 태그,내용, 닫는 태그를 포함한 하나의 덩어리

  ```jsx
  <div id="id"> 요소 </div>
  ```

---

# id & class selector

- `id` 선택자는 어떤 요소에 대해 **고유한 특성**을 정의하고, `class` 선택자는 어떤 분류 안에 **포함된 요소의 특성**을 정의하기 때문에, 문서 내에서 **한 번 적용**될 스타일은 `id`, **여러 번 반복**될 스타일은 `class`를 사용합니다.
- `id` 는 `#`를 사용하여 표시하고, `class` 는 `.` 를 사용하여 표시합니다.
- `id`는 속성 값을 하나만 가지지만, `class` 는 여러 개 가질 수 있습니다.

  ```jsx
  <div id="id_selector">id_selector</div>
  <p class="class_selector class_selector_bg">class_selector_&bg</p>
  ```

* `id`가 `class` 선택자 보다 우선순위가 높습니다. 우선으로 적용되어야 할 스타일을 `id` 를 사용하여 정의하는 것이 좋습니다.

  ```jsx
  // CSS
  #id_selector {
  color: green;
  }

  .class_selector {
  color: blue;
  }

  // HTML
  <span id="id_selector"
  class="class_selector">우선순위</span>
  ```

---

(블로깅주소: https://www.notion.so/Front-end-12-23-id-class-selector-3cd338f06e0240a997ed81f27550d355)
