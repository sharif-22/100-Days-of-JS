// DOM
const bodyEL = document.getElementsByTagName("body");
const colorCodeEl = document.getElementById("current-bg-color");
const divEl = document.getElementById("box");
const copyEl = document.getElementById("copy");
const colorGenerateEl = document.getElementById("color-generator");

// functions
function RandomColor() {
  let color = Math.random().toString(16).substring(2, 8);
  let hexCode = `#${color}`;
  return hexCode;
}
const copyContent = async (colorCode) => {
  if (colorCode.length > 7) return;
  try {
    await navigator.clipboard.writeText(colorCode);
    console.log("Content copied to clipboard " + colorCode);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

// events
colorGenerateEl.addEventListener("click", () => {
  let color = RandomColor();
  bodyEL[0].style.backgroundColor = color;
  colorCodeEl.textContent = color;
});

copyEl.addEventListener("click", () => {
  let code = colorCodeEl.textContent;

  if (code.length == 1) return;

  copyContent(code);
  if (code.length <= 7) {
    colorCodeEl.textContent = "HEX Code Copied !";
  } else {
    colorCodeEl.textContent = "Generate New Color";
  }
});
