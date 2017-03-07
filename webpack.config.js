const path = require('path');
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies

const prod = process.env.NODE_ENV === 'production';

const uglifyConfigProd = {
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
};

const uglifyConfigDev = {
  sourceMap: true,
  beautify: true,
  comments: true,
};

module.exports = {
  cache: true,
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vuedux.js',
    sourceMapFilename: 'vuedux.js.map',
    library: 'vuedux',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(
        prod ? uglifyConfigProd : uglifyConfigDev
    ),
  ],
  devtool: 'source-map',
  externals: ['vue'],
};
