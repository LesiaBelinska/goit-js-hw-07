'use strict';
// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputEl = document.querySelector('#name-input');
const helloNameEl = document.querySelector('#name-output');
const defaultName = 'незнакомец';

inputEl.addEventListener('input', (event) => {
    event.currentTarget.value.trim() ? helloNameEl.textContent = event.currentTarget.value : helloNameEl.textContent = defaultName;
});


