import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: '288701657'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
