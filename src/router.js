import Vue from 'vue'
import Router from 'vue-router'


// 页面
import home from '@/view/home/main'
import market from '@/view/market/main'
import login from '@/view/login/main'
import creation from '@/view/creation/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/market',
      name: 'market',
      component: market
    },
    {
      path: '/creation',
      name: 'creation',
      component: creation
    }
  ]
})
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
