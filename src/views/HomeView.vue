<script setup lang="ts">
import UniicodeProfile from '@/components/UniicodeProfile.vue'
import galihImg from '@/assets/images/person/galih.jpg'
import hawariImg from '@/assets/images/person/hawari.jpg'
import cakAdiImg from '@/assets/images/person/cakAdi.jpg'

const personStats = [
  {
    name: 'Galih Adhi Kusuma',
    image: galihImg,
    strength: [
      'UNIICODE Adomin'
    ],
    weakness: [
      'For now, none'
    ],
    techStack: [
      'vim',
      'javascript',
      'react',
      'vue',
      'express',
      'cpp',
      'go'
    ]
  },
  {
    name: 'Hawari Muflih Munte',
    image: hawariImg,
    strength: [
      'UNIICODE Member',
      'GitHub Contrast'
    ],
    weakness: [
      'Noob'
    ],
    techStack: [
      'html',
      'css',
      'javascript',
      'typescript',
      'ruby',
      'cpp',
      'vue',
      'react'
    ]
  },
  {
    name: 'Amir Zuhdi Wibowo',
    image: cakAdiImg,
    strength: [
      'UNIICODE Sepoeh 🙏🏼',
      '!mockable_php'
    ],
    weakness: [
      'None, sepoerane 🙏🏼'
    ],
    techStack: [
      'html',
      'css',
      'php',
      'javascript',
      'typescript',
      'react',
      'vue',
      'bootstrap',
      'sass',
      'tailwindcss'
    ]
  },
]

</script>

<template>
  <section>
    <h1 class="text-4xl text-center text-slate-300">ユニーコード</h1>
    <section class="container py-10">
      <template v-for="person in personStats" :key="person">
        <UniicodeProfile
          :name="person.name"
          :image="person.image"
          :strength="person.strength"
          :weakness="person.weakness"
          :tech-stack="person.techStack"
        />
      </template>
    </section>
  </section>
</template>

<style scoped>
.changecolor {
  transition: 0.3s background-color ease;
}
</style>
