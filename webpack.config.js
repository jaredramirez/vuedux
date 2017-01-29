const path = require('path');
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  cache: true,
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'vuedux',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
          plugins: ['transform-object-rest-spread'],
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true,
      },
      mange: {
        except: ['webpackJsonp'],
      },
    }),
  ],
  devtool: 'source-map',
  externals: ['vue'],
};
