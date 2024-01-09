// myMathOperations.js
module.exports = {
  sum: (a, b) => a + b,
  difference: (a, b) => a - b,
  product: (a, b) => a * b,
  quotient: (a, b) => (b !== 0 ? a / b : "Cannot divide by zero"),
};

// mainScript.js
const myMath = require('./myMathOperations');

const number1 = 10;
const number2 = 5;

console.log(`Sum: ${myMath.sum(number1, number2)}`);
console.log(`Difference: ${myMath.difference(number1, number2)}`);
console.log(`Product: ${myMath.product(number1, number2)}`);
console.log(`Quotient: ${myMath.quotient(number1, number2)}`);
