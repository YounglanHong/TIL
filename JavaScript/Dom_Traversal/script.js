/* 1️⃣ getElementId, getElementsByClassName */
const grandparent = document.getElementById("grandparent-id");

// const parents = document.getElementsByClassName("parent"); // HTML Collection
const parents = Array.from(document.getElementsByClassName("parent")); // to use forEach method

/* 2️⃣ querySelector, querySelectorAll */

/* querySelector: Select the closest child element */
const grandparent = document.querySelector("#grandparent-id");
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent"); // first parent
// changeColor(grandparent);
// changeColor(parent);

/* querySelector: Select all the closest child elements */
const parents = document.querySelectorAll(".parent");

// parents.forEach((parent) => changeColor(parent));
// parents.forEach(changeColor);

/* 3️⃣ children, descendants */

// const parents = grandparent.children; // HTML Collection
const parents = Array.from(grandparent.children); // to use forEach method
// parents.forEach(changeColor);

// const parentOne = parents[0];
// const children = parentOne.children;
// changeColor(children[0]);

// const childOne = grandparent.querySelector(".child");
// changeColor(childOne);

// const children = grandparent.querySelectorAll(".child");
// children.forEach(changeColor);

/* 4️⃣ parents, ancestors */
const childOne = document.querySelector("#child-one");

/* parentElement */
const grandparent = parent.parentElement;
const parent = childOne.parentElement;

/* closest: Select the closest parent element */
const grandparent = childOne.closest(".grandparent");
// changeColor(grandparent);

/* 5️⃣ sibling */
/* nextElementSibling */
const childTwo = childOne.nextElementSibling;
changeColor(childTwo);

/* previousElementSibling */
changeColor(childTwo.previousElementSibling);

/**************************************************************/

/* ChangeColor Function */
function changeColor(element) {
  element.style.backgroundColor = "#333";
}
