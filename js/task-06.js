const valid = document.querySelector("#validation-input");
console.log(valid);
const checkLength = valid.dataset.length;
console.log(typeof "checkLength");
valid.addEventListener("blur", onCheckСonditionInput);

function onCheckСonditionInput(event) {
  if (event.currentTarget.value.length === Number(checkLength)) {
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.add("invalid");
  }
}
