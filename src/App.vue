<script setup lang="ts">
import { RouterView } from 'vue-router'
import Icon from '@/components/Icon.vue'
import UniicodeLogoVue from '@/components/UniicodeLogo.vue'
import UniicodeRouterLink from '@/components/UniicodeRouterLink.vue'
</script>

<template>
  <div class="app-container bg-uniicode-black text-uniicode-green">
    <header class="mb-12">
      <nav class="flex flex-col place-content-center place-items-center">
        <UniicodeLogoVue />
        <ul class="list-none flex justify-between">
          <li>
            <UniicodeRouterLink :link="`/`">
              <Icon icon="group" />
            </UniicodeRouterLink>
          </li>
          <li>
            <UniicodeRouterLink :link="`/about`">
              <Icon icon="help" />
            </UniicodeRouterLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="mx-auto px-12 py-8">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  min-width: 80vw;
  max-width: 100%;
  min-height: 100vh;
  overflow: hidden;

  @apply pb-20;
}
</style>
