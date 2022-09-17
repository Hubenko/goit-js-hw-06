const inputBtn = document.querySelector("#font-size-control");
console.log(inputBtn);
inputBtn.addEventListener("input", onInputValue);

const textContent = document.querySelector("#text");
textContent.style.fontSize = "50px";

function onInputValue(event) {
  const numberOfEvent = event.currentTarget.value;
  textContent.style.fontSize = `${numberOfEvent}px`;
}
