const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')

const { appBuild, appIndexJs, appSrc, packagesSrc, modulesSrc, appHtml, appFavicon } = require('./paths')
const getClientEnvironment = require('./env')

const env = getClientEnvironment('')

module.exports = {
  entry: appIndexJs,
  output: {
    path: appBuild,
    filename: 'index_bundle.js',
  },
  devServer: { historyApiFallback: true },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [packagesSrc, appSrc, modulesSrc],
        loader: 'babel-loader',
        options: { configFile: './config/babel.config.json' },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }],
        sideEffects: true,
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [{ loader: 'svg-url-loader', options: { limit: 10000 } }],
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: appHtml, favicon: appFavicon }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    new webpack.DefinePlugin(env.stringified),
  ],
}
