# Clean Code

> 🔗 [Junior Vs Senior Code - How To Write Better Code](https://www.youtube.com/watch?v=g2nMKzhkvxw)를 보고 정리한 내용입니다. 

## 1. Logic(로직)

### Step 1️⃣

```js
// 매개변수가 음수일 땐 인자 양옆에 괄호 함께 반환하는 함수
// step 1
function toAccount(n) {
  if(n < 0) {
    return '(' + Math.abs(n) + ')'
  } else if(n >= 0) {
    return n
  }
}
```

### Step 2️⃣

```js
// step 2
// 함수명과 변수명 수정 
function numberToAccountingString(number) {
  // undefined, null 고려
  if(number !== null) {
    if(number < 0) {
      // template literal
      return `(${Math.abs(number)})` // 4) 타입 - 문자열
    } else {
      return number.toString() // 타입 - 문자열
    }
  }
}
console.log(numberToAccountingString(undefined))
```

### Step 3️⃣

```js
// step 3
// 보호 구문(Guard Clauses) - 중첩 구문 X -- 코드 가독성, 간결성
// https://blog.webdevsimplified.com/2020-01/guard-clauses/
// https://refactoring.com/catalog/replaceNestedConditionalWithGuardClauses.html

function numberToAccountingString(number) {
  // Guard Clauses
  if(number == null) return
  if(number < 0) return `(${Math.abs(number)})`
  return number.toString()
}

console.log(numberToAccountingString(undefined))
```

***

## 2. Variable Manipulation(매개변수 조작)

### Step 1️⃣

```js
// step 1
function caculateTotal(items, options) {
  let t = 0
  items.forEach(i => {
    t += i.price * i.quan
  })

  t = t - t * (options.dis || 0)
  t = t * 1.1
  t = t + (options.ship || 5)  // 🐛 (0 || 5) === (false || 5) === 5
  return t
}

const testItems = [
  { price: 15, quan: 2 },
  { price: 20, quan: 1 },
  { price: 5, quan: 4 },
]

console.log(caculateTotal())   // Error
console.log(caculateTotal(testItems, {})) // Error
console.log(caculateTotal([], {})) // Wrong value // 5
console.log(caculateTotal(testItems, { ship: 0 })) // Wrong value // 82
```

### Step 2️⃣

```js
// 상수(const) 선언
const TAX_RATE = 1.1
const SHIPPING_DEFAULT = 5

// 매개변수에 기본값 추가({})
funtion caculateTotal(items, options = {}) {
  // 보호 구문(엣지 케이스 처리)
  if(items == null || items.length === 0) return 0

  // 변수명 수정
  let total = 0
  items.forEach(item => {
    total += item.price * item.quantity
  })

  total = total - total * (options.discount || 0)
  total = total * TAX_RATE
  // 배송비 체크
  if(options.shipping !== 0) {
    total = total + (options.shipping || SHIPPING_DEFAULT)
  }
  return total
}

const testItems = [
  { price: 15, quantity: 2 },
  { price: 20, quantity: 1 },
  { price: 5, quantity: 4 },
]
```

### Step 3️⃣

```js
const TAX_RATE = 1.1
const SHIPPING_DEFAULT = 5

// 구조 분해 할당(Destructuring)
// https://www.youtube.com/watch?v=NIq3qLaHCIs
funtion caculateTotal(items, { shipping = SHIPPING_DEFAULT, discount = 0 } = {}) {
  if(items == null || items.length === 0) return 0

  // 리듀서 함수 사용
  // https://www.youtube.com/watch?v=R8rmfD9Y5-c&t=387s
  const itemCost = items.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const discountRate = 1 - discount
  // 상수(const) 사용 - 중간 계산(임시 변수) 감소
  return itemCost * discountRate * TAX_RATE + shipping
}

const testItems = [
  { price: 15, quantity: 2 },
  { price: 20, quantity: 1 },
  { price: 5, quantity: 4 },
]

console.log(caculateTotal())   
console.log(caculateTotal(testItems, {})) 
console.log(caculateTotal([], {})) 
console.log(caculateTotal(testItems, { ship: 0 })) 
```
