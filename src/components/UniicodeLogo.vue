<script setup lang="ts">
import uniicodeJpg from '../assets/images/uniicode.jpg'
import uniicodeWebp from '../assets/images/uniicode.webp'

// Check WebP support
const supportsWebp = (): boolean => {
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

const isWebpSupported = supportsWebp();
</script>

<template>
  <picture class="uniicode-logo-container">
    <source
      v-if="isWebpSupported"
      :srcset="isWebpSupported ? uniicodeWebp : uniicodeJpg"
      type="image/webp"
    />
    <img
      :src="uniicodeJpg"
      alt="UNIICODE logo"
      class="uniicode-logo"
    />
  </picture>
</template>

<style scoped>
.uniicode-logo-container {
  max-width: 100%;
}

.uniicode-logo {
  margin: 5px;
  width: 100px;
  border-radius: 50%;
  animation: live 5s infinite alternate forwards;
}


@keyframes live {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>
