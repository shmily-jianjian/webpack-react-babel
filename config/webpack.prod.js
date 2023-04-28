/** @description 生产环境webpack配置 */
const CsMinizerWebapckPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('webpack').Configuration} */

const webpackCommonConfig = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
  ],
  optimization: {
    minimizer: ['...', new CsMinizerWebapckPlugin()],
  },
};

module.exports = webpackCommonConfig;
