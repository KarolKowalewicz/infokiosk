const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
  mode: process.env.NODE_ENV || "development",
  resolve: {
      extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
  },
  devServer: { 
    contentBase: path.join(__dirname, "src"),
    historyApiFallback: true,
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: ["babel-loader"],
          },
          {
              test: /\.(ts|tsx)$/,
              exclude: /node_modules/,
              use: ["ts-loader"],
          },
          {
              test: /\.(css|scss)$/,
              use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
              test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
              use: ["file-loader"],
          },
      ],
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: path.join(__dirname, "src", "../public/index.html"),
      }),
  ],
}