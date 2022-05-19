import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
