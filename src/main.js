import Vue from 'vue'
import { Button, Form, Input, FormItem, Message, Table, TableColumn, Dialog } from 'element-ui';
import App from '@/views/app'
import store from './store'
import router from './router'

Vue.config.devtools = true;
Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);

Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
