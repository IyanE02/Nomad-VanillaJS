// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.body;

function handleResize() {
  const width = window.innerWidth;

  if (width < 400) {
    body.className = "red";
  } else if (width >= 400 && width < 600) {
    body.className = "orange";
  } else if (width >= 600 && width < 800) {
    body.className = "yellow";
  } else if (width >= 800 && width < 1000) {
    body.className = "green";
  } else if (width >= 1000 && width < 1200) {
    body.className = "skyblue";
  } else if (width >= 1200 && width < 1400) {
    body.className = "blue";
  } else {
    body.className = "purple";
  }
}

function init() {
  window.addEventListener("resize", handleResize);
}
init();
