// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
// количество элементов в `input` и нажимает кнопку `Создать`, после чего
// рендерится коллекция. При нажатии на кнопку `Очистить`, коллекция элементов
// очищается.

// Создай функцию `createBoxes(amount)`, которая принимает один параметр - число.
// Функция создает столько `<div>`, сколько указано в `amount` и добавляет их в
// `div#boxes`.

// 1. Размеры самого первого `<div>` - 30px на 30px.
// 2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3. Все элементы должены иметь случайный цвет фона в формате HEX. Используй
//    готовую функцию `getRandomHexColor` для получения цвета.

// Создай функцию `destroyBoxes()`, которая очищает содержимое `div#boxes`, тем
// самым удаляя все созданные элементы.


const refs = {
  controls: document.querySelector('#controls'),
  input: controls.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}


refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);
refs.input.addEventListener('input', onInputChange);

let inputValue;

function onInputChange(event) {
  refs.input.value = event.currentTarget.value;
  inputValue = Number(refs.input.value);
}

function onCreateBtnClick() {  

  for (let i = 0; i < inputValue; i += 1) {
  const boxesItem = document.createElement('div');
  boxesItem.classList.add('box');
  boxesItem.style.width = (boxSizeMaker(inputValue))[i] + 'px';
  boxesItem.style.height = (boxSizeMaker(inputValue))[i] + 'px';
  boxesItem.style.backgroundColor = getRandomHexColor();
  refs.boxes.appendChild(boxesItem);
  }
}

function onDestroyBtnClick() {
  // Способ 1
  refs.boxes.innerHTML = '';

  // Способ 2
  // const boxesItem = document.querySelectorAll('.box');
  // boxesItem.forEach(item => item.parentNode.removeChild(item));
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function boxSizeMaker (inputValue) {
  let value = 30;
  let array = [value];
for (let i = 1; i < inputValue; i += 1) {
    value += 10;
    array.push(value);
}
return array;
}