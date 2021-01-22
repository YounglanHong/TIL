// function sum(a, b) {
//   return a + b;
// }

let sum = (a, b) => a + b;

// function isPositive(number) {
//   return number >= 0;
// }

let isPositive = (number) => number >= 0;
// let isPositive = number => number >= 0;

// function randomNumber() {
//   return Math.random;
// }

let randomNumber = () => Math.random;

// document.addEventListener("click", function () {
//   console.log("Click");
// });

document.addEventListener("click", () => console.log("Click"));

/***************************************************************/

/* Scoping of 'this' */
class Person {
  constructor(name) {
    this.name = name;
    console.log("Constructor: ", this); // Person {name: "Bob"}
  }

  // 화살표 함수: 함수 호출 시 this 재정의 안함
  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow_this: ", this); // Person {name: "Bob"}
      console.log("Arrow: " + this.name); // Arrow: Bob
    }, 100);
  }

  // 일반 함수: 함수 호출 시 this 재정의
  printNameFunction() {
    setTimeout(function () {
      console.log("Fn_this: ", this); // Window {window: Window, self: Window, document: document, name: "", location: Location, …}
      console.log("Function: " + this.name); // Function:
    }, 100);
  }
}

let person = new Person("Bob");
person.printNameArrow();
person.printNameFunction();
