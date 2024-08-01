<template>
<div>
  <label class="md:text-base text-700 relative line-height-2">{{label}}</label>
  <i v-if="tooltip" v-tooltip.top="{ value: tooltip }" class="pi pi-question-circle text-teal-300"></i>
</div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
      },
      tooltip: {
        type: String,
      }
    }
  }
</script>

<style scoped>
.cran-form .pi-question-circle {
  font-size: 0.7rem;
  position: absolute;
  padding-left: 3px;
  cursor: pointer;
}
</style>

