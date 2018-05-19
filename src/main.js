import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Create an instance of Vue
new Vue({
  render: h => h(App)
}).$mount('#app');
