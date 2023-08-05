<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  slidePosition: {
    type: String,
    default: 'left'
  }
})


const profileDetailsUniicode = ref<HTMLElement|null>(null)

const slideInProfileDetails = () => {
  const elem = profileDetailsUniicode.value

  elem?.classList.add(`profile-slide-${props.slidePosition}`)
}

const slideOutProfileDetails = () => {
  const elem = profileDetailsUniicode.value

  elem?.classList.remove(`profile-slide-${props.slidePosition}`)
}

defineExpose({
  slideInProfileDetails
})
</script>

<template>
  <article class="profile-uniicode">
    <section
      class="profile-image-uniicode"
      @click="slideOutProfileDetails"
      @dblclick="slideInProfileDetails"
    >
      <img
        :src="image"
        :alt="`${name} image`"
        @click="slideOutProfileDetails"
        @dblclick="slideInProfileDetails"
      />
    </section>
    <section class="profile-details-uniicode" ref="profileDetailsUniicode">
      <h2 class="profile-details-uniicode__name">{{ name }}</h2>
      <p class="profile-details-uniicode__strength">
        <details>
          <summary>Strength 💪🏼</summary>

          <ul>
            <li><code>UNIICODE Adomin $ sudo</code></li>
          </ul>
        </details>
      </p>
      <p class="profile-details-uniicode__weakness">
        <details>
          <summary>Weakness 👀</summary>

          <ul>
            <li>None 😔</li>
          </ul>

          <hr>
        </details>
      </p>
      <p class="profile-details-uniicode__tech">
        <details>
          <summary>Tech 😎</summary>

          <ul>
            <li>
              <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png
" alt="JavaScript">
            </li>
          </ul>
        </details>
      </p>
    </section>
  </article>
</template>
