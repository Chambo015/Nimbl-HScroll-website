<template>
  <button v-bind="$attrs" class="shadow-xl rounded-sm overflow-hidden">
    <div class="flex h-[75px]">
      <div class="w-[75px] h-[75px] bg-[#1F1127]/40 relative">
        <Vue3Lottie animation-link="lottie/twitter.json" :height="120" :width="120" :loop="true" class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2" />
      </div>
      <div class="px-5 bg_text flex items-center">
        <p class="font-tt-octosquares uppercase font-medium text-2xl leading-none max-md:text-lg">connect twitter/X</p>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
</script>

<style scoped>
.bg_text {
  background-image: radial-gradient(443.81% 434.72% at 322.31% -217.78%, #6F359C 0%, #01060C 100%);
}
</style>