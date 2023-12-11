import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import product from '../views/product.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import collection from '../views/collection.vue'
import detailproduct from '@/views/detailproduct.vue'
import wishlist from '../views/wishlist.vue'
import productnouser from '../views/productnouser.vue'
import homenouser from '../views/homenouser.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home//:userId/:identifier/:jwt',
      name: 'home',
      component: home
    },
    {
      path: '/product//:userId/:identifier/:jwt',
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
      path: '/collection/:userId/:identifier/:jwt',
      name: 'collection',
      component: collection
    }
    ,
    {
      path: '/wishlist/:userId/:identifier/:jwt',
      name: 'wishlist',
      component: wishlist
    }
    ,
    {
      path: '/detailproduct/:id',
      name: 'detailproduct',
      component: detailproduct
    }
    ,
    {
      path: '/productnouser',
      name: 'productnouser',
      component: productnouser
    }
    ,
    {
      path: '/homenouser',
      name: 'homenouser',
      component: homenouser
    }

  ]
})

export default router
