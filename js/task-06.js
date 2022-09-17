const valid = document.querySelector("#validation-input");
console.log(valid);
const checkLength = valid.dataset.length;
console.log(typeof "checkLength");
valid.addEventListener("blur", onCheckСonditionInput);

function onCheckСonditionInput(event) {
  if (event.currentTarget.value.length === Number(checkLength)) {
    valid.classList.add("valid");
  } else {
    valid.classList.add("invalid");
  }
}
