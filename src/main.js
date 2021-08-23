import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import VueSocialSharing from 'vue-social-sharing'
import {registerBaseComponents} from '@/helpers/registerBaseComponents'
registerBaseComponents(Vue)
Vue.use(VueSocialSharing)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
