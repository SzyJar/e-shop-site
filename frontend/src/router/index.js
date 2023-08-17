import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: `/about`,
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue')
  },
  {
    path: `/products`,
    name: 'products',
    component: () => import('../views/Products.vue')
  },
  {
    path: `/manage`,
    name: 'manage',
    component: () => import('../views/Manage.vue')
  },
  {
    path: `/cart`,
    name: 'cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: `/login`,
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: `/register`,
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: `/logout`,
    name: 'logout',
    component: () => import('../views/Logout.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'hash',
  routes
})

export default router
