//Data Types Primitive

const name = 'John';
const age = 30;
const rating = 4.5;
const isTrue = true;
const x = null;
const y = undefined;

// Concatenation old way
console.log('My name is ' + name + ' and I am ' + age);

//Concatenation new way Temperal Literals/Template String
console.log(`My name is ${name} and I am ${age}`);

//String property and methods

const string = 'Hello World';

console.log(string.length);
console.log(string.toUpperCase());
console.log(string.substring(0, 5));
console.log(string.substring(0, 5).toUpperCase());
