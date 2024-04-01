import Vue from 'vue'
// import VueGtag from 'vue-gtag'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Vue.use(VueGtag, {
//   config: { id: '288701657' } 
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
