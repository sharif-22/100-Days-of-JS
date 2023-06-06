// DOM
const popupEl = document.getElementById("pop-up");
const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");
const checkBtnEl = document.getElementById("check");
const closeBtnEl = document.getElementById("close");

// functions
const PalindromChecker = (inputvalue) => {
  // converting into string and lowercase
  let givenValue = inputvalue.toString().toLowerCase();
  // reverseing the given string
  let reverseValue = inputvalue
    .toString()
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  // console.log(givenValue, reverseValue);

  // checking given value and  reverse value
  if (givenValue == reverseValue) {
    let check = true;
    // console.log(check);
    return check;
  } else {
    let check = false;
    // console.log(check);
    return check;
  }
};

// events

checkBtnEl.addEventListener("click", (event) => {
  event.preventDefault();

  // animation
  popupEl.classList.remove("d-none");
  popupEl.classList.add("slide-down");

  let value = inputEl.value;

  if (value.length > 1) {
    if (PalindromChecker(value)) {
      resultEl.textContent = `${value} is a palimdrom`;
    } else {
      resultEl.textContent = `${value} is not a palimdrom`;
    }
    // if user didn't enter value
  } else {
    resultEl.textContent = `Enter valid value `;
  }
});

closeBtnEl.addEventListener("click", () => {
  // animations
  popupEl.classList.remove("slide-down");
  popupEl.classList.add("slide-up");
  setTimeout(() => {
    popupEl.classList.add("d-none");
    popupEl.classList.remove("slide-up");
  }, 500);
  inputEl.value = "";
});
