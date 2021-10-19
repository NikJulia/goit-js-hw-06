// Напиши скрипт, который изменяет цвета фона элемента `<body>` через инлайн стиль
// при клике на `button.change-color` и выводит значение цвета в `span.color`.

const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const color = document.querySelector('.color');

button.addEventListener('click', onColorChange);

function onColorChange () {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
