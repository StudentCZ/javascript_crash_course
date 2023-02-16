// Single Element
const form = document.getElementById('my-form');
// console.log(document.querySelector(form));

//Multiple Element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item')); //HTML Collection

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');
// ul.lastElementChild.remove();

// ul.firstElementChild.textContent = 'How Are You?';
// ul.children[1].textContent = 'Fine';
// ul.children[1].innerText = 'Fine';
// ul.lastElementChild.innerHTML = '<h1>WE ARE ONE PIECE</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'blue';

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const currentColor = document.body.style.backgroundColor;

//   document.body.style.backgroundColor = currentColor === 'red' ? 'blue' : 'red';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = '<h1>Please Enter All Fields</h1>';

    setTimeout(() => {
      msg.remove();
    }, 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    userList.appendChild(li);
    nameInput.value = '';
    emailInput.value = '';
  }
}
