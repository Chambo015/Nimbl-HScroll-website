<template>
    <div class="card_metamask min-h-[350px] flex items-center overflow-hidden rounded-lg shadow-lg relative card_before" :style="{'--bg': `url(${noise})`}">
          <div class="w-full h-full relative flex items-center justify-center"><BtnMetamaskConnect /></div>
      </div>
</template>

<script setup lang="ts">
import BtnMetamaskConnect from '@/components/InviteComponents/BtnMetamaskConnect.vue';
import noise from '@/assets/bg_invite_noise.webp'
</script>

<style scoped>
.card_before::before {
    content: '';
    background-image: var(--bg);
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.6;
    mix-blend-mode: multiply;
}
.card_metamask {
  background-image: linear-gradient(180deg, #5C2786 5.1%, #2F0053 100%);
}
</style>