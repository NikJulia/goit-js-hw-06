// Напиши скрипт, который для каждого элемента массива `ingredients`:
// 1. Создаст отдельный элемент `<li>`. Обзательно используй метод
//    `document.createElement()`.
// 2. Добавит название ингредиента как его текстовое содержимое.
// 3. Добавит элементу класс `item`.
// 4. После чего вставит все `<li>` за одну операцию в список `ul.ingredients`.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

// Вариант 1

const ingredientsListMaker = items => {
  return items.map(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('item`');
    listItem.textContent = item;
    return listItem;
  });
};

ingredientsList.append(...ingredientsListMaker(ingredients));


// Вариант 2

// ingredients.forEach(item => {
//   const listItem = document.createElement('li');
//   listItem.textContent = item;
//   ingredientsList.appendChild(listItem);
// })