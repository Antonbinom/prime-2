<template>
  <div id="app">
    <ConfirmPopup></ConfirmPopup>
    <Toast />
    <CranForm/>
  </div>
</template>

<script>
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-dark-teal/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import Toast from "primevue/toast";
import ConfirmPopup from "primevue/confirmpopup";
import CranForm from "@/components/CranForm.vue";

export default {
  name: "App",
  components: {
    Toast,
    ConfirmPopup,
    CranForm
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
}
</style>
