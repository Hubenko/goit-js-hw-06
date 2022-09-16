let counterValue = 0;
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
console.log(buttonDecrement);
const buttonIcrement = document.querySelector('button[data-action="increment"]');
console.log(buttonIcrement);

const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector("#value"),
};

refs.decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
});

refs.incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
});
