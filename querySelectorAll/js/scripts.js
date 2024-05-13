'use strict';

const btns = document.querySelectorAll('button');

console.log(btns);

btns.forEach((elem) => {
    console.log(elem);
    elem.addEventListener('click', () => {
        elem.style.display = 'none';
    })
})