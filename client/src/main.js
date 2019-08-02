// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import '@/assets/css/tailwind.css'
import Panel from '@/components/global/Panel'

Vue.config.productionTip = false

sync(store, router)


Vue.component('panel', Panel)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
