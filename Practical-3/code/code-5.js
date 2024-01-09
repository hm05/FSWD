const utilities = require('util');
const fileSystem = require('fs');

const readFileAsync = utilities.promisify(fileSystem.readFile);

function CustomAppError(code, errorMessage) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.code = code;
  this.message = errorMessage;
}

utilities.inherits(CustomAppError, Error);

function throwCustomError() {
  throw new CustomAppError(404, 'Requested resource not found');
}

try {
  throwCustomError();
} catch (err) {
  console.error('Custom Application Error:', err);
}

const sampleObject = {
  prop1: 'value1',
  prop2: {
    prop3: 'value3',
    prop4: [1, 2, 3],
  },
};

console.log('Inspecting Sample Object:', utilities.inspect(sampleObject, { depth: null }));

const readFile = utilities.promisify(fileSystem.readFile);

async function readAndLogContent(filePath) {
  try {
    const fileContent = await readFile(filePath, 'utf8');
    console.log('File Content:', fileContent);
  } catch (err) {
    console.error('Error reading file:', err.message);
  }
}

readAndLogContent('example.txt');
