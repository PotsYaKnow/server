import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'index',
    component: Index
  }
]

export default new Router({
  routes
})
