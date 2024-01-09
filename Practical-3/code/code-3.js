const pathUtils = require('path');
const fs = require('fs');

// Function to extract file information from a given path
function analyzeFilePath(filePath) {
  const fileInfo = {
    filename: pathUtils.basename(filePath),
    directory: pathUtils.dirname(filePath),
    extension: pathUtils.extname(filePath).slice(1),
  };
  console.log('Analyzed File:', fileInfo);
}

// Function to normalize a given file path
function standardizePath(inputPath) {
  const standardizedPath = pathUtils.normalize(inputPath);
  console.log('Standardized Path:', standardizedPath);
}

// Function to resolve a set of path segments into an absolute path
function resolveAbsolutePath(...pathSegments) {
  const absolutePath = pathUtils.resolve(...pathSegments);
  console.log('Resolved Absolute Path:', absolutePath);
}

// Function to validate the existence and type (file/directory) of a path
function checkPathValidity(filePath) {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error('Path not found:', filePath);
    } else {
      fs.stat(filePath, (statErr, stats) => {
        if (statErr) {
          console.error('Error retrieving file/directory information:', statErr);
        } else {
          console.log('Path found:', filePath);
          console.log('Is a directory:', stats.isDirectory());
          console.log('Is a file:', stats.isFile());
        }
      });
    }
  });
}

// Example paths for testing
const sampleFilePath = '/example/path/to/file.txt';
const nonStandardizedPath = '/example/path/../file.txt';
const resolvedAbsolutePath = resolveAbsolutePath('/example', 'path', 'file.txt');
const nonExistentDir = '/nonexistentdirectory';

// Testing the functions with example paths
analyzeFilePath(sampleFilePath);
standardizePath(nonStandardizedPath);
checkPathValidity(sampleFilePath);
checkPathValidity(nonExistentDir);
