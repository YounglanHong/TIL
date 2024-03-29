# React State and Props

- `props`는 상위 컴포넌트에서 하위 컴포넌트로 전달되는 **읽기 전용** 데이터입니다. 컴포넌트 내부에서 props 값을 *직접 수정할 수 없다*는 특징이 있습니다.
- `state` 는 컴포넌트의 상태를 저장하고 변경할 수 있는 데이터입니다. 보통 버튼을 클릭하거나 값을 입력하는 등의 이벤트와 함께 사용됩니다.
  - `state`는 생성자(constructor)에서만 할당 할 수 있습니다.
  - `state` 는 `setState` 를 이용해 _수정할 수_ 있습니다. (Front-end 12-11과 연결)
- `props`와 `state` 모두 일반적인 **자바스크립트 객체**입니다. 두 객체 모두 render의 결과물에 영향을 줄 수 있는 정보를 가지고 있지만, 컴포넌트의 기능적인 측면에서는 약간 다릅니다.
  - `props`는 함수의 **매개변수**(parameter)처럼 컴포넌트**_에_** 전달되는 반면, `state`는 **함수 내에 선언된 변수**와 비슷하게 컴포넌트 **_안에서_** 관리됩니다.
