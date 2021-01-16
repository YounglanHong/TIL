# CSS Layout

> [Responsive Web Layout with CSS Grid (INNOQ Technology Lunch)](https://www.youtube.com/watch?v=aDTA0Aaxyx4) 를 시청하고 Flexbox, CSS Grid, CSS 속성과 `position: sticky;` 관련 내용을 정리한 노트입니다.

## CSS

- `:root`: 전역 CSS 변수 선언

  1. 색상(colors)
  2. 간격(spacing)

- `sr-only` & `hide` class 설정

- CSS 초기화(CSS Reset): ul, ol, heading etc.

- 상대 단위

  1. `em`: 부모 요소의 글꼴 크기
  2. `rem`: root 요소의 글꼴 크기(기본값;16px)

- `position: sticky;`

  💡이전 IE를 제외한 모든 주요 최신 브라우저에서 지원.

  (Safari 브라우저의 경우 `-webkit` 접두사 추가)

  ```css
  .site-search {
    position: sticky;
    top: 0;
  }
  ```

### CSS Grid

#### 1️⃣ Explicit Grid(명시적 그리드)

- HTML: semantic 요소

  ```html
  <div class="container">
    <header>Header</header>
    <nav>Nav</nav>
    <section>Section</section>
    <aside>Aside-right</aside>
    <footer>Footer</footer>
  </div>
  ```

- CSS: grid 설정

  1. `display: grid;` 설정
  2. `grid-gap` 사용하여 각 그리드 간 거리 조절
  3. semantic 요소 별로 `grid-area` 할당
  4. `grid-area` 이름으로 `grid-template-areas` 이용해 구조 할당

  ```css
  /* grid container init */
  .container {
    display: grid;
    grid-gap: 5px;
    grid-template-areas:
      "header header header"
      "nav section aside"
      "footer footer footer";
  }
  /* Grid area */
  header {
    grid-area: header;
  }
  nav {
    grid-area: nav;
  }
  section {
    grid-area: section;
  }
  aside: {
    grid-area: aside;
  }
  footer {
    grid-area: footer;
  }
  ```

- grid 영역 지정

  - `grid-columns`, `grid-rows`: 각 셀의 영역 지정

    1. 시작번호 / 끝번호(1 / 3)
    2. ~ 범위의 셀 차지(span 2)

    ```css
    .content > :first-child {
      grid-column: span 2; /* OR (1 / 3) */
      grid-row: span 2;
      background-color: burlywood;
    }
    ```

#### 2️⃣ Implicit Grid(암시적 그리드)

- 행,열의 개수를 크기에 맞게 자동으로 조정

  💡반응형 그리드: 행,열과 아이템 개수가 불명확한 경우 유용

  ```css
  .content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, auto));
    gap: var(--space-sm);
  }
  ```

---

## HTML

- `nav`(Navbar) 구조

```html
<nav>
  <ul>
    <li>
      <a href="#"></a>
    </li>
  </ul>
</nav>
```

### [CustomElement](https://developer.mozilla.org/ko/docs/Web/Web_Components/Using_custom_elements)

: HTML tag와 JS Class를 연동하여 사용 가능

(※ CSS_Layout.js 파일 참고)

---

## Reference

[TailwindCSS - Colors](https://tailwindcss.com/docs/customizing-colors)

[CustomElement | Web Components](https://kyu.io/%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B82-%EC%BB%A4%EC%8A%A4%ED%85%80-%EC%97%98%EB%A6%AC%EB%A8%BC%ED%8A%B8/)

[Web Components #1](https://github.com/WICG/webcomponents)

[Web Components #2](https://d2.naver.com/helloworld/188655)

[CSS Grid #1](https://blog.sonim1.com/194)

[CSS Grid #2](https://heropy.blog/2019/08/17/css-grid/)

[CSS Grid #3](https://studiomeal.com/archives/533)
