const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置开发武器
  devServer: {
    // 浏览器自动打开
    open: true,
    // 打开地址为本地
    // host: 'localhost',
    // 配置代理服务器 
    proxy: {
      // 标识
      '/api': {
        // 目标地址
        target: 'http://1.116.64.64:5004/api2',
        // 允许跨域
        changeOrigin: true,
        // 重写
        pathRewrite: {
          '^/api': ''
        }
      }
    }

  }
})


