// DOM
const randomNumEl = document.getElementById("randomNumber");
const generateBtnEl = document.getElementById("Generate");
const clearBtnEl = document.getElementById("clear");

// functions
function RandomNumberGenerator() {
  let RandomNumber = Math.floor(Math.random() * 10);
  console.log(RandomNumber);
  return RandomNumber;
}

// events
generateBtnEl.addEventListener("click", () => {
  randomNumEl.textContent = RandomNumberGenerator();
});

clearBtnEl.addEventListener("click", () => {
  randomNumEl.innerHTML = "&nbsp;";
});
