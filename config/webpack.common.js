const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const currentVersion = 'v1.0.0' 

module.exports = (env) = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules', path.resolve(__dirname, '../src')],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: `[name].bundle.${currentVersion}.js`,
    chunkFilename: `[name].bundle.${currentVersion}.js`,
    asyncChunks: true,
    publicPath: '/',    // for local web server
    //For production build: Change publicPath as per upload directory url/name eg: 'https://dummy.com/beta/ or /folderName/ 
    // publicPath: '/marco-polo-gaurav/',   
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets', 
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `[name].bundle.${currentVersion}.css`,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
    }),
  ],
};
