<template>
  <div id="app">
    <!-- В корень App -->
    <ConfirmPopup></ConfirmPopup>
    <Toast />
    <!--  -->

    <div class="cran-form">
      <div
        v-for="(settings, settingsName) in settingsSections"
        :key="settingsName"
        class="mx-auto surface-100 border-round-lg p-4 lg:col-3 mb-3 flex flex-column"
      >
        <h4 class="lg:text-2xl text-xl m-0 text-700 text-center">
          {{ settings.title }}
        </h4>
        <Divider />
        <div
          v-for="input in settings.inputs"
          :key="input.id"
          class="flex align-items-center justify-content-between mb-4"
        >
          <label class="text-base text-700 mr-2" :for="input.id">{{
            input.label
          }}</label>
          <InputNumber
            v-if="input.type === 'Int' || input.type === 'Float'"
            v-model="input.value"
            :id="input.id"
            locale="en-US"
            :minFractionDigits="input.type === 'Float' ? 1 : 0"
            :useGrouping="false"
            :placeholder="input.placeholder"
            :suffix="input.suffix"
            :disabled="isLoading || input.readonly"
          />
          <InputText
            v-if="input.type === 'String'"
            v-model="input.value"
            :id="input.id"
            :name="input.name"
            :class="!input.value ? 'p-invalid' : ''"
            :placeholder="input.placeholder"
            autocomplete="off"
            maxlength="12"
            minlength="1"
            type="text"
          />
          <Password
            v-if="input.type === 'Password'"
            v-model="input.value"
            :id="input.id"
            :class="!input.value ? 'p-invalid' : ''"
            :placeholder="input.placeholder"
            autocomplete="off"
            :feedback="false"
            toggleMask
          />
          <InputSwitch
            v-if="input.type === 'Boolean'"
            v-model="input.value"
            :id="input.id"
            class="mr-3"
          />
        </div>
        <div
          v-if="settingsName === 'power'"
          class="flex align-items-center justify-content-between mb-4"
        >
          <span class="text-base text-700 mr-2">Сброс питания 'Пульс +12'</span>
          <Button
          label="Выполнить"
          :disabled="isLoading"
          class="p-button-success p-button-sm"
          @click="onSubmit(settings)"
          />
        </div>
        <div
          v-if="settingsName === 'power'"
          class="flex align-items-center justify-content-between mb-4"
        >
          <span class="text-base text-700 mr-2">Сброс питания 'MDB</span>
          <Button
          label="Выполнить"
          :disabled="isLoading"
          class="p-button-success p-button-sm"
          @click="onSubmit(settings)"
          />
        </div>
        <Button
          v-if="settingsName === 'power'"
          label="Обновить"
          :disabled="isLoading"
          class="p-button-success"
          @click="onSubmit(settings)"
        />
        <Button
          v-else-if="settingsName === 'defaultSettings'"
          label="Применить"
          class="p-button-danger"
          :disabled="isLoading"
          @click="onReset($event)"
        />
        <Button
          v-else
          label="Применить"
          class="p-button-success"
          :disabled="isLoading"
          @click="onSubmit(settings)"
        />
        <InlineMessage v-if="settingsName==='network' && settings.isInvalid" class="mt-3">Заполните поля</InlineMessage>
      </div>
    </div>
  </div>
</template>

<script>
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-dark-teal/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import Toast from "primevue/toast";
import Divider from "primevue/divider";
import InputSwitch from "primevue/inputswitch";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import ConfirmPopup from "primevue/confirmpopup";
import InlineMessage from 'primevue/inlinemessage';
import { machineCranSettings } from "@/data";

export default {
  name: "App",
  components: {
    InputNumber,
    Button,
    Toast,
    Divider,
    InputSwitch,
    InputText,
    Password,
    ConfirmPopup,
    InlineMessage
  },
  data() {
    return {
      value: 0,
      select: "Wi-Fi",
      options: ["Wi-Fi", "Modem"],
      settingsSections: {},
      isLoading: false,
    };
  },
  methods: {
    onSubmit(settings) {
      if("isInvalid" in settings) {
        const isFormInvalid = settings.inputs.some(input => input.isRequired && input.value==='');
        if(isFormInvalid) return settings.isInvalid = true
        settings.isInvalid = false
      }
      this.isLoading = true;
      this.$toast.add({
        severity: "info",
        summary: "Отправка данных",
        detail: "Это может занять какое то время",
        life: 3000,
      });
      setTimeout(() => {
        this.isLoading = false;
        this.$toast.add({
          severity: "success",
          summary: "Успех!",
          detail: "Данные успешно отправлены на ваше устройство",
          life: 3000,
        });
      }, 3000);
    },
    onReset(event) {
      this.$confirm.require({
        target: event.currentTarget,
        message: "Вы уверены что хотите сбросить все настройки?",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.$toast.add({
            severity: "info",
            summary: "Confirmed",
            detail: "Настройки сброшены",
            life: 3000,
          });
        },
      });
    },
  },
  mounted() {
    this.settingsSections = machineCranSettings;
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
.cran-form .p-inputnumber {
  width: 80px;
}
.cran-form .p-inputtext {
  width: 150px;
}
.cran-form .p-inputnumber-input {
  width: inherit;
}
</style>
