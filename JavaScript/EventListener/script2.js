/* *️⃣ Event Delegation(이벤트 위임) */

const divs = document.querySelectorAll("div");

// 상위 요소 document에 클릭이벤트 할당하여 모든 자식 요소 제어
// 하위에서 발생한 클릭 이벤트 상위 요소에서 감지(이벤트 버블링)
document.addEventListener("click", (e) => {
  if (e.target.matches("div")) {
    console.log("hi");
  }
});

addGlobalEventListener("click", "div", (e) => {
  console.log("hi");
});

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

// divs.forEach((div) => {
//   div.addEventListener("click", () => {
//     console.log("hi");
//   });
// });

const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "yellow";
newDiv.style.cursor = "pointer";

document.body.append(newDiv);
