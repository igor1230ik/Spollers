"use strict"


let spollers = document.querySelectorAll('[data-spoller]');
console.log(Array.isArray(spollers));

spollers = Array.from(spollers).filter(function (item, index, self) {
    console.log(item.nextElementSibling);

});