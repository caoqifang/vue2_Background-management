import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入字体图标库样式
import 'font-awesome/css/font-awesome.min.css'
// 引入eleui组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入未封装的axios （后续封装）
// import axios from 'axios'
// 引入二次封装的axios
import axios from '@/http/req'
Vue.use(ElementUI)
Vue.config.productionTip = false
// axios挂载到原型上
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
