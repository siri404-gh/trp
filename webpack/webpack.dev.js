const webpack = require('webpack');
const path = require('path');
const Merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CommonConfig = require('./webpack.common.js');

const { entry, dist, devPort } = require('../variables');

module.exports = Merge(CommonConfig, {
  devtool: 'inline-source-map',
  entry: {
    app: ['react-hot-loader/patch', entry],
  },
  output: {
    path: path.resolve(__dirname, '.'+dist),
    filename: '[name].bundle.js',
    publicPath: '/',
    sourceMapFilename: '[name].map'
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, '.'+dist),
    port: devPort,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: '/',
    // proxy: {
    //   "**": "http://localhost:5000"
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.ejs'
    }),
    new ManifestPlugin({
      fileName: '.manifest.json',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
});
