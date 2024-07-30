<template>
  <div id="app">
    <h3 class="text-3xl">Заголовок Формы</h3>
    <div class="col-3 bg-primary">
      <div class="flex align-items-center justify-content-between mb-5">
        <label class="text-xl" for="input-1">Название инпута</label>
        <InputNumber
          id="input-1"
          v-model="value"
          :minFractionDigits="1"
          :maxFracionDigits="2"
          :useGrouping="false"
          min="0"
          max="10"
        />
      </div>
      <div class="flex align-items-center justify-content-between mb-5">
        <label class="text-xl" for="input-1">Название инпута</label>
        <InputNumber
          id="input-1"
          v-model="value"
          :minFractionDigits="1"
          :maxFracionDigits="2"
          :useGrouping="false"
          min="0"
          max="10"
        />
      </div>
      <div class="flex align-items-center justify-content-between mb-5">
        <label class="text-xl" for="input-1">Название инпута</label>
        <InputNumber
          id="input-1"
          v-model="value"
          :minFractionDigits="1"
          :maxFracionDigits="2"
          :useGrouping="false"
          min="0"
          max="10"
        />
      </div>
      <div class="flex align-items-center justify-content-between mb-5">
        <label class="text-xl" for="input-1">Название инпута</label>
        <InputNumber
          id="input-1"
          v-model="value"
          :minFractionDigits="1"
          :maxFracionDigits="2"
          :useGrouping="false"
          min="0"
          max="10"
        />
      </div>
      <div class="flex align-items-center justify-content-between">
        <label class="text-xl" for="input-1">Название инпута</label>
        <SelectButton v-model="select" :options="options" />
      </div>
    </div>
  </div>
</template>

<script>
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-dark-teal/theme.css";
import "primeflex/primeflex.css";
import InputNumber from "primevue/inputnumber";
import SelectButton from "primevue/selectbutton";

export default {
  name: "App",
  components: {
    InputNumber,
    SelectButton,
  },
  data() {
    return {
      value: "",
      select: "Wi-Fi",
      options: ["Wi-Fi", "Modem"],
    };
  },
};
</script>

<style>
#app {
  /* background: #000; */
}
</style>
