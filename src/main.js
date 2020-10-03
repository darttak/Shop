import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

Vue.config.productionTip = false;

var eventBus = new Vue();
Vue.prototype.$eventBus = eventBus;

Vue.prototype.$axios = axios;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
