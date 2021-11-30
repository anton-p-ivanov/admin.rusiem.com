const Dotenv = require("dotenv-webpack");

const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '.env.development'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
});
