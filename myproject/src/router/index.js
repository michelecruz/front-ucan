import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BCard from 'bootstrap-vue/es/components/card/card'
import BCardBody from 'bootstrap-vue/es/components/card/card-body'
import BCardFooter from 'bootstrap-vue/es/components/card/card-footer'
import BCardHeader from 'bootstrap-vue/es/components/card/card-header'
import BCardImg from 'bootstrap-vue/es/components/card/card-img'
import BTable from 'bootstrap-vue/es/components/table/table'
import Image from 'bootstrap-vue/es/components/image'
Vue.use(Image)
Vue.component('b-card', BCard)
Vue.component('b-card-body', BCardBody)
Vue.component('b-card-footer', BCardFooter)
Vue.component('b-card-header', BCardHeader)
Vue.component('b-card-img', BCardImg)
Vue.component('b-table', BTable)
Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
  ]
})
