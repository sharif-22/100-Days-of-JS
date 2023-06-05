// DOM
const inputEl = document.getElementById("input");
const textSpaceRemainingEl = document.querySelector(".border-bottom");
const remainingEl = document.getElementById("remaining-count");
// inputEl.value = "empty syting";
// functions remaining
function StringLength(input) {
  let findLength = input.length;
  let maxLength = 100;
  let percent = (findLength * 100) / maxLength;
  console.log(percent);
  return percent;
}
// events
inputEl.addEventListener("keyup", () => {
  // setting length
  let borderPercent = StringLength(inputEl.value);
  // console.log(borderPercent);

  //   remaing text count
  let remainingCount = 100 - borderPercent;
  remainingEl.textContent = remainingCount;

  //   fixing border to 100%
  if (borderPercent <= 100) {
    textSpaceRemainingEl.style.width = `${Math.round(borderPercent)}%`;
    textSpaceRemainingEl.classList.add("acent");
  }
  //   warning
  if (borderPercent > 80) {
    textSpaceRemainingEl.classList.add("warning");
    textSpaceRemainingEl.classList.remove("acent", "danger");
  }

  //   danger

  if (borderPercent > 100) {
    textSpaceRemainingEl.classList.remove("warning", "acent");
    textSpaceRemainingEl.classList.add("danger");
  } else if (borderPercent >= 95) {
    textSpaceRemainingEl.classList.remove("warning");
    textSpaceRemainingEl.classList.add("danger");
  }
});
