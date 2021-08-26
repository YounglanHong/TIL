# Javascript FE Framework

> * Vue.js, React.js, Angular.js 등은 사용자 인터페이스(UI)를 **단일 페이지 애플리케이션(SPA)** 방식으로 개발하는 프론트엔드 프레임워크

## 단일 페이지 애플리케이션(Single Page Application) 
* 초기 로딩 시 웹 사이트 전체에 필요한 자바스크립트, CSS, 이미지 파일 등 모든 웹 자원을 서버로부터 불러와서 로딩합니다. 

  * 장점: 페이지 이동 시 로딩된 페이지에서 필요한 부분만 변경하여 속도가 빠르고, 서버와 통신을 최소화해 웹 자원을 효율적으로 이용할 수 있습니다. 
  * 단점: 초기 로딩 시 당장은 불필요한 모든 웹 자원까지 불러와서 화면 로딩 속도가 비교적 느립니다. 

## Angular

* 특징: Two-way(양방향) 데이터 바인딩
> * Two-way(양방향) 데이터 바인딩은 데이터와 웹 화면의 HTML DOM이 서로 연결되어 한 쪽의 변경이 다른 쪽에 자동 반영되는 방식입니다.

* 단점: 성능(속도) 저하 - HTML DOM의 복잡도 증가하여 무겁고 느려지는 문제가 발생합니다.

## React

* 특징: Virtual DOM(가상 돔) 
> * Virtual DOM(가상 돔)은 상태 변경 시 영향 받는 돔 노드를 직접 처리하지 않고 가상 돔을 갱신한 후 실제 돔과 동기화하는 방식입니다. 

## Vue

* 특징

  * MVVM(Model-View-ViewModel) 패턴: 백엔드 로직과 클라이언트 마크업(View, UI)을 분리하여 개발하기 위한 패턴입니다.

    <a href="https://imgur.com/sAIH1oj"><img src="https://i.imgur.com/sAIH1oj.png" title="source: imgur.com" /></a>

  * 컴포넌트: 재사용성을 고려한 화면(View)을 이루는 작은 단위입니다. `.vue` 파일 하나가 하나의 컴포넌트입니다. 

  
