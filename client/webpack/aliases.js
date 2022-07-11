const path = require("path");
const rootPath = require("./rootPath").root;

console.log("Root path is: ", rootPath);
module.exports = {
  "@": path.resolve(rootPath, "src"),
  "@App": path.resolve(rootPath, "app"),
};
