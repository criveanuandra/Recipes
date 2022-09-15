const ingrediente = ["rosie", "castravete"];

const initIngredients = () => {
  const ul = document.getElementById("container-ingrediente");
  for(let i = 0; i < ingrediente.length; i++) {
    const li = document.createElement("li");
    li.setAttribute("onclick", `onDeleteIngredient(${ingrediente.length - 1})`);
    li.setAttribute("id", `ingredient-${ingrediente.length - 1}`);
    li.appendChild(document.createTextNode(ingrediente[i]));
    ul.appendChild(li);
  }
}

initIngredients();

const onAddIngredient = () => {
  const inputIngredient = document.getElementById("input-ingredient");
  const ul = document.getElementById("container-ingrediente");

  const ingredient = inputIngredient.value;
  const li = document.createElement("li");

  ingrediente.push(ingredient);
  li.setAttribute("onclick", `onDeleteIngredient(${ingrediente.length - 1})`);
  li.setAttribute("id", `ingredient-${ingrediente.length - 1}`);

  li.appendChild(document.createTextNode(ingredient));
  ul.appendChild(li);
}

const onDeleteIngredient = (index) => {
  ingrediente.splice(index, 1);
  document.getElementById(`ingredient-${index}`).remove();
  console.log(ingrediente);
}

const onRemoveLastIngredient = () => {
  console.log(ingrediente.length);
  document.getElementById(`ingredient-${ingrediente.length - 1}`).remove();
  ingrediente.pop();
}

const onJoinIngredients = () => {
  const result = document.getElementById("result");
  result.innerHTML = ingrediente.join(" * ");
}