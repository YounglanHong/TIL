# 💡React State Tips 

> 🔗 [Useful lessons I've learned about **Handling react state**](https://twitter.com/housecor/status/1437765667906854915?s=11)를 보고 정리한 글입니다. 

### 1. 상태(state)를 다루는 방법과 각각 필요한 상황을 알고 있다.
 ![react-state](https://user-images.githubusercontent.com/53158305/134464915-e5424192-8e92-46fa-8e8e-cfed2d102dc3.jpeg)
 
### 2. 클래스 컴포넌트는 더이상 사용하지 않는다.

#### ⚙️ 함수형 컴포넌트의 장점
 * 코드 양 감소, hooks 사용, 이해 간단함, `this` 키워드 없음
 
### 3. 기존 상태/속성(props)로부터 **파생된 상태**(derived state)를 사용한다.
  ![derived-state](https://user-images.githubusercontent.com/53158305/134468703-d78f125f-00b8-439c-bc76-ef320a0cb88a.jpeg)

 ```js
  export default function Checkout() {
    const { dispatch } = useCart();
    const [address, setAddress] = useState(emptyAddress);
    const [satus, setStatus] = useState(STATUS.IDLE);
    const [saveError, setSaveError] = useState(null);
    const [touched, setTouched] = useState({});

    // derived state
    const errors = getErrors(address);
    const isValid = Object.keys(errors).length === 0;

    //...
  }
 ```
 
### 4. 🔥 리액트 렌더링 시점과 렌더링 방지법을 알고 있다.
 ![react-render](https://user-images.githubusercontent.com/53158305/134468994-1d58ed06-ffb6-4e72-8c6b-52ce0bfbb689.jpeg)
 
### 5. 대부분의 상태는 리모트이다.
 * `useApi` 같은 custom hook, react-query, swr 등을 사용하여 리모트 상태를 간소화
    ```js
    import React from "react";
    import useFetch  from "./useFetch";

    export default function App() {
      const { data: products, loading, error } = useFetch("products");
      if(loading) return "Loading...";
      if(error) throw error;
      return // JSX
    }
    ```

### 6. 로컬 상태부터 시작해라. 글로벌 상태는 최후의 수단이다.
 * 속성(props) 전달 과정이 복잡해지면, Context나 Redux 사용을 고려해볼 수 있다.

### 7. Lodash, Underscore, Ramda를 사용하지 말고, `immutableJS`를 받아들여라.

#### ⚙️ 자바스크립트에서 불변 데이터를 다루는 방식
 * `Object.assign`
 * Spread syntax: `{ ...myObj }`
 * Immutable array methods: `.map`, `.filter`, `.find`, `.some`, `.every`, `.reduce` 등
 
### 8. 폼(form) 라이브러리는 필요 없다. **패턴**이 필요하다.
 ![form-pattern](https://user-images.githubusercontent.com/53158305/134472080-f65e2252-d2bb-4760-bb77-0b05342a3ddd.jpeg)
 
### 9. 🔥 여러 상태는 열거형(enum)으로 작성한다.
 ```js
 // Using seperate state to track the form's status 👎🏻 
 const [submitting, setSubmitting] = useState(false);
 const [submitted, setSubmitted] = useState(false);
 const [completed, setCompleted] = useState(false);
 
 // Using a single status enum instead 👍
 const STATUS = {
   IDLE: "IDLE",
   SUBMITTING: "SUBMITTING",
   SUBMITTED: "SUBMITTED",
   COMPLETED: "COMPLETED",
 };
 
 const [status, setStatus] = useState(STATUS.IDLE);
 ```


