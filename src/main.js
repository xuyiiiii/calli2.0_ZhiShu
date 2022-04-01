// import Vue from 'vue'
// import App from './App.vue'
//
// Vue.config.productionTip = false
//
// new Vue({
//   render: h => h(App),
// }).$mount('#app')


import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import axios from 'axios'
import '@/assets/font/font.css';


Vue.prototype.$ajax = axios
Vue.prototype.$axios = axios;


// axios.defaults.baseURL = '/index';
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // render: h => h(App)
});