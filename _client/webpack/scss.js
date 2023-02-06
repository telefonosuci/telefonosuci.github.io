const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  rule: {
    test: /\.(scss|sass|css)$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      { loader: 'css-loader', options: { url: false, sourceMap: true } },
      { loader: 'sass-loader', options: { sourceMap: true } },  
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
};
