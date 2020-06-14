const body = document.querySelector("body");

const IAMGE_NUMBER = 4;

function handleImgLoad() {
  console.log("Finished Loading");
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/0${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IAMGE_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
