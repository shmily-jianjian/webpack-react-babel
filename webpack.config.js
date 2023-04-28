const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./config/webpack.common');
const webpackDevConfig = require('./config/webpack.dev');
const webpackProdConfig = require('./config/webpack.prod');

/** @type {import('webpack').Configuration} */

const isDev = process.env.NODE_ENV === 'development';

const config = isDev
  ? merge(webpackCommonConfig, webpackDevConfig)
  : merge(webpackCommonConfig, webpackProdConfig);

module.exports = config;
