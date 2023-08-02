<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps({
  link: {
    type: String,
    required: true
  }
})
</script>

<template>
  <RouterLink :to="link">
    <slot></slot>
  </RouterLink>
</template>
