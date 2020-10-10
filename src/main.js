import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import Modal from './components/Others/Modal.vue'

Vue.config.productionTip = false;

var eventBus = new Vue();
Vue.prototype.$eventBus = eventBus;

Vue.prototype.$axios = axios;

Vue.component('modal', Modal);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
