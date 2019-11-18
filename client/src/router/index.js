import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import SignUp from '@/components/user/SignUp.vue'
import Login from '@/components/user/Login.vue'
import PotCreation from '@/components/pot/PotCreation.vue'
import PotEditing from '@/components/pot/PotEditing.vue'
import PotHistory from '@/components/pot/PotHistory.vue'
import PotHistoryEditing from '@/components/pot/PotHistoryEditing.vue'

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
    path: '/pot/edit/history/:potHistoryId',
    name: 'edit-pothistory',
    component: PotHistoryEditing
  },
  {
    path: '/pot/view/:potId',
    name: 'view-pot',
    component: PotHistory
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
