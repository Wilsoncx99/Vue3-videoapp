import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login/Login.vue'
import Register from '../views/Register/Register.vue'
import Home from '../views/Home/Home.vue'
import Leavecenter from '../views/Leavecenter/Leavecenter.vue'
import Shopcenter from '../views/Shopcenter/Shopcenter.vue'
import Mine from '../views/Mine/Mine.vue'
import Accountinfo from '../views/Mine/Accountinfo.vue'
import Changename from '../views/Mine/Changename.vue'
import Changeinfo from '../views/Mine/Changeinfo.vue'
import Changebday from '../views/Mine/Changebday.vue'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    // beforeEnter(to, from, next) {
    //   const isLogin = localStorage.isLogin
    //   isLogin ? next({ name: 'Home' }) : next()
    // }
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
    // beforeEnter(to, from, next) {
    //   const isLogin = localStorage.isLogin
    //   isLogin ? next({ name: 'Home' }) : next()
    // }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Shopcenter',
    name: 'Shopcenter',
    component: Shopcenter
  },
  {
    path: '/Leavecenter',
    name: 'Leavecenter',
    component: Leavecenter
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/Accountinfo',
    name: 'Accountinfo',
    component: Accountinfo
  },
  {
    path: '/Changename',
    name: 'Changename',
    component: Changename
  },
  {
    path: '/Changeinfo',
    name: 'Changeinfo',
    component: Changeinfo
  },
  {
    path: '/Changebday',
    name: 'Changebday',
    component: Changebday
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin;
  if (!isLogin && (to.name !== 'Login' && to.name !== "Register")) {
    next({ name: 'Login' });
  } else {
    next()
  }
})

export default router
