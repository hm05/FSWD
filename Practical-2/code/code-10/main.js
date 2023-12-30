// Import the defaultExportModule
import square from './defaultExportModule';

// Use the default exported function to calculate the square of a given number
const numberToSquare = 5;
const result = square(numberToSquare);

// Log the result
console.log(`Square of ${numberToSquare} is: ${result}`);