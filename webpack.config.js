const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
  },
  devServer: {
    contentBase: "./dist",
  },
  resolve: {
    alias: {
      Class: path.resolve(__dirname, "src/assets/class/"),
      Function: path.resolve(__dirname, "src/assets/functions/"),
      Service: path.resolve(__dirname, "src/assets/services/"),
      Image: path.resolve(__dirname, "src/assets/images/"),
      API: path.resolve(__dirname, "src/assets/API/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: "localhost",
      port: 3000,
      server: { baseDir: ["./dist"] },
    }),
  ],
};