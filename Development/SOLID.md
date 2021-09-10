# 🪨 SOLID: 5 Principles of Object Oriented Design

> `S` - Single-responsiblity Principle   
> `O` - Open-closed Principle  
> `L` - Liskov Substitution Principle  
> `I` - Interface Segregation Principle  
> `D` - Dependency Inversion Principle

## 1. Single Responsibility Principle(SRP, 단일 책임 원칙)

> ✅ 모든 `class`(`function`,`module`)은 한 가지 기능을 가지고 있으며 오직 한 가지 이유로만 변화해야 한다.
a
* 🚫 SRP 위반 - 변화 가능한 이유가 하나 이상!

```js
class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories
    this.currentCalories = 0
  }
  // 🚫 track calorie
  trackCalories(calorieCount) {
    this.currentCalories += calorieCount
    if (this.currentCalories > this.maxCalories) {
      this.logCalorieSurplus()
    }
  }
  // 🚫 log calorie
  logCalorieSurplus() {
    console.log("Max calories exceeded")
  }
} 

const calorieTracker = new CalorieTracker(2000)
calorieTracker.trackCalories(500)
calorieTracker.trackCalories(1000)
calorieTracker.trackCalories(700)   // Max calories exceeded
```
 
* 🔑 코드를 분리하여 **모듈화** - 변화 가능한 이유가 하나씩

```js
// calorie.js
import logMessage from "./log.js"

class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories
    this.currentCalories = 0
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount
    if (this.currentCalories > this.maxCalories) {
      logMessage("Max calories exceeded")
    }
  }
} 

const calorieTracker = new CalorieTracker(2000)
calorieTracker.trackCalories(500)
calorieTracker.trackCalories(1000)
calorieTracker.trackCalories(700)   // Max calories exceeded

// log.js
export default function logMessage(message) {
  console.log(message)
}
```


***

### ⚙️Reference

[Single Responsibility Principle Explained - SOLID Design Principles](https://www.youtube.com/watch?v=UQqY3_6Epbg)

[The SOLID Principles of Object-Oriented Programming Explained in Plain English](https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/)