// DOM
const popupEl = document.getElementById("pop-up");
const closeBtnEl = document.getElementById("close");
const subscribeBtnEl = document.getElementById("subscribe");

// events
subscribeBtnEl.addEventListener("click", (event) => {
  event.preventDefault();
  popupEl.classList.remove("d-none");
  popupEl.classList.add("slide-down");
});

closeBtnEl.addEventListener("click", () => {
  popupEl.classList.remove("slide-down");
  popupEl.classList.add("slide-up");
  setTimeout(() => {
    popupEl.classList.add("d-none");
    popupEl.classList.remove("slide-up");
  }, 500);
});
