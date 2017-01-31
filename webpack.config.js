const path = require('path');
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies

// const uglifyConfigProd = {
  // sourceMap: true,
  // beautify: false,
  // comments: false,
  // compress: {
    // warnings: false,
  // },
  // mange: {
    // except: ['webpackJsonp'],
  // },
// };

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
          plugins: [
            'transform-object-rest-spread',
            'transform-flow-strip-types',
            'transform-vue-jsx',
          ],
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(uglifyConfigDev),
  ],
  devtool: 'source-map',
  externals: ['vue'],
};
