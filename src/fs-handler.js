const fs = require("fs");

const checkIfFileExists = (filePath) => {
  try {
    fs.accessSync(filePath, fs.constants.R_OK);
    return true;
  } catch (error) {
    return false;
  }
};

const checkIfDirectoryExists = (dirPath) => {
  return fs.existsSync(dirPath);
};

module.exports = {
  readFileSync: fs.readFileSync,
  checkIfFileExists,
  checkIfDirectoryExists,
};
