<template>
  <button class="shadow-xl rounded-sm overflow-hidden">
    <div class="flex h-[75px]">
      <div class="w-[75px] h-[75px] bg-[#1F1127]/40">
        <iconMetamask />
      </div>
      <div class="px-5 bg_text flex items-center">
        <p class="font-tt-octosquares uppercase font-medium text-2xl leading-none">connect metamask</p>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import iconMetamask from '@/components/icons/iconMetamask.vue'
</script>

<style scoped>
.bg_text {
  background-image: radial-gradient(443.81% 434.72% at 322.31% -217.78%, #6F359C 0%, #01060C 100%);
}
</style>