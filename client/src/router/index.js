import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import SignUp from '@/components/SignUp.vue'
import Login from '@/components/Login.vue'

Vue.use(Router)

const routes = [{
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    name: 'index',
    component: Index
  }
]

export default new Router({
  routes
})
