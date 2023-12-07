import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import product from '../views/product.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import collection from '../views/collection.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
    ,
    {
      path: '/register',
      name: 'register',
      component: register
    }
    ,
    {
      path: '/collection',
      name: 'collection',
      component: collection
    }
  ]
})

export default router
