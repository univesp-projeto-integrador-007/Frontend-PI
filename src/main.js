import { setupCalendar } from 'v-calendar';
import { createApp } from 'vue';
import VueGtag from "vue-gtag";
import App from './App.vue';
import router from './router';
import store from './store';


createApp(App).use(router).use(setupCalendar, {}).use(VueGtag, {
  config: { id: 'G-N621LL10CH' },
}, router).use(store).mount('#app')


