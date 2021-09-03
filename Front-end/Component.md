# 프론트엔드 컴포넌트(Component)

> 🔗[<Vue.js 프로젝트 투입 일주일 전> | 고승원](http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9791165920760)와 [프론트엔드에서 Component란](https://www.youtube.com/watch?v=2C1tXVHu9XQ)를 참고한 글입니다. 

## 프론트엔드 컴포넌트란?

* View(HTML), Data, Code(JS)의 조합
  * **재사용**이 가능하다 - 다른 컴포넌트에서 `import`하여 사용할 수 있다. 
  * 화면에 보이는 페이지 그 자체 또는 페이지 내 특정 기능 요소일 수 있다. 

* Element 그룹을 반환하는 자바스크립트 함수 
  * 동적인 웹의 등장으로 사용자와 상호작용 증가, 웹의 복잡성 증가
  * 복잡한 웹을 작게 나누기 시작(전체 >>> element 그룹)
  
## 프론트엔드 컴포넌트 분리

### [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

<a href="https://imgur.com/MvwYyCF"><img src="https://i.imgur.com/MvwYyCF.png" title="source: imgur.com" /></a>

* 인터페이스 설계에 대한 화학적 접근

  1. [**Atom(원자)**](https://bradfrost.com/blog/post/atomic-web-design/#atoms): 인터페이스를 구성하는 최소단위의 블록
    * form, input, button 등 HTML tag
  
  2. [**Molecules(분자)**](https://bradfrost.com/blog/post/atomic-web-design/#molecules): 원자들을 하나의 단위로 동작시키는 UI 컴포넌트
    * form, input, button이 조합된 검색창 - **재사용** 가능
  
  3. [**Organisms(유기체)**](https://bradfrost.com/blog/post/atomic-web-design/#organisms): 유기체는 하나 이상의 책임을 갖거나 반복적인 원자, 분자의 조합
    * 로고, 검색창, 유저 정보 등이 존재하는 헤더 영역

  4. [**Template(템플릿)**](https://bradfrost.com/blog/post/atomic-web-design/#templates): 원자, 분자, 유기체 단계의 컴포넌트를 배치하는 레이아웃

  5. [**Page(페이지)**](https://bradfrost.com/blog/post/atomic-web-design/#pages): 실제 데이터를 템플릿에 전달하면 페이지 완성

* 단점: 5단계로 구성한 계층 때문에 소요 시간과 사이드 이펙트 증가, 템플릿과 페이지 단계 재사용 어려움

## 프론트엔드 컴포넌트 관리

### **디자인 시스템**

* **컴포넌트**와 **스타일**(색상, 아이콘, Typography, 애니메이션)을 관리하는 시스템
  * [Microsoft - Fluent UI](https://developer.microsoft.com/en-us/fluentui#/controls/web)

* 이점: 제약, 일관된 경험, 지속성