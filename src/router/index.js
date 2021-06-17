import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    // component: Home
    redirect: '/login'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 代表从哪个路径跳转而来
  //next 是一个函数，表示放行
  //next() 放行    next('/login') 强制跳转

  if (to.path === '/login') return next()   //如果访问路径是登录页面，则直接放行
  //如果不是，则获取token，如果存在则转去想要去的页面，如果不存在则强制转去登录页面
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/login')
  next()

})

export default router
