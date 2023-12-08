import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import product from '../views/product.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import collection from '../views/collection.vue'
import Les_réseaux from '../views/Les_réseaux.vue'
import User from '../views/User.vue'
import wishlist from '../views/wishlist.vue'


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
    ,
    {
      path: '/Les_réseaux',
      name: 'Les_réseaux',
      component: Les_réseaux
    }
    ,
    {
      path: '/User',
      name: 'User',
      component: User
    }
    ,
    {
      path: '/wishlist',
      name: 'wishlist',
      component: wishlist
    }

  ]
})

export default router
