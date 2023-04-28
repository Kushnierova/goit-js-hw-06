const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayOfIngredients = ingredients.map((ingredient) => {
  const listOfIngredients = document.createElement("li");
  console.log(listOfIngredients);
  listOfIngredients.textContent = ingredient;
  listOfIngredients.classList.add("item");
  return listOfIngredients;
});

const listEl = document.querySelector("#ingredients");
listEl.prepend(...arrayOfIngredients);