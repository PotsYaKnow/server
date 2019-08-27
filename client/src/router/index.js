import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import SignUp from '@/components/SignUp.vue'
import Login from '@/components/Login.vue'
import PotCreation from '@/components/pot/PotCreation.vue'
import PotEditing from '@/components/pot/PotEditing.vue'

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
    path: '/pot/create',
    name: 'create-pot',
    component: PotCreation
  },
  {
    path: '/pot/edit/:potId',
    name: 'edit-pot',
    component: PotEditing
  },
  {
    path: '/studio',
    name: 'index',
    component: Index
  },
  {
    path: '',
    redirect: { name: 'index' }
  }
]

export default new Router({
  routes
})
