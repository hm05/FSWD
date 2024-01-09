// Import the 'url' module for working with URLs
const urlModule = require('url');

// Function to parse and display various components of a URL
function parseURL(urlString) {
  // Creating a URL object from the given URL string
  const parsedURL = new urlModule.URL(urlString);

  // Extracting relevant components of the URL
  const urlComponents = {
    protocol: parsedURL.protocol,
    host: parsedURL.host,
    pathname: parsedURL.pathname,
    query: parsedURL.searchParams.toString(),
  };

  // Displaying the parsed URL components
  console.log('Parsed URL Components:', urlComponents);
}

// Function to build and display a URL based on its components
function buildURL(protocol, hostname, pathname, query) {
  // Creating a URL object using provided components
  const constructedURL = new urlModule.URL({ protocol, hostname, pathname, search: query });

  // Displaying the built URL
  console.log('Built URL:', constructedURL.toString());
}

// Function to validate if a URL is well-formed
function validateURL(urlString) {
  try {
    // Attempting to create a URL object to validate well-formed URLs
    new urlModule.URL(urlString);
    console.log('URL is well-formed:', urlString);
  } catch (error) {
    // Handling errors for invalid URLs
    console.error('Invalid URL:', error.message);
  }
}

// Example usage with a sample URL
const sampleURL = 'https://www.example.com/path?param=value';
parseURL(sampleURL);

// Example usage to build a URL from components
const newComponents = {
  protocol: 'https:',
  hostname: 'example.com',
  pathname: '/path',
  query: 'param=value',
};
buildURL(newComponents.protocol, newComponents.hostname, newComponents.pathname, newComponents.query);

// Example usage to validate URLs
validateURL(sampleURL);
validateURL('invalid-url');
