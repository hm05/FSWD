// main.js

// Import modules
const mathOperations = require('./mathOperations');
const stringOperations = require('./stringOperations');

// Perform mathematical operations
console.log('Addition:', mathOperations.addition(5, 3));
console.log('Subtraction:', mathOperations.subtraction(8, 2));
console.log('Multiplication:', mathOperations.multiplication(4, 6));
console.log('Division:', mathOperations.division(10, 2));

// Perform string operations
console.log('Concatenation:', stringOperations.concatenation('Hello', 'World'));
console.log('Uppercase:', stringOperations.uppercase('hello'));
console.log('Lowercase:', stringOperations.lowercase('WORLD'));
