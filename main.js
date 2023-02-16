// Single Element
const form = document.getElementById('my-form');
// console.log(document.querySelector(form));

//Multiple Element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item')); //HTML Collection

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
// ul.lastElementChild.remove();

ul.firstElementChild.textContent = 'How Are You?';
