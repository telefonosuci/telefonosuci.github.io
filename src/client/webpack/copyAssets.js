const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin"); // eslint-disable-line import/no-extraneous-dependencies
const { root } = require("./rootPath");

const sourcePath = path.join(root, "src/assets");
const destPath = path.resolve(root, "../assets");

module.exports = {
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: sourcePath,
          to: destPath,
        },
      ],
    }),
  ],
};
