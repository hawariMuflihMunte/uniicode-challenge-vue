<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: 'favorite'
  }
})
</script>

<template>
  <span class="material-symbols-sharp">
    {{ icon }}
  </span>
</template>
