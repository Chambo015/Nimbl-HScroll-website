<template>
  <div @click="$router.push({name: 'nimbltv'})" class="bg_card group relative ring-1 ring-blue-500/50 font-Rollbox max-md:text-sm font-bold text-xl max-2xl:text-lg leading-tight max-w-[250px] max-md:rounded-none p-3 min-h-[100px] max-md:min-h-[75px]  cursor-pointer rounded-md animation__hover-card">
    <p class="uppercase relative z-10 text_arrow ">NIMBL.TV <br class="hidden max-md:inline" /></p>
    <img :src="nimbl" alt="notifications" width="59" height="59" class="absolute right-2 bottom-0 pointer-events-none max-md:w-[43px] max-md:h-[43px]">
  </div>
</template>

<script setup lang="ts">
import nimbl from '@/assets/invite/nimbl.webp'
</script>

<style scoped>
.bg_card {
  background: linear-gradient(271deg, #0D0C11 2.43%, #46387A 97.57%);
}
.text_arrow::after {
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='15' fill='none' viewBox='0 0 21 15'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='url(%23b)' d='M19.31 8.376c.51-.488.51-1.28 0-1.768L12.782.365a1.35 1.35 0 0 0-1.848 0c-.51.488-.51 1.28 0 1.768l4.304 4.112H2.722c-.722 0-1.305.558-1.305 1.249 0 .69.583 1.249 1.305 1.249h12.516l-4.3 4.112c-.51.488-.51 1.28 0 1.768a1.35 1.35 0 0 0 1.848 0l6.528-6.243-.005-.004Z'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='b' x1='19.692' x2='1.417' y1='7.494' y2='7.494' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23BCBCBC'/%3e%3cstop offset='1' stop-color='%23BCBCBC' stop-opacity='0'/%3e%3c/linearGradient%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h14.983v20.887H0z' transform='rotate(90 10.5 10.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  @apply ml-[10px] max-md:ml-0;
  width: 15px;
  height: 20px;
}

.animation__hover-card {
  @apply hover:scale-105 transition-all will-change-transform delay-300 hover:delay-0 duration-500 hover:duration-300 hover:-translate-y-2 hover:shadow-[0px_4px_7px_0px] hover:shadow-blue-600 !shadow-blue-600
}
</style>