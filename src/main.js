import Vue from 'vue'
import App from './App.vue'
import { fabric } from "fabric";

Vue.use(fabric)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
