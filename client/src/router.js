import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cafes from './views/Cafes.vue'
import Cafe from './views/Cafe.vue'
import AddACafe from './views/AddaCafe.vue'
import Categories from './views/Categories.vue'
import UpdateCafe from './views/UpdateCafe.vue'
import AddReview from './views/AddaReview.vue'
import Login from './views/Login.vue'
import UpdatePassword from './views/UpdatePassword.vue'
import AddUser from './views/AddaUser.vue'
import AddCategory from './views/AddaCategory.vue'
import UserPage from './views/UserPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cafes',
      name: 'cafes',
      component: Cafes
    },
    {
      path: '/cafes/:id',
      name: 'cafe',
      component: Cafe
    },
    {
      path: '/addacafe',
      name: 'addacafe',
      component: AddACafe
    },
    {
      path: '/updatecafe/:id',
      name: 'updatecafe',
      component: UpdateCafe
    },
    {
      path: '/addareview/:id',
      name: 'addreview',
      component: AddReview
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/updatepassword/:id',
      name: 'updatepassword',
      component: UpdatePassword
    },
    {
      path: '/addauser',
      name: 'addauser',
      component: AddUser
    },
    {
      path: '/addacategory',
      name: 'addacategory',
      component: AddCategory
    },
    {
      path: '/userpage/:id',
      name: 'userpage',
      component: UserPage
    }
  ]
})
