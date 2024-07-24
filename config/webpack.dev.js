const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    compress: true,
    port: 8080,
    historyApiFallback: true,
    open: true, // Optional: Opens the browser when server starts
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '../config/.dev.env'),
    })
  ],
});
