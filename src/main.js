import Vue from 'vue'
import App from './App.vue'
import router from './router'
import rem from './rem'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './http/api';
import http from './http/http';
import axios from 'axios'
import qs from 'qs';
import loginData from './libs/loginData';
import { Loading } from 'element-ui';
import VueI18n from 'vue-i18n'

Vue.use(VueI18n) // 挂载

const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  messages: {
    'zh-CN': require('./lang/zh'),   // 通过require引入中文语言包
    'en-US': require('./lang/en')    // 通过require引入英文语言包
  }
})
// 对后端接口 进行全局注册
Vue.prototype.$api = api;
Vue.prototype.$qs = qs
Vue.prototype.$loginData = loginData
// Vue.prototype.$loginData = loginData;
// 对请求方式 进行全局注册
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  router,
  rem,
  i18n,
  
}).$mount('#app')
