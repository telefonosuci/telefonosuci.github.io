const path = require("path");
const root = require("./paths").root;

console.log("Root path is: ", root);
module.exports = {
  "@": path.resolve(root, "src"),
  "@App": path.resolve(root, "app"),
};
