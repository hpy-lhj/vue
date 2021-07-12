import Vue from 'vue'
import Router from 'vue-router'


// 页面
import home from '@/view/home/main'
import market from '@/view/market/main'
import login from '@/view/login/main'
import creation from '@/view/creation/main'
import bnb_lp from '@/view/bnb_lp/main'
import box_plan from '@/view/box_plan/main'
import nft_pledge from '@/view/nft_pledge/main'
import product_details from '@/view/product_details/main'
import payment from '@/view/payment/main'
import personal_center from '@/view/personal_center/main'
import editing_materials from '@/view/editing_materials/main'
import purchase_page from '@/view/purchase_page/main'
import message_page from '@/view/message_page/main'
import points_mall from '@/view/points_mall/main'
import others_page from '@/view/others_page/main'
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
    }, {
      path: '/bnb_lp',
      name: 'bnb_lp',
      component: bnb_lp
    }, {
      path: '/box_plan',
      name: 'box_plan',
      component: box_plan
    }, {
      path: '/nft_pledge',
      name: 'nft_pledge',
      component: nft_pledge
    }, {
      path: '/product_details',
      name: 'product_details',
      component: product_details
    }, {
      path: '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/personal_center',
      name: 'personal_center',
      component: personal_center
    },
    {
      path: '/editing_materials',
      name: 'editing_materials',
      component: editing_materials
    },
    {
      path: '/purchase_page',
      name: 'purchase_page',
      component: purchase_page
    },
    {
      path: '/message_page',
      name: 'message_page',
      component: message_page
    },
    {
      path: '/points_mall',
      name: 'points_mall',
      component: points_mall
    },
    {
      path: '/others_page',
      name: 'others_page',
      component: others_page
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition  //游览器返回记住位置
    } else {
      return { x: 0, y: 0 } //滚动到顶
    }
  }
})
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
