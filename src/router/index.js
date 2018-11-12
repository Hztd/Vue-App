/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Message from '../views/Message'
//先声明使用VueRouter
Vue.use(VueRouter)

export default new VueRouter({
//配置应用中的所有路由
  routes:[
    {//一级路由
      path:'/about',
      component:'About'
    },
    {
      path:'/home',
      component:'Home',
      children:[//子路由
        {
          path:'/home/news',//路径左侧 项目根路径
          component:News
        },
        {
          path:'/message',
          component:Message
        }
      ]
    },
    {
      path:'/',
      component:'about'
    }
  ]
})
