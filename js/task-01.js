const elements = document.querySelectorAll(".item");
console.log("Number of categories:", elements.length);
elements.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  const elChildren = element.children[1];
  const descendant = elChildren.children;
  console.log("Elements:", descendant.length);
});
