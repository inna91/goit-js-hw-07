"use stcrict";
const listRef = document.querySelector("#ingredients");
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const addIngredienrItem = ingredients.map((ingredient) => {
  const ingredientItemRef = document.createElement("li");
  ingredientItemRef.textContent = ingredient;
  listRef.appendChild(ingredientItemRef);
  return ingredientItemRef;
});

listRef.append(...addIngredienrItem);
