# Sass(SCSS)란? 

## 기존 CSS의 한계

- 선택자(Selector)의 불필요한 사용

- 연산 · 조건 · 반복문 불가

- CSS 코드의 길이 · 복잡성 증가

## CSS Preprocessor(전처리기)

- CSS 동작 전 사용하는 기능. 전처리기로 작성하고 CSS로 `컴파일(Compile)`하여 동작

  ```scss
  // styles.scss
  $primary-color: #fff;

  * {
    margin: 0 auto;
    box-sizing: border-box;
    color: $primary-color;
  }
  ```

  ```css
  /* styles.css(compiled) */
  * {
  margin: 0 auto;
  box-sizing: border-box;
  color: #fff; }
  ```

- CSS에 프로그래밍적인 요소(변수, 함수, 상속 및 중첩 등)를 접목하여 CSS 문서 작성에 도움

  - 장점: 재사용성, 내장 함수 사용(생산성 증가), 유지 관리 용이

  - 예시) Sass(SCSS), Less, Stylus 등

## Sass와 SCSS의 차이점

- SCSS가 Sass의 상위 집합(Superset)

  - SCSS가 기존 CSS 문법과 더 유사(`{}`, `;` 존재)

## Sass(SCSS)의 사용

1. 변수: `$` 기호를 통해 생성

    ```scss
    $primary-color: #fff;

    body {
      background-color: $primary-color;
    }
    ```

2. 중첩(Nesting): 선택자(Selector) 중첩 가능

    ```scss
    nav {
      i {
        width: 100%;
        height: 100%;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        a {
          text-decoration: none;
        }
      }
    }
    ```

3. 모듈(Module): CSS snippet을 다른 SCSS 파일에서 사용 가능

    ```scss
    // _module.scss
    $primary-color: #fff;

    * {
      margin: 0;
      box-sizing: border-box;
    }

    // styles.scss
    // No file extension(파일 확장자)
    @ use 'module';

    .container {
      background-color: module.$primary-color;
    }
    ```
4. 믹스인(Mixins): 재사용할 CSS 선언을 그룹화하여 사용

    ```scss
    @mixin wh($width, $height) {
      width: $width;
      height: $height;
    }

    img {
      @include wh(100%, 50%);
    }
    ```

5. 상속(Extend/ Inheritance)

    ```scss
    %centering {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .p1 {
      @extend %centering;
      color: #ff622b; 
    }

    .p2 {
      color: #106b06;
    }
    ```

6. 연산자(Operators)

  ```scss
  .container {
    width: 100%;
  }

  article {
    float: left;
    width: 600px / 960px * 100%;
  }

  aside {
    float: right;
    width: 300px / 960px * 100%;
  }
  ```

***

### Reference

[Sass Doc](https://sass-lang.com/guide)

[Sass(SCSS) 완전 정복 | Heropy](https://heropy.blog/2018/01/31/sass/)