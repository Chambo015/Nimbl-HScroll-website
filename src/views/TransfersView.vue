<script setup lang="ts">
import imgMobile from '@/assets/Screen_crypto.png'
import imgMobileLg from '@/assets/Screen_crypto-lg.png'
import imgMobileWebp from '@/assets/Screen_crypto.webp'
import imgMobileSm from '@/assets/Screen_crypto-sm.png'
import imgCard from '@/assets/business-card.png'
import imgCardFull from '@/assets/business-card-full.png'
import imgCardWebp from '@/assets/business-card.webp'
import gsap from "gsap";
import useMouseWheel from "@/composables/mouseWheel";
import { onMounted, ref } from 'vue';

const sectionEl = ref();
const mainImgEl = ref();
const contentEl = ref();

const {onWheel} = useMouseWheel({toDownRoute: "gamification", toUpRoute: "teaser", target: sectionEl});

onMounted(() => {
    const tl = gsap.timeline();

    tl.from(mainImgEl.value, {
        xPercent: 100,
        autoAlpha: 0.0,
        duration: 1.5,
        ease: "expo.inOut",
    });
    tl.from(
      contentEl.value.children,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            xPercent: -100,
            stagger: 0.2,
            ease: "expo.inOut",
        },
        "0",
    );
    
});
</script>

<template>
     <section ref="sectionEl" @wheel="onWheel" class="relative  flex items-center">
      <div class="container mx-auto flex items-center z-10 ">
        <div class="flex justify-between w-full max-sm:pt-5 gap-16 items-center max-sm:flex-col max-sm:gap-5">
          <div ref='contentEl' data='contentEl' class='flex flex-col w-[700px] max-sm:w-full'>
            <h2 class="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] leading-none font-black uppercase font-rfdewi max-sm:text-2xl">
              in-app <br className='max-sm:hidden'/>crypto transfers
            </h2>
            <p class="text-white text-2xl font-normal w-[660px] font-gilroy mt-10 max-sm:text-base max-sm:w-full max-sm:mt-4">
              Send <span class='text-[#6529E0]'>$NIMBL </span>to your friend’s username in a few easy taps. Sign transactions with your fingerprint or
              face-id.
            </p>
            <div class='mt-20 max-sm:mt-5 gap-20 flex max-sm:items-end  '>
              <picture><!-- <source :srcset="imgCardWebp" type="image/webp" /> --><img :src="imgCardFull" alt="imgCard" class='w-[355px] max-sm:w-[180px]' loading="lazy" /></picture>
            </div>
          </div>
          <div class="flex-shrink-0 max-sm:h-[300px]">
           <picture><!-- <source :srcset="imgMobileWebp" type="image/webp" /> --><img ref="mainImgEl" data="mainImgEl" :src="imgMobileLg" alt="imgMobile" class='h-[832px] max-2xl:h-[550px] max-sm:h-auto object-contain object-bottom' loading="lazy" /></picture>
          </div>
        </div>
      </div>
    </section>
</template>


<style scoped>

</style>