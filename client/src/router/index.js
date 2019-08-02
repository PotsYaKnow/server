import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import SignUp from '@/components/SignUp.vue'

Vue.use(Router)

const routes = [{
    path: '/signup',
    name: 'signup',
    component: SignUp
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
