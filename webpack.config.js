const path = require("path");
// const scss = require("./client/webpack/scss");
const entry = require("./client/webpack/entries").entry;
const aliases = require("./client/webpack/aliases");
// const copyAssets = require('./client/webpack/copyAssets');

// entry.scss = './src/style/sass/main.scss';

console.log("Webpack entries: ", entry);

module.exports = {
  watch: true,
  mode: "development",
  entry,
  devtool: 'inline-source-map',
  output: {
    path: path.resolve("assets"),
    filename: "[name]-page-bundle.js",
  },
  resolve: {
    alias: aliases,
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      // scss.rule,
      /*
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        options: 'url-loader?limit=100000'
      },
      */
     /* 
      {
        test: /\.(woff(2)?|ttf|eot|jpg|jpeg|png|)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
      */
    ]
  },
  // plugins: [...scss.plugins, ...copyAssets.plugins],
};
