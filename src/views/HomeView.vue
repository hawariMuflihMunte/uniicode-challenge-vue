<script setup lang="ts">
import { ref } from 'vue'

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
    :style="{ backgroundColor: `hsla(${xAxisAnim}, 60%, 30%, ${yAxisAnim / yAxisAnim})` }"
    >
    <template v-if="welcomeMessageStatus">
      <h1
        @click="toggleWelcomeMessageStatus"
        class="text-4xl text-center text-slate-300">UNIICODE
      </h1>
    </template>
  </section>
</template>

<style scoped>
.changecolor {
  transition: 0.3s background-color ease;
}
</style>
