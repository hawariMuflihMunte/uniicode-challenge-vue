<script setup lang="ts">
import UniicodeAnchorVue from '@/components/UniicodeAnchor.vue'
import Icon from '@/components/Icon.vue'
</script>

<template>
  <section class="about">
    <p>
      Hi, welcome to UNIICODE (Official Community Partner with Skilvul) 👋
      <br>
      Follow us at @uniicode.id and our partner @skilvul @markoding
      <br>
      Sebelum mulai berdiskusi dan bertanya, tolong dibaca rules kami dibawah ini:

      <ol class="list-decimal pl-7">
        <li>Dilarang SARA</li>
        <li>Dilarang mengirimkan pesan berbau 18+ (Nudity, drugs, suicide)</li>
        <li>Dilarang kirim Stiker yg inappropriate ya (Stiker wibu yg mendekati 18+, stiker 18+ lainya, stiker politik, dst)</li>
        <li>Semua pertanyaan mengenai IT/Programming diperbolehkan</li>
        <li>Be respectful sesama member (No harassment, no Bullying, etc)</li>
        <li>Saling menghargai satu sama lain</li>
      </ol>
    </p>
  </section>
  <section class="flex place-content-center place-items-center py-10">
    <UniicodeAnchorVue to="https://linktr.ee/uniicode" class="max-w-max">
      <Icon icon="diversity_3" />
    </UniicodeAnchorVue>
  </section>
</template>

<style>
.about {
  margin-left: auto;
  margin-right: auto;
  max-width: 75%;
}

@media screen and (max-width: 576px) {
  .about {
    max-width: 98%;
  }
}
</style>
