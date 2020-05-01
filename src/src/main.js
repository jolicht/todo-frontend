import Vue from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios";
import Axios from "axios";

Vue.config.productionTip = false
Vue.use(VueAxios, Axios);

new Vue({
  render: h => h(App),
}).$mount('#app')
