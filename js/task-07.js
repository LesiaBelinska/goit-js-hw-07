'use strict';
// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

const inputControlEl = document.querySelector("#font-size-control");
const textTitleEl = document.querySelector("#text");


const onInputChange = function (event) {
  textTitleEl.style.fontSize = event.currentTarget.value + "px";
  console.log(textTitleEl.style.fontSize);
};

inputControlEl.addEventListener("change", onInputChange);