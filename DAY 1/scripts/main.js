// dom
const setCounterEl = document.getElementById("set-counter");
const subtractEl = document.getElementById("subtract");
const resetEl = document.getElementById("reset");
const addEl = document.getElementById("add");

// click functions
addEl.addEventListener("click", () => {
  let currentNumber = Number(setCounterEl.innerText);
  setCounterEl.innerText = currentNumber + 1;
});

subtractEl.addEventListener("click", () => {
  let currentNumber = Number(setCounterEl.innerText);
  if (currentNumber === 0) return;
  setCounterEl.innerText = currentNumber - 1;
});

resetEl.addEventListener("click", () => {
  if (setCounterEl.innerText == 0) return;
  else {
    // alert("Do You Want To Reset Count"); alternative confirm
    // if the ok button is clicked, result will be true (boolean)
    var result = confirm("Do you want to Reset count ?");

    if (result) {
      // the user clicked ok
      setCounterEl.textContent = 0;
      // } else {
      //   // the user clicked cancel or closed the confirm dialog.
      // }
    }
  }
});
