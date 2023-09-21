<script setup lang="ts">
import imgEarth from '@/assets/planet-nimbl.png';
import imgEarthSm from '@/assets/planet-nimbl-sm.png';
import imgEarthWebp from '@/assets/planet-nimbl.webp';
import imgEarthSmWebp from '@/assets/planet-nimbl-sm.webp';
import stake from '@/assets/stake.png';
import transfer from '@/assets/transfer.png';
import cursor from '@/assets/cursor.png';
import network from '@/assets/network.png';
import pc from '@/assets/pc.png';
import starShips from '@/assets/star-ships.png';
import gsap from "gsap";
import useMouseWheel from "@/composables/mouseWheel";
import { onMounted, ref } from 'vue';
import { useMediaQuery } from '@vueuse/core';

const isXS = useMediaQuery("(max-width: 640px)");

const sectionEl = ref();
const titleEl = ref();
const listEl = ref();
const starShipsEl = ref();
const imgEarthEl = ref();

const {onWheel} = useMouseWheel({toDownRoute: "roadmap", toUpRoute: "handle", target: sectionEl});

onMounted(() => {
  if(isXS.value) return
    const tl = gsap.timeline();
    
    tl.from(imgEarthEl.value, {
        xPercent: 100,
        yPercent: 100,
        autoAlpha: 0.0,
        duration: 1.5,
        ease: "expo.inOut",
    });
    tl.from(
      starShipsEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            yPercent: 50,
            xPercent: 170,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.from(
        titleEl.value.children,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            yPercent: -150,
            stagger: -0.3,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.from(listEl.value.children, {
        xPercent: -100,
        autoAlpha: 0.0,
        duration: 1.5,
        stagger: -0.1,
        ease: "expo.inOut",
    }, '0');
    
});
</script>

<template>
    <section ref="sectionEl" @wheel="onWheel" class="h-full flex flex-col justify-center pt-[150px] max-3xl:pt-9">
      <div ref="titleEl" data="titleEl">
        <h2 class="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[88px] leading-none font-rfdewi font-black text-center max-sm:text-3xl">
          NIMBL TOKEN
        </h2>
        <p class="text-center text-white font-gilroy text-3xl mt-3 max-sm:text-base">
          $NIMBL is a utility token that acts as the platform currency
        </p>
      </div>
      <div class="flex h-[1000px] relative max-sm:h-auto max-sm:flex-col">
       <picture class="pointer-events-none"><source :srcset="imgEarthWebp" type="image/webp" /><img ref="imgEarthEl"  data="imgEarthEl" :src="imgEarth" alt="imgEarth" class="ml-auto absolute right-0 -top-16 max-sm:hidden" /></picture>
        <img ref="starShipsEl" data="starShipsEl" :src="starShips" alt="starShips" class='w-[380px] max-2xl:w-[320px] absolute left-1/2 top-[30%] -translate-x-1/2 max-sm:hidden pointer-events-none' />
        <div class='container 2xl:max-w-[1600px] mx-auto'>
            <div ref="listEl" data="listEl" class='mt-28 max-sm:mt-8'>
              <div class="flex items-center gap-5">
                <img :src="stake" alt="stake" class='w-[30px] h-[30px]' />
                <p class="text-3xl max-2xl:text-2xl leading-none text-white font-gilroy max-sm:text-base">Stake $Nimbl to gain governance</p>
              </div>
              <div class="flex items-center gap-5 mt-20 max-2xl:mt-6 max-sm:mt-4">
                <img :src="transfer" alt="transfer" class='w-[30px] h-[30px]'/>
                <p class="text-3xl max-2xl:text-2xl leading-none text-white font-gilroy max-sm:text-base">Transfer $Nimbl to a username</p>
              </div>
              <div class="flex items-center gap-5 mt-20 max-2xl:mt-6 max-sm:mt-4">
                <img :src="cursor" alt="cursor" class='w-[30px] h-[30px]'/>
                <p class="text-3xl max-2xl:text-2xl leading-none text-white font-gilroy max-sm:text-base">Access token-gated content</p>
              </div>
              <div class="flex items-center gap-5 mt-20 max-2xl:mt-6 max-sm:mt-4">
                <img :src="network" alt="network" class='w-[30px] h-[30px]'/>
                <p class="text-3xl max-2xl:text-2xl leading-none text-white font-gilroy max-sm:text-base">Use $Nimbl to Tip creators</p>
              </div>
              <div class="flex items-center gap-5 mt-20 max-2xl:mt-6 max-sm:mt-4">
                <img :src="pc" alt="pc" class='w-[30px] h-[30px]'/>
                <p class="text-3xl max-2xl:text-2xl leading-none text-white font-gilroy max-sm:text-base">Subscribe to Nimbl Ultra</p>
              </div>
            </div>
        </div>
        <div class='hidden max-sm:block'>
         <picture class="pointer-events-none"><source :srcset="imgEarthSmWebp" type="image/webp" /><img :src="imgEarthSm" alt="imgEarthSm" class='w-full' /></picture>
        </div>
      </div>
    </section>
</template>


<style scoped>

</style>