 /* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './routes'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './static/reset.css'

Vue.use(ElementUI);

Vue.config.productionTip = false;

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

