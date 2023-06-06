// DOM
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementsByTagName("body")[0];

// functions

function OflineIndicator() {
  bgColor.classList.add("offline");
  bgColor.classList.remove("online");
}

function OnlineIndicator() {
  bgColor.classList.add("online");
  bgColor.classList.remove("offline");
}

async function connectionStatus() {
  // trying to fetch image and accessing its status code
  try {
    const fetchResult = await fetch(
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=" +
        new Date().getTime()
    );
    let returnvl = fetchResult.status >= 200 && fetchResult.status < 300;
    console.log(returnvl);
    // returning boolean value
    return returnvl;
  } catch (error) {
    console.error(error);
    OflineIndicator();
    statusDisplay.textContent = "OOPS!!! Your Internet Connection is Down.";
  }
}

// Monitor the connection
setInterval(async () => {
  const result = await connectionStatus();
  if (result) {
    OnlineIndicator();
    statusDisplay.textContent = "You're ONLINE!!! Connection looks good.";
  }
}, 5000);

//   Check Connection When Page Loads
window.addEventListener("load", async (event) => {
  if (connectionStatus()) {
    statusDisplay.textContent = "Online";
  } else {
    bgColor.classList.add("offline");
    statusDisplay.textContent = "OFFline";
  }
});
