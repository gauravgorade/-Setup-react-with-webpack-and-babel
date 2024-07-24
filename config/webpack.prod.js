const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/marco-polo-gaurav/',
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '../config/.prod.env'),
    })
  ],
});
