const scss = require("./_client/webpack/scss");
const entry = require("./_client/webpack/entries").entry;
const aliases = require("./_client/webpack/aliases");
const paths = require('./_client/webpack/paths');
const assets = require('./_client/webpack/assets');

// entry.scss = './src/style/sass/main.scss';

console.log("Webpack entries: ", entry);

module.exports = env => ({
  watch: Boolean(env.watch),
  mode: "development",
  entry,
  devtool: 'inline-source-map',
  output: {
    path: paths.bundleDestination,
    filename: "[name]-bundle.js",
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
        use: [
          "babel-loader"
        ],
      },
      {
        test: /\.css$/,
        // exclude: / (node_modules)/, // Remove this
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      scss.rule,
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
  plugins: [...assets.plugins, ...scss.plugins],
});
