# Clean Code

> 🔗 [Junior Vs Senior Code - How To Write Better Code - Part 2](https://www.youtube.com/watch?v=5B587bQ-TNg)를 보고 정리한 내용입니다. 
> 🔗 [Noob-Vs-Pro-Code - Github](https://github.com/WebDevSimplified/Noob-Vs-Pro-Code)

## 3. Async/Await

### Step 1️⃣

* 콜백 함수 - 콜백이 계속 중첩되는 🔥콜백 지옥🔥

```js
const readline = require("readline")
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

readlineInterface.question("What is your name? ", name => {
  readlineInterface.question("What is your job? ", job => {
    readlineInterface.question("How old are you? ", age => {
      console.log("Hello " + name + ". You are a " + age + " year old " + job + ".")
      readlineInterface.close()
    })
  })
})
```

### Step 2️⃣

* Async/Await - 콜백이 중첩되는 문제 해결

```js
const readline = require("readline")
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function main() {
  const name = await askQuestion(realineInterface, "What is your name? ")
  const job = await askQuestion(realineInterface, "What is your job? ")
  const age = await askQuestion(realineInterface, "How old are you? ")

  console.log("Hello " + name + ". You are a " + age + " year old " + job + ".")
  readlineInterface.close()
}

main()

function askQuestion(readlineInterface, question) {
  return new Promise(resolve => {
    readlineInterface.question(question, answer => {
      resolve(answer)
    })
  })
}
```

### Step 3️⃣

* `readlineInterface` 리팩토링, 함수 분리 - 모듈화

```js
// async.js
const askQuestion = require("./askQuestion")

async function main() {
  const name = await askQuestion("What is your name? ")
  const job = await askQuestion("What is your job? ")
  const age = await askQuestion("How old are you? ")

  console.log(`Hello ${name}. You are a ${age} year old ${job}.`)
}

main()

// askQuestion.js
const readline = require("readline")

function askQuestion(question) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  return new Promise(resolve => {
    readlineInterface.question(question, answer => {
      resolve(answer)
      readlineInterface.close()
    })
  })
}

module.exports = askQuestion
```


***

## 4. Single Responsibility Principle(SRP, 단일 책임 원칙)

> [SOLID: Single Responsibility Principle in JavaScript](https://dev.to/carstenbehrens/single-responsibility-principle-in-javascript-1mk1)
> 
> "**class(a.k.a module)** 은 오직 **한 가지 이유** 때문에 변경되어야 한다."  
>                                            - Robert C. Martin
> * SRP는 객체 지향 언어에 국한되어 있지 않고, 프로토타입 상속을 하는 자바스크립트에도 적용된다.
> * 하나의 class는 오직 한 가지 책임만 가져야 한다(**단일 책임 원칙**)
>   * Employee class는 SRP 원칙에 따라 여러 class로 분리되어야 한다.
> 
>   ```js
>   // 나쁜 예시
>   // 💣 함수 변경 시 class 내부의 코드 변경 해야 함
> 
>   class Employee {
>     calculatePay() {
>       //...
>     }
>     reportHours() {
>       //...
>     }
>     saveToDB() {
>       //...
>     }
>   }
>   ```

### Step 1️⃣

* *의도하지 않은* ***🚫side effects🚫*** 존재

```js
// users.js
function createUser(user) {
  return {
    ...user,
    id: Date.now(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

function updateUser(user) {
  return {
    ...user,
    updatedAt: new Date()
  }
}

module.exports = { createUser, updateUser }

// main.js
const { updateUser, createUser } = require('./api/users')

function saveUser(user) {
  // 🚫 validation
  // 🚫 error printing

  const errors = []
  if (user.username) {
    if (user.username.length < 3) {
      errors.push("Username must be 3 or more characters")
    }
  } else {
    errors.push("Username is required")
  }

  if (user.password) {
    if (user.password.length < 8) {
      errors.push("Password must be 8 or more characters")
    }
  } else {
    errors.push("Password is required")
  }

  if (errors.length > 0) {
    errors.forEach(error => console.error(error))
    return
  }

  // save users
  if (user.id == null) {
    console.log('Created User')
    createUser(user)
  } else {
    console.log('Updated User')
    updateUser(user)
  }
}

const user = {
  username: '',
  password: 'password'
}

saveUser(user)
```

### Step 2️⃣

* 기능별 함수 분리(`validateUser`, `saveUser`)
* 💣 validation 관련 코드 반복(비효율적)
 
```js
// main.js
const { updateUser, createUser } = require('./api/users')

// 1️⃣
function saveUser(user) {
  if(user.id == null) {
    console.log("Created User")
    createUser(user)
  } else {
    console.log("Updated User")
    updateUser(user)
  }
}

// 2️⃣
function validateUser(user) {
  return [
    ...validateUsername(user.username),
    ...validatePassword(user.password)
  ]
}

// --- helper function (returns an array of errors) ---
function validateUsername(username) {
  const errors = []
  if(!username) errors.push("Username is required")
  if(username != null && username.length < 3) {
    errors.push("Username must be 3 or more characters") 
  }
  return errors
}

function validatePassword(password) {
  const errors = []
  if(!password) errors.push("Password is required")
  if(password != null && password.length < 8) {
    errors.push("Password must be 8 or more characters") 
  }
  return errors
}
// -----------------------------------------------------

const user = {
  username: 'USER',
  password: 'password'
}

// 2️⃣ 
const errors = validateUser(user)
if(errors.length > 0) {
  errors.forEach(error => console.error(error))
  return
}

// 1️⃣
saveUser(user)
```

### Step 3️⃣

* 🔑 SRP(단일 책임 원칙) 충족하도록 validation 관련 **코드 분리**

```js
// validation.js
// 1️⃣
function validationMessages(validations, object) {
  return Object.entries(validations).reduce((errors, [property, requirements]) => {
    errors[property] = []
    if (requirements.required) {
      const errorMessage = validateRequiredMessage(object[property])
      if (errorMessage) errors[property].push(errorMessage)
    }

    if (requirements.length) {
      const errorMessage = validateLengthMessage(object[property], requirements.length)
      if (errorMessage) errors[property].push(errorMessage)
    }

    return errors
  }, {})
}

// --- helper function (returns error messages) ---
function validateLengthMessage(value, length) {
  if (value == null) return
  if (value.length >= length) return

  return `must be ${length} or more characters` 
}

function validateRequiredMessage(value) {
  if (value) return

  return 'is required' 
}
// ---------------------------------------------------

// 2️⃣ 
function printErrors(errors) {
  Object.entries(errors).forEach(([property, messages]) => {
    messages.forEach(message => {
      console.error(`${property} ${message}`)
    })
  })
}

module.exports = {
  validationMessages,
  printErrors
}

// main.js
const { updateUser, createUser } = require('./api/users')
const { validationMessages, printErrors } = require('./pro/validation')

function saveUser(user) {
  if (user.id == null) {
    console.log('Created User')
    createUser(user)
  } else {
    console.log('Updated User')
    updateUser(user)
  }
}

function validateUser(user) {
  // hash of validations
  const validations = {
    username: {
      required: true,
      length: 3
    },
    password: {
      required: true,
      length: 8
    }
  }

  const errors = validationMessages(validations, user)

  return {
    valid: Object.values(errors).every(messages => messages.length === 0),
    errors: errors
  }
}

const user = {
  id: 1,
  username: 'USER',
  password: 'password'
}

const { errors, valid } = validateUser(user)
if (valid) {
  saveUser(user)
} else {
  printErrors(errors)
}

```