/** @description 开发环境webpack配置 */

/** @type {import('webpack').Configuration} */

const webpackCommonConfig = {
  devServer: {
    client: {
      progress: true,
    },
    // 解决开发模式下刷新页面history路由404
    historyApiFallback: true,
    open: true,
    proxy: {},
  },
};

module.exports = webpackCommonConfig;
