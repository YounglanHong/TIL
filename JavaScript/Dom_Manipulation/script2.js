const body = document.body;
const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

/* Removing Element: remove, removeChild */
// 1. Remove element
spanBye.remove();
div.append(spanBye); // reversible

// 2. Remove from parent
div.removeChild(spanHi);
div.append(spanHi); // reversible

/* Modifying Element Attributes */
// 1) getAttribute
console.log(spanHi.getAttribute("id"));
/* OR */ console.log(spanHi.id);

console.log(spanHi.getAttribute("title"));
/* OR */ console.log(spanHi.title);

// 2) setAttribute
spanHi.setAttribute("id", "HI");
/* OR */ spanHi.id = "HI";
console.log(spanHi.id);

spanHi.setAttribute("title", "HELLO");
/* OR */ spanHi.title = "HELLO";
console.log(spanHi.title);

// 3) removeAttribute
spanHi.removeAttribute("title");
// spanHi.setAttribute("title", "HI2");

/* Modifying Data Attributes(Custom attr): Data- */
// (ref: https://blog.webdevsimplified.com/2020-10/javascript-data-attributes/)
console.log(spanHi.dataset);
console.log(spanHi.dataset.test);
console.log(spanHi.dataset.longerTest);

spanHi.dataset.newName = "new";
console.log(spanHi.dataset.newName);

/* Modifying Element Classes: classList */
// (ref: https://blog.webdevsimplified.com/2020-11/class-list/)
spanBye.classList.add("new-class");
spanBye.classList.remove("bye2");
spanBye.classList.toggle("bye3");
spanBye.classList.toggle("bye4", false); // remove
spanBye.classList.toggle("bye5", true); // add

/* Modifying Element Style */
spanHi.style.color = "white";
spanHi.style.backgroundColor = "blue";

spanBye.style.color = "white";
spanBye.style.backgroundColor = "red";
