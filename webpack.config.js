const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "development",
  target: "web",
  entry: {
    bundle: "./src/index",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "",
    filename: "[name].js?v=[fullhash]",
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
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
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
