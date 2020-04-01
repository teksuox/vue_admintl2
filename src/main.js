import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vSelect from 'vue-select'
import "vue-select/src/scss/vue-select.scss";

Vue.config.productionTip = false
Vue.component('v-select', vSelect)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
