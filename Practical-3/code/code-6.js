const fs = require('fs');

// Function to read file content and return it as a Buffer
function readFileToBuffer(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const buffer = Buffer.from(fileContent, 'utf-8');
  return buffer;
}

// Function to manipulate a Buffer by swapping its halves
function manipulateBuffer(buffer) {
  const firstHalf = buffer.slice(0, Math.floor(buffer.length / 2));
  const secondHalf = buffer.slice(Math.floor(buffer.length / 2));
  const concatenatedBuffer = Buffer.concat([secondHalf, firstHalf]);
  return concatenatedBuffer;
}

// Function to convert a Buffer back to text
function bufferToText(buffer) {
  return buffer.toString('utf-8');
}

// Function to perform base64 encoding and decoding on a Buffer
function base64EncodingDecoding(buffer) {
  const base64Encoded = buffer.toString('base64');
  const base64DecodedBuffer = Buffer.from(base64Encoded, 'base64');
  const base64DecodedText = base64DecodedBuffer.toString('utf-8');
  return { base64Encoded, base64DecodedText };
}

// File path to the text file
const filePath = 'example.txt';

// Read the file content and convert it to a Buffer
const originalBuffer = readFileToBuffer(filePath);
console.log('Original Buffer:', originalBuffer);

// Manipulate the Buffer by swapping its halves
const manipulatedBuffer = manipulateBuffer(originalBuffer);
console.log('Manipulated Buffer:', manipulatedBuffer);

// Convert the manipulated Buffer back to text
const textFromBuffer = bufferToText(manipulatedBuffer);
console.log('Text from Manipulated Buffer:', textFromBuffer);

// Perform base64 encoding and decoding on the original Buffer
const { base64Encoded, base64DecodedText } = base64EncodingDecoding(originalBuffer);
console.log('Base64 Encoded:', base64Encoded);
console.log('Base64 Decoded Text:', base64DecodedText);
