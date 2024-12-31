//webpack.prod.js
const { merge } = require('webpack-merge');
const path = require("path"); // Import the path module
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: 'main.[contenthash].js',  // Cache-busting filename
    path: path.resolve(__dirname, "dist"),
    publicPath: "./", // Ensures assets are loaded correctly from relative paths

  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },  
});