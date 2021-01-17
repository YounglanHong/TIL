// (ref: https://www.youtube.com/watch?v=y17RuWkWdn8)
const body = document.body;

/* Adding Elements: append, appendChild */
body.append("Hello world", "Bye");

/* Creating Elements: createElement */
const div = document.createElement("div");
body.append(div);
// body.appendChild(div);

/* Modifying Element Text: textContent, innerText */
div.textContent = "Hello World 1";
div.innerText = "Hello World 2";

// const div = document.querySelector("div");
// console.log(div.textContent); // text from html(including spacing, indent, invisible elements)
// console.log(div.innerText); // visible text on the screen

/* Modifying Element HTML: innerHTML  */
// 1. Render HTML directly from JS
div.innerHTML = "<strong>Hello World 3</strong>";

// 2. Create Element & Add Element Text
const strong = document.createElement("strong");
strong.innerText = "Hello World 3";
div.append(strong);
