<template>
  <div class="bg-[#1B1C20] max-md:bg-transparent flex max-md:flex-col gap-3  rounded-lg py-3 px-3 max-md:px-0 justify-around max-xl:flex-wrap">
    <div class="flex items-center gap-4 max-md:bg-[#333333] max-md:justify-center max-md:py-2">
      <p class="token-gradient-text font-rfdewi font-black text-[48px] max-2xl:text-[38px] max-md:text-[48px] leading-none uppercase relative">3X <img class="absolute top-0 z-20 right-0 translate-x-1/2 -translate-y-[35%] scale-2" :src="light" alt=""> </p>
      <div class="font-tt-octosquares uppercase"><p class="text-[#BF51F7] text-base !leading-none max-2xl:text-sm max-md:text-base">multiplier</p><p class="max-2xl:text-xs !leading-tight mt-1 text-sm">First 1.000 invites</p>
      </div>
    </div>

    <div class="flex items-center gap-4 max-md:bg-[#333333] max-md:justify-center max-md:py-2">
      <p class="token-gradient-text font-rfdewi font-black text-[48px] max-2xl:text-[38px] max-md:text-[48px] leading-none uppercase">2X</p>
      <div class="font-tt-octosquares uppercase"><p class="text-[#BF51F7] text-base !leading-none max-2xl:text-sm max-md:text-base">multiplier</p><p class="max-2xl:text-xs !leading-tight mt-1 text-sm">First 2.000 invites</p>
      </div>
    </div>

    <div class="flex items-center gap-4 max-md:bg-[#333333] max-md:justify-center max-md:py-2">
      <p class="token-gradient-text font-rfdewi font-black text-[48px] max-2xl:text-[38px] max-md:text-[48px] leading-none uppercase">1.5X</p>
      <div class="font-tt-octosquares uppercase"><p class="text-[#BF51F7] text-base !leading-none max-2xl:text-sm max-md:text-base">multiplier</p><p class="max-2xl:text-xs !leading-tight mt-1 text-sm">First 10.000 invites</p>
      </div>
    </div>

    <div class="flex items-center gap-4 max-md:bg-[#333333] max-md:justify-center max-md:py-2">
      <p class="token-gradient-text font-rfdewi font-black text-[48px] max-2xl:text-[38px] max-md:text-[48px] leading-none uppercase">1.2X</p>
      <div class="font-tt-octosquares uppercase"><p class="text-[#BF51F7] text-base !leading-none max-2xl:text-sm max-md:text-base">multiplier</p><p class="max-2xl:text-xs !leading-tight mt-1 text-sm">First 20.000 invites</p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import light from '@/assets/light-multiplier.webp'
</script>

<style scoped>

</style>