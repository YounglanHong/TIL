const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

/* Adding Events: addEventListener */
document.addEventListener("click", (e) => {
  console.log("Document 1", e.target);
});

grandparent.addEventListener("click", (e) => {
  console.log("Grandparent 1", e.target);
});

parent.addEventListener("click", (e) => {
  console.log("Parent 1", e.target);
});

child.addEventListener("click", (e) => {
  console.log("Child 1", e.target);
});

/* <브라우저가 이벤트 발생을 감지하는 방식> */

/* 1️⃣ Event Bubbling(이번트 버블링) */
document.addEventListener("click", (e) => {
  console.log("Document", e.target);
});

grandparent.addEventListener("click", (e) => {
  console.log("Grandparent", e.target);
});

parent.addEventListener("click", (e) => {
  console.log("Parent", e.target);
});

child.addEventListener("click", (e) => {
  console.log("Child", e.target);
});

/* Click child!
    Child
    Parent
    Grandparent
    Document
  */

/* 2️⃣ Event Capturing(이번트 캡처링) */

grandparent.addEventListener(
  "click",
  (e) => {
    console.log("Grandparent Capture", e.target);
  },
  { capture: true } // default is false
);

grandparent.addEventListener("click", (e) => {
  console.log("Grandparent Bubble", e.target);
});

parent.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();
    console.log("Parent Capture", e.target);
  },
  { once: true }
);

parent.addEventListener("click", (e) => {
  console.log("Parent Bubble", e.target);
});

child.addEventListener(
  "click",
  (e) => {
    console.log("Child Capture", e.target);
  },
  { capture: true }
);

child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child Bubble", e.target);
});

document.addEventListener(
  "click",
  (e) => {
    console.log("Document Capture", e.target);
  },
  { capture: true }
);

document.addEventListener("click", (e) => {
  console.log("Document Bubble", e.target);
});

/* Click child!
Document Capture 
Grandparent Capture 
Parent Capture 
Child Capture 

Child Bubble 
Parent Bubble
Grandparent Bubble
Document Bubble
*/

/* Remove Events: removeEventListener */

grandparent.addEventListener("click", (e) => {
  console.log("Grandparent Bubble", e.target);
});

//*** Remove printHi event after 2 seconds
parent.addEventListener("click", printHi);

setTimeout(() => {
  parent.removeEventListener("click", printHi);
}, 2000);

function printHi() {
  console.log("Hi");
}

child.addEventListener("click", (e) => {
  console.log("Child Bubble", e.target);
});
