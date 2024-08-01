<template>
<div class="cran-form">
  <Card 
  v-for="(settings, settingsName) in settingsSections"
  :key="settingsName"
  class="mx-auto surface-100 border-round-lg  max-w-30rem mb-3 flex flex-column"
  >
    <template #title>
      {{ settings.title }}
      <Divider />
    </template>
    <template #content>
      <div
      v-for="input in settings.inputs"
      :key="input.id"
      class="flex align-items-center justify-content-between mb-4"
    >
      <LabelWithTooltip :label="input.label" :tooltip="input.tooltip" class="mr-5"/>
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
        class="p-inputtext-sm md:p-inputtext-lg w-4rem"
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
        :toggleMask="!!input.value"
      />
      <InputSwitch
        v-if="input.type === 'Boolean'"
        v-model="input.value"
        :id="input.id"
        />
    </div>
    <div
      v-if="settingsName === 'power'"
      class="flex align-items-center justify-content-between mb-4"
    >
      <span class="text-base text-700 mr-2">
        Сброс питания 'Пульс +12'
        <i v-tooltip.top="'Подсказка'" class="pi pi-question-circle text-teal-300" ></i>
      </span>
      <Button
      label="Выполнить"
      :disabled="isLoading"
      class="p-button-info p-button-sm min-w-min"
      @click="onSubmit(settings)"
      />
    </div>
    <div
      v-if="settingsName === 'power'"
      class="flex align-items-center justify-content-between mb-4"
    >
      <span class="text-base text-700 mr-2">
        Сброс питания 'MDB
        <i  v-tooltip.top="'Подсказка'" class="pi pi-question-circle text-teal-300" ></i>
      </span>
      <Button
      label="Выполнить"
      :disabled="isLoading"
      class="p-button-info p-button-sm min-w-min"
      @click="onSubmit(settings)"
      />
    </div>
    </template>
    <template #footer>
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
    </template>
</Card>
</div>
</template>

<script>
import Button from "primevue/button";
import Divider from "primevue/divider";
import InlineMessage from 'primevue/inlinemessage';
import { machineCranSettings } from "@/data";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Password from "primevue/password";
import InputSwitch from "primevue/inputswitch";
import LabelWithTooltip from "@/components/LabelWithTooltip.vue";
import Card from 'primevue/card';
export default {
  name: "App",
  components: {
    InputNumber,
    Button,
    Divider,
    InputText,
    Password,
    InputSwitch,
    InlineMessage,
    LabelWithTooltip,
    Card
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
            summary: "Отправлено",
            detail: "Запрос на сброс параметров отправлен",
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
.cran-form .p-inputnumber {
  width: 80px;
}
.cran-form .p-inputtext {
  width: 100px;
}
.cran-form .p-inputnumber-input {
  width: inherit;
}
.cran-form .pi-question-circle {
  font-size: 0.7rem;
  position: absolute;
  padding-left: 3px;
  cursor: pointer;
}
.cran-form .p-card-title,.p-card-footer{
  text-align: center;
}
</style>