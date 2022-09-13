const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const newList = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.classList.add("item");
  element.textContent = ingredient;
  console.log(element);
  return element;
});
console.log(newList);
const list = document.querySelector("#ingredients");
console.log(list);
list.append(...newList);

// ingredients.forEach((ingredient) => {
//   const element = document.createElement("li");
//   element.classList.add("item");
//   element.textContent = ingredient;
//   console.log(element);

//   const list = document.querySelector("#ingredients");

//   list.appendChild(element);
// });
