'use strict';

const hamburger = document.querySelector('nav .material-icons');
 
const close = document.querySelector('.navigation .material-icons')

const menudiv = document.querySelector('.navigation');
console.log(hamburger);

hamburger.addEventListener('click', () => {

menudiv.classList.add('showmenu');

})

close.addEventListener('click', () => {

    menudiv.classList.remove('showmenu');

});

const linksmenu = document.querySelectorAll('.navigation a')

linksmenu.forEach(elem =>{
    elem.addEventListener('click', () => {
        menudiv.classList.remove('showmenu');  
    })
} )