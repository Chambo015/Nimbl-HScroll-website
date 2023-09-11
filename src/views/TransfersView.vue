<script setup lang="ts">
import imgMobile from '@/assets/Screen_crypto.png'
import imgMobileLg from '@/assets/Screen_crypto-lg.png'
import imgMobileWebp from '@/assets/Screen_crypto.webp'
import imgMobileSm from '@/assets/Screen_crypto-sm.png'
import imgCard from '@/assets/business-card.png'
import imgCardFull from '@/assets/business-card-full.png'
import imgCardWebp from '@/assets/business-card.webp'
</script>

<template>
     <section class="relative max-sm:mt-5 h-full flex items-end">
      <div class="px-4 w-[80%] mx-auto flex items-center z-10">
        <div class="flex pt-[90px] justify-between w-full max-sm:pt-5">
          <div class='flex flex-col '>
            <h2 class="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] leading-none font-black uppercase font-rfdewi max-sm:text-2xl">
              in-app <br className='max-sm:hidden'/>crypto transfers
            </h2>
            <p class="text-white text-2xl font-normal w-[660px] font-gilroy mt-10 max-sm:text-base max-sm:w-full">
              Send <span class='text-[#6529E0]'>$NIMBL </span>to your friend’s username in a few easy taps. Sign transactions with your fingerprint or
              face-id.
            </p>
          
            <div class=' mt-20 max-sm:mt-7 gap-20 flex max-sm:items-end max-sm:gap-3 max-sm:justify-between'>
              <picture><!-- <source :srcset="imgCardWebp" type="image/webp" /> --><img :src="imgCardFull" alt="imgCard" class='w-[355px] max-sm:w-[163px]' loading="lazy" /></picture>
              <img :src="imgMobileSm" alt="imgMobileSm" class='hidden max-sm:block' loading="lazy" />
              <div class='max-sm:hidden'></div>
            </div>
          </div>
          <div class="flex-shrink-0">
           <picture><!-- <source :srcset="imgMobileWebp" type="image/webp" /> --><img :src="imgMobileLg" alt="imgMobile" class='max-sm:hidden h-[832px] object-contain object-bottom' loading="lazy" /></picture>
          </div>
        </div>
      </div>
    </section>
</template>


<style scoped>

</style>