/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
//先声明使用VueRouter
Vue.use(VueRouter)

export default new VueRouter({
//配置应用中的所有路由
  routes:[
    {
      path:'/about',
      component:'About'
    },
    {
      path:'/home',
      component:'Home'
    }
  ]
})
