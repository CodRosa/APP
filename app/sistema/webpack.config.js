const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: '../src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'www'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../src/index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'www'),
    compress: true,
    port: 8080,
  },
};
