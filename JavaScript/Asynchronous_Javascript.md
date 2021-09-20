# Asynchronous JavaScript(비동기 자바스크립트)

> 🔗 [JavaScript Promises](https://www.youtube.com/watch?v=DHvZLI7Db8E)와 [JavaScript Async / Await](https://www.youtube.com/watch?v=V_Kr9OSfDeU)을 보고 정리한 내용입니다. 


## 1. Promise

* 콜백 방식과 비슷하지만, `then`과 `catch`를 사용하여 더 간결하게 표현할 수 있다.

```js
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if(a === 2) {
    // resolve
    resolve("Success");
  } else {
    // reject
    reject("Failed");
  }
})

// resolve
p.then((message) => {
  console.log("This is in the then " + message);
  // reject
}).catch((message) => {
  console.log("This in in the catch " + message);
})

// This is in the then Success
```

* 비동기 데이터 처리와 같이 백그라운드에서 시간이 걸리는 작업에 **Promise**를 사용할 수 있다.
  * **Promise**는 계속 중첩되는 콜백 방식의 단점(콜백 지옥)을 해결할 수 있다.

#### 1️⃣ Callback

```js
const userLeft = false;
const userWatchingOtherChannel = false;

function watchTutorialCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "User Left -",
      message: "🙁"
    })
  } else if (userWatchingOtherChannel) {
    errorCallback({
      name: "userWatchingOtherChannel -",
      message: "myChannel < otherChannel"
    })
  } else {
    callback("Thumbs up and Subscribe")
  }
}

watchTutorialCallback((message) => {
  // 첫번째 콜백(성공)
  console.log("Success: " + message)
}, (error) => {
  // 두번째 콜백(에러)
  console.log("Error: " + error.name + " " + error.message)
})
```

#### 2️⃣ Promise

```js
const userLeft = false;
const userWatchingOtherChannel = false;

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left -",
        message: "🙁"
      })
    } else if (userWatchingOtherChannel) { 
      reject({
        name: "userWatchingOtherChannel -",
        message: "myChannel < otherChannel"
      })
    } else {
      resolve("Thumbs up and Subscribe")
    }
  })
}

watchTutorialPromise().then((message) => {
  // resolve
  console.log("Success: ")
  return message
}).then((message) => {
  console.log(message + " 😀")
}).catch((error) => {
  // reject
  console.log("Error: " + error.name + " " + error.message)
})
```


### Promise 이용하기

* 항상 `resolve` 하는 다수의 `Promise`의 경우

1. `Promise.all`: 모든 `Promise`가 완료된 후 호출

```js
const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded")
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded")
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded")
})

Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages) => {
  console.log(messages) // 모든 배열 형태로 메세지 출력
})

//  ["Video 1 Recorded", "Video 2 Recorded", "Video 3 Recorded"]
```

2. `Promise.race`: 첫번째 `Promise`가 완료되자마자 호출

```js
const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded")
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded")
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded")
})

Promise.race([
  // 첫번째 요소인 recordVideoOne이 완료되면 호출
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((message) => {
  console.log(message) // 하나의 메세지 출력
})

//  Video 1 Recorded
```

***

## 2. Async/ Await

> `Async/ Await`은 Promise를 더 편리하게(동기적으로) 사용하기 위해 만들어진 문법적인 설탕

#### 1️⃣ Promise

```js
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`)
    if(location === "Google") {
      resolve("Google says hi")
    } else {
      reject("We can only talk to Google")
    }
  })
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response")
    resolve(`Extra Information + ${response}`)
  })
}

const LOCATION = "Google"; 
// const LOCATION = "Facebook";

makeRequest(LOCATION).then(response => {
  console.log("Response Received")
  // console.log(response) // Google says hi
  return processRequest(response)
}).then(processResponse => {
  console.log(processResponse)
}).catch(error => {
  console.log(error)
})

/* resolve
Making Request to Google
Response Received
Processing response
Extra Information + Google says hi
*/

/* reject
Making Request to Facebook
We can only talk to Google
*/
```

#### 2️⃣ Async/ Await

🔑 Async/ Await 유의점

1. 항상 코드를 **함수**로 감싸고 함수 앞에 **`async`** 키워드를 추가한다.
2. 비동기 코드 앞에 **`await`** 키워드 사용하여 `Promise`의 **결과**를 반환한다.

```js
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`)
    if(location === "Google") {
      resolve("Google says hi")
    } else {
      reject("We can only talk to Google")
    }
  })
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response")
    resolve(`Extra Information + ${response}`)
  })
}

// const LOCATION = "Google"; 
const LOCATION = "Facebook";

async function doWork() {
  try {
    const response = await makeRequest(LOCATION) // Google says hi
    console.log("Response Received")
    const processResponse = await processRequest(response)
    console.log(processResponse)
  } catch (error) {
    console.log(error)
  }
  
}

doWork()

/* resolve
Making Request to Google
Response Received
Processing response
Extra Information + Google says hi
*/

/* reject
Making Request to Facebook
We can only talk to Google
*/

```