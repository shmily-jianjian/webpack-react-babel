/** @description webpack公共配置 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const path = require('path');
// speed-measure-webpack-plugin这个插件很久没维护了，加上normalModuleLoader这个勾子已经废弃了
// speed-measure-webpack-plugin和MiniCssExtractPlugin插件会冲突
// 在github上看到这个插件所以替换这个了
const TimeAnalyticsPlugin = require('time-analytics-webpack-plugin').TimeAnalyticsPlugin;

/** @type {import('webpack').Configuration} */

const webpackCommonConfig = {
  mode: process.env.NODE_ENV,
  output: {
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: [/node_modules/],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(j|t)s(x)?$/,
        exclude: [/node_modules/],
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new WebpackBar({
      color: '#85d',
    }),
  ],
  // 设置控制台展示的信息
  stats: {
    // 不输出信息
    preset: 'errors-warnings',
    // 输出dist目录下的文件信息(文件夹信息不输出)
    assets: true,
    version: true,
  },
};

module.exports = TimeAnalyticsPlugin.wrap(webpackCommonConfig);
