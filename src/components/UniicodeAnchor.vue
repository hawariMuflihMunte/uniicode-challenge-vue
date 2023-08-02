<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a :href="to" class="button-uniicode">
    <slot></slot>
  </a>
</template>
