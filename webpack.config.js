const path = require('path');

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
  devtool: 'source-map',
  externals: ['vue'],
};
