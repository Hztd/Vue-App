import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './components/app'
import about from './components/about'
import home from './components/home'
import message from './components/message'
import news from './components/news'
import messageDetail from './components/messageDetail'

//声明使用插件
Vue.use(VueRouter)
//创建路由对象
const router = new VueRouter({
  linkActiveClass:'active',
  history:true
})
//映射路由
router.map({
  '/about':{component:about},
  '/home':{component: home,
    subRoutes:{
    '/medtail/:id':{component:messageDetail}
    }
  }

})
//启动应用
router.start(app,'#routerTest')
//初始化请求指定路由
router.go('/about')
