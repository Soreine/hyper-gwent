const path = require('path');

module.exports = {
  entry: {
    content: path.resolve(__dirname, './src/extension/content.js'),
    options: path.resolve(__dirname, './src/extension/options.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist/chrome'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
};
