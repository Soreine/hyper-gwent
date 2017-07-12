const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config');

module.exports = Object.assign({}, baseConfig, {
  entry: path.resolve(__dirname, './src/website'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'website.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hyper Gwent',
    }),
  ],
});
