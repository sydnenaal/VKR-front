const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");

const paths = require("./paths");
const getClientEnvironment = require("./env");

const env = getClientEnvironment("");

module.exports = {
  entry: paths.appIndexJs,
  output: {
    path: paths.appBuild,
    filename: "index_bundle.js",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [paths.packagesSrc, paths.appSrc, paths.modulesSrc],
        loader: "babel-loader",
        options: { configFile: "./config/babel.config.json" },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [{ loader: "svg-url-loader", options: { limit: 10000 } }],
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      favicon: paths.appFavicon,
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    new webpack.DefinePlugin(env.stringified),
  ],
};
