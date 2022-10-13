/* eslint-disable no-undef */

const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  target: "web",
  entry: {
    main: ["./src/index.js", "./src/styles/index.scss"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    filename: "[name].js?v=[fullhash]",
  },
  devServer: {
    host: "0.0.0.0",
    port: 3001,
    historyApiFallback: true,
    https: false,
    open: true,
  },
  devtool: "source-map",
  resolve: {
    extensions: [".jsx", ".js"],
    modules: [path.join(__dirname, "src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        include: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          process.ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/assets/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css?v=[fullhash]",
    }),
  ],
};
