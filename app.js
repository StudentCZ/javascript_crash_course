//Data Types Primitive

const name = 'John';
const age = 30;
const rating = 4.5;
const isTrue = true;
const x = null;
const y = undefined;

// Concatenation old way
// console.log('My name is ' + name + ' and I am ' + age);

//Concatenation new way Temperal Literals/Template String
// console.log(`My name is ${name} and I am ${age}`);

//String property and methods

const string = 'Hello World';

// console.log(string.length);
// console.log(string.toUpperCase());
// console.log(string.substring(0, 5));
// console.log(string.substring(0, 5).toUpperCase());
// console.log(string.split(''));

//Arrays

const numbers = new Array(1, 2, 3, 4, 5);

const fruits = ['apples', 'oranges', 'bananas', 'pears'];

// console.log(fruits[1]);

fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();

console.log(Array.isArray(fruits)); //return true

//Object Literals

const person = {
  firstName: 'Sam',
  lastName: 'Wise',
  age: 20,
  hobbies: ['music', 'basketball', 'singing', 'movies'],
  address: {
    street: 'Big Town',
    city: 'Cleveland',
    state: 'Ohio',
  },
};

console.log(
  person.firstName,
  person.lastName,
  person.hobbies[2],
  person.address.street
);
