import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import StoreHours from './components/StoreHours.vue';

Vue.config.productionTip = false;

Vue.component('store-hours', StoreHours);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
