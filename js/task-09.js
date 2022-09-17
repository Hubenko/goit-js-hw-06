function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const body = document.querySelector("body");

btnColor.addEventListener("click", onChangeColor);

function onChangeColor() {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  textColor.textContent = currentColor;
}
