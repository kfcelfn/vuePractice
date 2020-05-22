import Vue from 'vue'
import App from '@/views/app'
import store from './store'
import router from './router'

Vue.config.devtools = true;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
