// DOM
const keyEl = document.getElementById("key");

// DOM - Animations
const popupEl = document.getElementById("pop-up");
const msgEl = document.getElementById("msg");

// DOM - Btn
const claimBtnEl = document.getElementById("claim");
const closeBtnEl = document.getElementById("close");

// utilities
let discount = KeyGenerator().discountInPercent;

// functions
function RandomNumberGenerator() {
  let RandomNumber = Math.floor(Math.random() * 100);
  return RandomNumber;
}
function RandomColor() {
  let color = Math.random().toString(16).substring(2, 6);
  let hexCode = `${color}`;
  return hexCode;
}

function KeyGenerator() {
  let discount = RandomNumberGenerator();
  let key = RandomColor().toUpperCase();
  let value = {
    discountInPercent: discount,
    randKey: key,
  };
  return value;
}

// Animation functions
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

// DOM - Manipulations
keyEl.textContent = `${discount} - DIS - ${KeyGenerator().randKey} `;

// events
claimBtnEl.addEventListener("click", () => {
  // pop up msg text
  msgEl.textContent = `You Got ${discount} % Discount Voucher`;
  // animation
  SlideDown(popupEl);
  // copy to clipboard promise
  navigator.clipboard.writeText(keyEl.textContent).then(
    (claimBtnEl.textContent = "Coupon Code Copied"),
    claimBtnEl.classList.add("bg-black"),

    setTimeout(() => {
      (claimBtnEl.textContent = " Claim !"),
        claimBtnEl.classList.remove("bg-black");
      SlideUp(popupEl);
    }, 4000)
  );
});

closeBtnEl.addEventListener("click", () => {
  SlideUp(popupEl);
});
