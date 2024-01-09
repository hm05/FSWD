// myMathOperations.js
module.exports = {
  sum: (a, b) => a + b,
  difference: (a, b) => a - b,
  product: (a, b) => a * b,
  quotient: (a, b) => (b !== 0 ? a / b : "Cannot divide by zero"),
};