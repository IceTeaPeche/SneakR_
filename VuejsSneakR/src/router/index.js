import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/idk.vue'
import Products from '../views/Products.vue'
import Home_admin from '../views/Home_admin.vue'
import Home_user from "../views/Home.vue";
import add from "../views/add.vue";
import login from "../views/login.vue";
import creercompte from "../views/creercompte.vue";
import edit from "../views/edit.vue";
import users from "../views/users.vue";
import categories from "../views/categories.vue";
import add_category from "../views/add_category.vue";
import edit_category from "../views/edit_category.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/home_user",
      name: "home_user",
      component: Home_user,
    },
    {
      path: "/admin",
      name: "admin",
      component: Home_admin,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/add",
      name: "add",
      component: add,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/creercompte",
      name: "creercompte",
      component: creercompte,
    },
    {
      path: "/edit/:name/:id/:price/:categories/:description",
      name: "edit",
      component: edit,
    },
    {
      path: "/users",
      name: "users",
      component: users,
    },
    {
      path: "/categories",
      name: "categories",
      component: categories,
    },
    {
      path: "/add_category",
      name: "add_category",
      component: add_category,
    },
    {
      path: "/edit_category/:name/:id",
      name: "edit_category",
      component: edit_category,
    },
  ],
});

export default router
