const fileSystem = require('fs');
const path = require('path');

function displayFileDetails(directoryPath) {
  const files = fileSystem.readdirSync(directoryPath);
  files.forEach(fileName => {
    const filePath = path.join(directoryPath, fileName);
    const fileStats = fileSystem.statSync(filePath);
    console.log(`Name: ${fileName}, Size: ${fileStats.size} bytes, Type: ${fileStats.isDirectory() ? 'Directory' : 'File'}`);
  });
}

function copyFile(sourcePath, destinationPath) {
  fileSystem.copyFileSync(sourcePath, destinationPath);
  console.log(`File copied from ${sourcePath} to ${destinationPath}`);
}

function renameFile(oldPath, newPath) {
  fileSystem.renameSync(oldPath, newPath);
  console.log(`File renamed from ${oldPath} to ${newPath}`);
}

function deleteFile(filePath) {
  fileSystem.unlinkSync(filePath);
  console.log(`File deleted: ${filePath}`);
}

function createNewDirectory(directoryPath) {
  fileSystem.mkdirSync(directoryPath);
  console.log(`Directory created: ${directoryPath}`);
}

function moveFilesToDirectory(filesToMove, destinationDirectory) {
  filesToMove.forEach(fileName => {
    const sourceFilePath = path.join(__dirname, fileName);
    const destinationFilePath = path.join(destinationDirectory, fileName);
    fileSystem.renameSync(sourceFilePath, destinationFilePath);
    console.log(`File moved from ${sourceFilePath} to ${destinationFilePath}`);
  });
}

// Example usage:
displayFileDetails(__dirname);
copyFile('source.txt', 'destination.txt');
renameFile('oldFile.txt', 'newFile.txt');
deleteFile('fileToDelete.txt');
createNewDirectory('newDirectory');
moveFilesToDirectory(['file1.txt', 'file2.txt'], 'destinationDirectory');
