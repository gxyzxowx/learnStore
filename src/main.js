/*
 * @Date         : 2020-06-02 10:55:24
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-06-03 10:28:51
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
Vue.prototype.CM = CM

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
