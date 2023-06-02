// DOM
const popupEl = document.getElementById("pop-up");
const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");
const checkBtnEl = document.getElementById("check");
const closeBtnEl = document.getElementById("close");

// functions

function VowelCounter(inputstring) {
  // intial vowel count
  let count = 0;
  let inputStr = inputstring.toLowerCase();

  // looping the string
  for (let i = 0; i < inputStr.length; i++) {
    // acessing each letter
    let letter = inputStr[i];

    // checking the letter matchs this regex
    if (letter.match(/([a,e,i,o,u])/)) {
      // updating count
      count++;
    }
  }

  // console.log(count);
  return count;
}

// animations functions
function SlideDown(element) {
  element.classList.remove("d-none");
  element.classList.add("slide-down");
}

function SlideUp(element) {
  element.classList.remove("slide-down");
  element.classList.add("slide-up");
  setTimeout(() => {
    element.classList.add("d-none");
    element.classList.remove("slide-up");
  }, 500);
}

// events
checkBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  let givenInput = inputEl.value;
  resultEl.textContent = `Given string has  ${VowelCounter(givenInput)} Vowels`;
  //   animation
  SlideDown(popupEl);
});
closeBtnEl.addEventListener("click", () => {
  SlideUp(popupEl);
  inputEl.value = "";
});
