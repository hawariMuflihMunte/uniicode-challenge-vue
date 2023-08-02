<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: 'favorite'
  },
  classNames: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <span :class="`material-symbols-sharp ${classNames}`">
    {{ icon }}
  </span>
</template>
