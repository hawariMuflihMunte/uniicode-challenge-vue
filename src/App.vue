<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Icon from '@/components/Icon.vue'
import UniicodeLogoVue from '@/components/UniicodeLogo.vue'
import UniicodeButton from '@/components/UniicodeButton.vue';
</script>

<template>
  <div class="app-container bg-uniicode-black text-uniicode-green">
    <header>
      <nav class="flex flex-col place-content-center place-items-center">
        <UniicodeLogoVue />
        <UniicodeButton>
          <Icon icon="home" />
        </UniicodeButton>
        <ul class="list-none flex justify-between">
          <li>
            <RouterLink to="/" class="flex place-content-center place-items-center min-w-[30px] min-h-[30px] p-2 m-2 border-t-4 border-t-uniicode-green">
              <Icon icon="home" />
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/about">
              <Icon icon="help" />
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
.app-container {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  min-width: 100vw;
  min-height: 100vh;
}
</style>
