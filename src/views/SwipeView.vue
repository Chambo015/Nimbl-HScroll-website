<script setup lang="ts">
import mobileImg from '@/assets/swipe.png';
import swipeLeft from '@/assets/swipe-toFilter.png';
import swipeRight from '@/assets/swipe-toSave.png';
import mobileImgWebp from '@/assets/swipe.webp';
import swipeLeftWebp from '@/assets/swipe-toFilter.webp';
import swipeRightWebp from '@/assets/swipe-toSave.webp';
import gsap from "gsap";
import useMouseWheel from "@/composables/mouseWheel";
import { onMounted, ref, reactive, computed } from 'vue';
import {  useMediaQuery, useParallax } from '@vueuse/core';

const isXS = useMediaQuery("(max-width: 640px)");

const sectionEl = ref();
const mainImgEl = ref();
const contentEl = ref();
const leftCardEl = ref();
const rightCardEl = ref();

const {onWheel} = useMouseWheel({toDownRoute: "teaser", toUpRoute: "moderation", target: sectionEl});

const parallax = reactive(useParallax(sectionEl))
const layer0 = computed(() => ({
  transform: `translateX(${parallax.tilt * 20}px) translateY(${
    parallax.roll * 20
  }px)`,
}))
const layer1 = computed(() => ({
  transform: `translateX(${parallax.tilt * -20}px) translateY(${
    parallax.roll * 20
  }px)`,
}))

onMounted(() => {
  if(isXS.value) return
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
    tl.from(
      leftCardEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            xPercent: 50,
            rotate: 10,
            ease: "expo.inOut",
        },
        "-=1"
    );
    tl.from(
      rightCardEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            xPercent: -50,
            rotate: -10,
            ease: "expo.inOut",
        },
        "-=1"
    );
});
</script>

<template>
    <section ref="sectionEl" @wheel="onWheel" class="flex">
      <div class="container flex gap-14 justify-between items-center max-sm:flex-col max-xl:justify-center">
        <div ref="contentEl" data="contentEl"  class="w-[500px] max-sm:w-full">
          <h2 class="bg-gradient-to-b from-white to-white/50 font-rfdewi text-transparent bg-clip-text text-5xl font-black uppercase max-sm:text-2xl max-sm:text-center">
            SWIPE
          </h2>
          <p class="text-2xl text-white/80 mt-8 font-gilroy max-sm:text-base max-sm:text-center max-sm:mt-4">
            Be in control of the content that you receive on feed.
            <span class=" mt-4 block max-sm:inline max-sm:mt-0">Swipe left to filter, swipe right to save</span>
          </p>
        </div>
        <div ref="mainImgEl" data="mainImgEl" class="relative [&>picture]:pointer-events-none [&>picture]:select-none">
          <picture><source :srcset="mobileImgWebp" type="image/webp" /><img :src="mobileImg" alt="mobileImg" class=" max-h-[744px] max-2xl:max-h-[100vh]  max-sm:w-[230px] max-sm:h-[380px] object-contain transition-all" /></picture>
          <picture><source :srcset="swipeLeftWebp" type="image/webp" /><img ref="leftCardEl" data="leftCardEl" :style="layer1"  :src="swipeLeft" alt="swipeLeft" class="absolute top-[5%] -left-[40%]" /></picture>
          <picture><source :srcset="swipeRightWebp" type="image/webp" /><img ref="rightCardEl" data="rightCardEl" :style="layer0" :src="swipeRight" alt="swipeLeft" class="absolute top-[5%] -right-[40%]" /></picture>
        </div>
      </div>
    </section>
</template>


<style scoped>

</style>