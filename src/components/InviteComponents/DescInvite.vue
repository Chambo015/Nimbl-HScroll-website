<template>
  <div class="bg-gradient-header-secondary animation-block group cursor-default ring-1 ring-blue-500/50  max-md:bg-transparent flex max-md:flex-col gap-3  rounded-lg py-3 px-3 max-md:px-0 justify-around max-xl:flex-wrap">
    <div class="item__block" :class="{'opacity-50': currentMultiplier !== MULTIPLIER['3X']}">
      <p class="digit__title">3X <img v-if="currentMultiplier === MULTIPLIER['3X']" class="absolute top-0 z-20 right-0 translate-x-[45%] -translate-y-[33%] scale-150 animate-pulse" :src="light" aria-hidden="true"> </p>
      <div class="font-tt-octosquares uppercase"><p class="text-[#BF51F7] text-base !leading-none max-2xl:text-sm max-md:text-base">multiplier</p><p class="max-2xl:text-xs !leading-tight mt-1 text-sm">First 1.000 invites</p>
      </div>
    </div>

    <div class="item__block" :class="{'opacity-50': currentMultiplier !== MULTIPLIER['2X']}">
      <p class="digit__title">2X <img v-if="currentMultiplier === MULTIPLIER['2X']" class="absolute top-0 z-20 right-0 translate-x-[45%] -translate-y-[33%] scale-150 animate-pulse" :src="light" aria-hidden="true"></p>
      <div class="font-tt-octosquares uppercase"><p class="text-[#BF51F7] text-base !leading-none max-2xl:text-sm max-md:text-base">multiplier</p><p class="max-2xl:text-xs !leading-tight mt-1 text-sm">First 2.000 invites</p>
      </div>
    </div>

    <div class="item__block" :class="{'opacity-50': currentMultiplier !== MULTIPLIER['1.5X']}">
      <p class="digit__title">1.5X <img v-if="currentMultiplier === MULTIPLIER['1.5X']" class="absolute top-0 z-20 right-0 translate-x-[45%] -translate-y-[33%] scale-150 animate-pulse" :src="light" aria-hidden="true"></p>
      <div class="font-tt-octosquares uppercase"><p class="text-[#BF51F7] text-base !leading-none max-2xl:text-sm max-md:text-base">multiplier</p><p class="max-2xl:text-xs !leading-tight mt-1 text-sm">First 10.000 invites</p>
      </div>
    </div>

    <div class="item__block" :class="{'opacity-50': currentMultiplier !== MULTIPLIER['1.2X']}">
      <p class="digit__title">1.2X <img v-if="currentMultiplier === MULTIPLIER['1.2X']" class="absolute top-0 z-20 right-0 translate-x-[45%] -translate-y-[33%] scale-150 animate-pulse" :src="light" aria-hidden="true"></p>
      <div class="font-tt-octosquares uppercase"><p class="text-[#BF51F7] text-base !leading-none max-2xl:text-sm max-md:text-base">multiplier</p><p class="max-2xl:text-xs !leading-tight mt-1 text-sm">First 20.000 invites</p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import light from '@/assets/light-multiplier.webp'
import { DEFAULT_USER_STORAGE, MULTIPLIER, STORAGE_USER_KEY } from '@/constants';
import { ISessionTwitter } from '@/types';
import { useStorage } from '@vueuse/core';
import { computed } from 'vue';

type TypeMultiplier = (typeof MULTIPLIER)[keyof typeof MULTIPLIER ]

const userStorage = useStorage<ISessionTwitter>(STORAGE_USER_KEY, DEFAULT_USER_STORAGE, sessionStorage);
const currentMultiplier = computed<TypeMultiplier>(() => {
  const invites = userStorage.value.total_invites
  if(!invites) return MULTIPLIER['3X']
  if(invites < 1000) return MULTIPLIER['3X']
  if(invites < 2000) return MULTIPLIER['2X']
  if(invites < 10000) return MULTIPLIER['1.5X']
  return MULTIPLIER['1.2X']
})
</script>

<style scoped>
.animation-block {
  @apply hover:shadow-[-1px_1px_10px_1px] hover:shadow-blue-600 !shadow-blue-600 duration-500  transition-shadow delay-200 hover:delay-0;
}
.item__block {
  @apply flex items-center gap-4 max-md:bg-[#333333] max-md:justify-center max-md:py-2 group-hover:opacity-100 transition-opacity;
}
.digit__title {
  @apply token-gradient-text font-rfdewi font-black text-[48px] max-2xl:text-[38px] max-md:text-[48px] leading-none uppercase relative
}
</style>