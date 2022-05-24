import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login/Login.vue'
import Register from '../views/Register/Register.vue'
import Home from '../views/Home/Home.vue'
import Mine from '../views/Mine/Mine.vue'
import Setting from '../views/Mine/Setting.vue'
import Accountinfo from '../views/Mine/Accountinfo.vue'
import Changename from '../views/Mine/Changename.vue'
import Changesex from '../views/Mine/Changesex.vue'
import Changebday from '../views/Mine/Changebday.vue'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next) {
      const isLogin = localStorage.isLogin
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
    beforeEnter(to, from, next) {
      const isLogin = localStorage.isLogin
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/Setting',
    name: 'Setting',
    component: Setting
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
    path: '/Changesex',
    name: 'Changesex',
    component: Changesex
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
