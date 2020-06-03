/*
 * @Date         : 2020-06-02 10:55:24
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-06-02 16:52:52
 * @FilePath     : \learnstore\src\main.js
 * @Description  : 学习资料
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入rem.js
import '@/assets/js/rem.js'
// 引入公共函数
import CM from '@/assets/js/cm.js'
Vue.config.productionTip = false
Vue.prototype.WR = CM

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
