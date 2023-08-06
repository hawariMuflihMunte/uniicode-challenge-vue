<script setup lang="ts">
</script>

<template>
  <footer class="flex flex-wrap gap-9 justify-center py-2 px-4">
    <span>ユニーコード</span>
    <span>ゆにこおど</span>
    <span class="center">UNIICODE</span>
    <span>UNÜCODE</span>
    <span>UÑÜÇÔDĒ</span>
  </footer>
</template>

<style scoped>
footer span {
  transition: all 250ms linear;
}

footer span.center {
  font-weight: 600;
  font-size: larger;
}

footer span:hover {
  font-size: large;
  filter: drop-shadow(0 1px 12px #B8FA00);
}

footer span.center:hover {
  font-size: x-large;
}

footer *::selection {
  @apply text-uniicode-dark;

  background: #B8FA00;
  border-radius: 8px;
}
</style>
