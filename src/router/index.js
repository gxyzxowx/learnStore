/*
 * @Date         : 2020-06-02 10:55:24
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-06-03 09:32:45
 * @FilePath     : \learnstore\src\router\index.js
 * @Description  :
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
