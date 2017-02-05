const path = require('path');
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies

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
        process.env.NODE_ENV === 'production'
        ? uglifyConfigProd
        : uglifyConfigDev
    ),
  ],
  devtool: 'source-map',
  externals: ['vue'],
};
