// const body = document.body;
// const modalOne = document.querySelector("#modal-1");
// const modalTwo = document.querySelector("#modal-2");
// const modals = document.querySelectorAll(".modal");

// modalOne.style.color = "green";
// modalTwo.style.color = "yellow";

// modals.forEach((modal) => {
//   modal.style.display = "block";
//   modal.style.width = "100px";
//   modal.style.height = "100px";
//   modal.style.border = "1px solid grey";
//   modal.style.backgroundColor = "#eeeeee";
// });

/* Reusable button event */
const buttons = document.querySelectorAll("[data-modal-id]");

buttons.forEach((button) => {
  const modalId = button.dataset.modalId;
  const modal = document.getElementById(modalId);
  button.addEventListener("click", () => {
    modal.classList.toggle("show");
  });
});
