<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  }
})

const profileDetailsUniicode = ref<HTMLElement|null>(null)

const slideInProfileDetails = () => {
  const elem = profileDetailsUniicode.value

  elem?.classList.add('profile-slide-left')
}

const slideOutProfileDetails = () => {
  const elem = profileDetailsUniicode.value

  elem?.classList.remove('profile-slide-left')
}

defineExpose({
  slideInProfileDetails
})

</script>

<template>
  <article class="profile-uniicode">
    <section
      class="profile-image-uniicode"
      @mouseover="slideInProfileDetails"
      @mouseleave="slideOutProfileDetails"
    >
      <img
        :src="image"
        :alt="`${name} image`"
        @mouseover="slideInProfileDetails"
        @mouseleave="slideOutProfileDetails"
      />
    </section>
    <section class="profile-details-uniicode" ref="profileDetailsUniicode">
      {{ name }}
    </section>
  </article>
</template>
