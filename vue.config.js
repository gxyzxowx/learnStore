/*
 * @Date         : 2019-12-11 16:50:10
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-06-11 17:56:45
 * @FilePath     : \learnstore\vue.config.js
 */
module.exports = {
  // devServer: {
  //   proxy: {
  //     '/tsms': {
  //       target: 'http://106.13.31.103:8082/agt-rest/tsms',
  //       // target: 'http://106.13.31.103:8082/agt-rest/app',
  //       changeOrigin: true,
  //       ws: true,
  //       pathRewrite: {
  //         '^/tsms': ''
  //       }
  //     }
  //   }
  // },
  publicPath: '/code/',
  // 解决scss文件全局引入的问题
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: './src/assets/scss/init.scss'
        })
        .end()
    })
  }
}
