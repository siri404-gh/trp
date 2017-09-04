const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { entry, dist, karma_coverage_dir, prod, log_dir } = require('../variables');

module.exports = {
  entry: {
    app: entry
  },
  output: {
    path: path.resolve(__dirname, '.'+dist),
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [path.join(__dirname, 'components'), 'node_modules']
  },

  plugins: [
    new CleanWebpackPlugin([dist, prod, karma_coverage_dir, log_dir])
  ],

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015'] } },
      // { test: /\.less$/, use: ['style-loader', 'css-loader?modules', 'postcss-loader',], exclude: /node_modules/ },
      // { test: /\.css$/, use: ['style-loader', 'css-loader',]},
      // { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      // { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      // { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
      // { test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/ },
      // { test: /^((?!config).)*\.js?$/, exclude: /node_modules/, loader: 'babel-loader?cacheDirectory' },
      // { test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot)$/, loader: 'file-loader', exclude: /node_modules/ }
    ]
  },
  stats: {
    warnings: false
  }
}
