import Vue from "vue";
import App from "./App.vue";
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import PrimeVue from "primevue/config";

Vue.config.productionTip = false;

Vue.use(PrimeVue);
Vue.use(ToastService);
Vue.use(ConfirmationService);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
