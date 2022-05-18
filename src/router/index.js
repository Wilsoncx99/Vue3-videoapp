import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
