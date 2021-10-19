// Напиши скрипт который:

// 1. Посчитает и выведет в консоль количество категорий в `ul#categories`, то есть
//    элементов `li.item`.
const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');

console.log('Number of categories:', categoriesItems.length);

// 2. Для каждого элемента `li.item` в списке `ul#categories`, найдет и выведет в
//    консоль текст заголовка элемента (тега `<h2>`) и количество элементов в
//    категории (всех вложенных в него `<li>`).

categoriesItems.forEach(item => {
    console.log('Category:', item.querySelector('h2').textContent);
    console.log('Elements:', item.querySelectorAll('li').length);
});