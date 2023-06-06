// DOM
// past link
const fileLinkEl = document.getElementById("file-link");
console.log(fileLinkEl);
const generateEl = document.getElementById("generate");
const copytoClipBoard = document.getElementById("copy");

// embeded audio
const audioEl = document.getElementById("audio-el");
const audioDownloadEl = document.getElementById("audio-dir-download");

// embeded vedio
const vedioEl = document.getElementById("vedio-el");
const vedioDownloadEl = document.getElementById("vedio-dir-download");

const clearEl = document.getElementById("clear");

// functions

const ClearForm = (e) => {
  e.preventDefault();
  fileLinkEl.value = "";
  audioEl.value = "";
  vedioEl.value = "";
};

const GenerateHtml = () => {
  // confirm valid drive file
  const confirmLink = fileLinkEl.value.includes(
    "https://drive.google.com/file/d/"
  );
  let link;
  // https://drive.google.com/file/d/1sG5QJcwPeK4WKONzc4DmIwtuBWaVih6O/view?usp=drive_link
  // https://drive.google.com/uc?export=download&id=/1sG5QJcwPeK4WKONzc4DmIwtuBWaVih6O/view?
  if (confirmLink == true) {
    let replace = fileLinkEl.value
      .replace(
        "https://drive.google.com/file/d/",
        "https://drive.google.com/uc?id="
      )
      .replace("/view?usp=sharing", "");
    console.log(replace);
    link = replace;
  } else {
    console.log("past valid link");
  }

  // converting to Element
  let audioElement = `<audio width="300" height="32" controls="controls" src=" ${link}" type="audio/mp3"></audio> `;
  audioEl.value = audioElement;

  let vedioDocument = `<iframe src="${link}/preview" width="560" height="315"></iframe>`;
  vedioEl.value = vedioDocument;
};

// events
generateEl.addEventListener("click", (e) => {
  e.preventDefault();
  GenerateHtml();
});

clearEl.addEventListener("click", ClearForm);
