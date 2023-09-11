<script setup lang="ts">
import mobileImg from '@/assets/swipe.png';
import swipeLeft from '@/assets/swipe-toFilter.png';
import swipeRight from '@/assets/swipe-toSave.png';
import mobileImgWebp from '@/assets/swipe.webp';
import swipeLeftWebp from '@/assets/swipe-toFilter.webp';
import swipeRightWebp from '@/assets/swipe-toSave.webp';

</script>

<template>
    <section  class="pt-[200px]">
      <div class="container flex gap-14 justify-between items-center max-sm:flex-col">
        <div  class="w-[400px]">
          <h2 class="bg-gradient-to-b from-white to-white/50 font-rfdewi text-transparent bg-clip-text text-5xl font-black uppercase max-sm:text-2xl max-sm:text-center">
            SWIPE
          </h2>
          <p class="text-2xl text-white/80 mt-8 font-gilroy max-sm:text-base max-sm:text-center max-sm:mt-4">
            Be in control of the content that you receive on feed.
            <span class=" mt-4 block max-sm:inline max-sm:mt-0">Swipe left to filter, swipe right to save</span>
          </p>
        </div>
        <div class="relative [&>picture]:pointer-events-none [&>picture]:select-none">
          <picture ><source :srcset="mobileImgWebp" type="image/webp" /><img :src="mobileImg" alt="mobileImg" class="w-[442px] h-[744px] max-sm:w-[230px] max-sm:h-[380px] object-contain" /></picture>
          <picture><source ::srcset="swipeLeftWebp" type="image/webp" /><img  :src="swipeLeft" alt="swipeLeft" class="absolute top-[5%] -left-[40%]" /></picture>
          <picture><source ::srcset="swipeRightWebp" type="image/webp" /><img  :src="swipeRight" alt="swipeLeft" class="absolute top-[5%] -right-[40%]" /></picture>
        </div>
      </div>
    </section>
</template>


<style scoped>

</style>