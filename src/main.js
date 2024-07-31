import Vue from "vue";
import App from "./App.vue";
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import PrimeVue from "primevue/config";
import Tooltip from 'primevue/tooltip';

Vue.config.productionTip = false;

Vue.use(PrimeVue);
Vue.use(ToastService);
Vue.use(ConfirmationService);
Vue.directive('tooltip', Tooltip);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
