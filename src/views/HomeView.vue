<script setup lang="ts">
import { ref } from 'vue'
import UniicodeProfile from '@/components/UniicodeProfile.vue';
import galih from '@/assets/images/person/galih.jpg'

const welcomeMessageStatus = ref(true)
const toggleWelcomeMessageStatus = () => {
  welcomeMessageStatus.value = false
}

const xAxisAnim = ref(0)
const yAxisAnim = ref(0)

const changeColorBasedOnXAxisAnim = (e: MouseEvent) => {
  xAxisAnim.value = e.clientX
}

const changeColorBasedOnYAxisAnim = (e: MouseEvent) => {
  yAxisAnim.value = e.clientY
}

const changeColorBasedOnXY = (e: MouseEvent) => {
  changeColorBasedOnXAxisAnim(e)
  changeColorBasedOnYAxisAnim(e)
}

</script>

<template>
  <section
    @mousemove="changeColorBasedOnXY"
    :style="{ backgroundColor: `hsla(${xAxisAnim}, 20%, 5%, ${yAxisAnim / yAxisAnim})` }"
    >
    <template v-if="welcomeMessageStatus">
      <h1
        @click="toggleWelcomeMessageStatus"
        class="text-4xl text-center text-slate-300">ユニーコード
      </h1>
    </template>
    <UniicodeProfile
      name="Galih Adhi Kusuma"
      :image="galih"
      :tech-stack="[
        'javascript',
        'react',
        'express'
      ]"
    />
  </section>
</template>

<style scoped>
.changecolor {
  transition: 0.3s background-color ease;
}
</style>
