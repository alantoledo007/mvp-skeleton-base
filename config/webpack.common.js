const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
    publicPath: '',
  },
  mode: 'production',
  module: {
    rules: [
      {
        use: [{ loader: 'babel-loader' }],
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        type: 'asset',
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../src/components'),
      styles: path.resolve(__dirname, '../src/styles'),
      assets: path.resolve(__dirname, '../src/assets'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
