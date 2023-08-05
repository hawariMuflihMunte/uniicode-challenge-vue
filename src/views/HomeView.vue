<script setup lang="ts">
import { ref } from 'vue'
import UniicodeProfile from '@/components/UniicodeProfile.vue';
import galih from '@/assets/images/person/galih.jpg'
</script>

<template>
  <section>
    <h1 class="text-4xl text-center text-slate-300">ユニーコード</h1>
    <section class="container py-10">
      <UniicodeProfile
        name="Galih Adhi Kusuma"
        :image="galih"
        :strength="[
          'UNIICODE Adomin'
        ]"
        :weakness="[
          'For now, none'
        ]"
        :tech-stack="[
          'javascript',
          'react',
          'express'
        ]"
      />
    </section>
  </section>
</template>

<style scoped>
.changecolor {
  transition: 0.3s background-color ease;
}
</style>
