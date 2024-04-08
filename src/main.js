import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { setupCalendar } from 'v-calendar';
import VueGtag from "vue-gtag";


// Vue.use(VueAnalytics, {
//   id: '288701657'
// })

createApp(App).use(router).use(setupCalendar, {}).use(VueGtag, {
  config: { id: '288701657' },
}, router).use(store).mount('#app')


