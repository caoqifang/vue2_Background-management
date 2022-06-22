const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置开发武器
  devServer: {
    // 浏览器自动打开
    open: true,
    // 打开地址为本地
    host: 'localhost'
  }
})
