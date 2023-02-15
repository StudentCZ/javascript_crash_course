//Data Types Primitive

// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isTrue = true;
// const x = null;
// const y = undefined;

// Concatenation old way
// console.log('My name is ' + name + ' and I am ' + age);

//Concatenation new way Temperal Literals/Template String
// console.log(`My name is ${name} and I am ${age}`);

//String property and methods

// const string = 'Hello World';

// console.log(string.length);
// console.log(string.toUpperCase());
// console.log(string.substring(0, 5));
// console.log(string.substring(0, 5).toUpperCase());
// console.log(string.split(''));

//Arrays

// const numbers = new Array(1, 2, 3, 4, 5);

// const fruits = ['apples', 'oranges', 'bananas', 'pears'];

// console.log(fruits[1]);

// fruits.push('mangos');
// fruits.unshift('strawberries');
// fruits.pop();

// console.log(Array.isArray(fruits)); //return true

//Object Literals

// const person = {
//   firstName: 'Sam',
//   lastName: 'Wise',
//   age: 20,
//   hobbies: ['music', 'basketball', 'singing', 'movies'],
//   address: {
//     street: 'Big Town',
//     city: 'Cleveland',
//     state: 'Ohio',
//   },
// };

// console.log(
//   person.firstName,
//   person.lastName,
//   person.hobbies[2],
//   person.address.street
// );

//destructuring

// const {
//   firstName,
//   lastName,
//   address: { state },
// } = person;

// person.email = 'samwise@gmail.com';

//Array of Objects

// const todos = [
//   {
//     id: 1,
//     text: 'Do my homework',
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: 'Go buy groceries',
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: 'fill out job application',
//     isCompleted: false,
//   },
// ];

// const todosJSON = JSON.stringify(todos);

//for of loops

// for (let todo of todos) {
//   console.log(todo.text);
// }

//forEach, map, filter high order array methods

//ES5 forEach
// todos.forEach(function (todo) {
//   console.log(todo.text);
// });

//ES5 map
// const todoText = todos.map(function (todo) {
//   return todo.text;
// });

//ES5 filter
// const todoCompleted = todos.filter(function (todo) {
//   return todo.isCompleted === true;
// });

//ES5 filter + map method chaining
// const todoCompleted = todos
//   .filter(function (todo) {
//     return todo.isCompleted === true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   })
//   .join(', ');

// console.log(todoCompleted);

//conditional statements

// const number = 20;

// if (number == 10) {
//   console.log('number is 10');
// } else if (number > 10) {
//   console.log('number is greater than 10');
// } else {
//   console.log('number is less than 10');
// }

// const x = 4;
// const y = 12;

// if (x > 5 || y > 10) {
//   console.log('x is > 5 and y is > 10');
// } else {
//   console.log('x is not greater than 5 and y is not greater than 10');
// }

//ternary

// const num = 12;
// const color = num > 10 ? 'red' : 'blue';

//switch

// switch (color) {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:
//     console.log('it is a different color');
// }

function addNums(num1 = 5, num2 = 5) {
  return num1 + num2;
}

console.log(addNums(1, 2));
