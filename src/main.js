import Vue from 'vue'
import App from './App.vue'   //App根组件
import router from './router'
import './plugins/element.js'
import './assets/CSS/global.css'
import axios from 'axios'   //引入axios
axios.defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/'
//'http://127.0.0.1:8888/api/private/v1/'  这个地址是自己电脑本地的后台
Vue.prototype.$http = axios    //把axios挂载到vue上

Vue.config.productionTip = false

new Vue({
  router,     //将路由router挂载在实例上
  render: h => h(App)   //通过render函数将App根组件渲染到页面上
}).$mount('#app')
