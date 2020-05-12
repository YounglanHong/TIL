- 리액트는 **[사용자 인터페이스](https://medium.com/user-x/x1-ui%EB%A5%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-67c41a117a4a)(UI)**를 만들기 위한 **JavaScript 라이브러리** 입니다.

- 현재 가장 주목받는 프론트엔드 프레임워크는 리액트, 앵귤러(Angular), 뷰(Vue) 입니다. 이 중 가장 사용자가 많은 프레임워크는 리액트입니다.

  (참고: Angular는 화면 출력, 형상 관리부터 배포까지 많은 기능을 포함한 완성형 프레임워크를 지향합니다. Vue는 가장 최근에 등장한 프레임워크로, 다른 프레임워크의 장점은 흡수하고 단점은 보완했습니다.)

  ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f19203c3-a5e0-40a7-bf20-e3ceff957bc4/_2020-05-04__12.14.06.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f19203c3-a5e0-40a7-bf20-e3ceff957bc4/_2020-05-04__12.14.06.png)

  [https://www.npmtrends.com/@angular/core-vs-angular-vs-react-vs-vue](https://www.npmtrends.com/@angular/core-vs-angular-vs-react-vs-vue)

  - **리액트의 특징**

    - **재사용 · 유지보수**에 용이한 **컴포넌트** 구조로 이루어져 있어 효율적
      리액트는 화면 출력에 특화된 프레임워크로 **컴포넌트(component)**라는 독립적인 코드 블록을 조합하여 효율적으로 화면을 구성합니다. **컴포넌트**는 데이터(props, state)를 입력 받아 DOM Node를 출력하는 "함수"의 역할을 합니다.

      ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/94841309-a76f-4ebb-8ea2-9c05bc10eb94/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/94841309-a76f-4ebb-8ea2-9c05bc10eb94/Untitled.png)

    - **Virtual DOM**

      Virtual DOM을 통한 rendering으로 화면 출력 속도를 높이고, 코드의 복잡성을 줄였습니다.
      (변화를 Virtual DOM에 먼저 적용하고, Real DOM과 비교를 통해 변화된 부분만 render하여 연산을 줄여 줍니다.)

      ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0a782f69-ff44-46a5-ae14-196a10853fb3/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0a782f69-ff44-46a5-ae14-196a10853fb3/Untitled.png)

      [https://www.devbridge.com/articles/react-a-front-end-developers-perspective/](https://www.devbridge.com/articles/react-a-front-end-developers-perspective/)

    - **단방향 데이터 바인딩**

      부모 컴포넌트로부터 자식 컴포넌트로 props전달.
      부모 컴포넌트의 데이터에 접근하려면 부모로부터 함수를 전달 받아서 사용
