<script setup lang="ts">
import imgLeftBgWebp from '@/assets/bg-summarize-video.webp'
import mobileSumm from '@/assets/rotated-phone-summarize.png'
import mobileSummWebp from '@/assets/rotated-phone-summarize.webp'
import gsap from "gsap";
import useMouseWheel from "@/composables/mouseWheel";
import { onMounted, ref } from 'vue';
import { useMediaQuery } from '@vueuse/core';

const isXS = useMediaQuery("(max-width: 640px)");

const sectionEl = ref();
const bgLeftImgEl = ref();
const bgRightImgEl = ref();
const mobileImgEl = ref();
const titleEl = ref();

const {onWheel} = useMouseWheel({toDownRoute: "ai", toUpRoute: "gamification", target: sectionEl});

onMounted(() => {
    if(isXS.value) return
    const tl = gsap.timeline();

    tl.from(bgLeftImgEl.value, {
        xPercent: -100,
        autoAlpha: 0.0,
        duration: 1.5,
        ease: "expo.inOut",
    });
    tl.from(bgRightImgEl.value, {
        xPercent: 100,
        autoAlpha: 0.0,
        duration: 1.5,
        ease: "expo.inOut",
    }, '0');
    tl.from(
        mobileImgEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            yPercent: 100,
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
    
});
</script>

<template>
    <section ref="sectionEl" @wheel="onWheel" class='py-[20px] h-full flex flex-col justify-center'>
        <div ref="titleEl" data="titleEl" class='container'>
        <h2 class="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] leading-none font-black uppercase font-rfdewi text-center max-sm:text-2xl">summarize video</h2>
        <p class='text-center text-white text-2xl max-2xl:text-xl font-normal max-2xl:mt-3 font-gilroy mt-6 max-sm:text-base'>Get video summaries, timestamps, and similar videos - powered by GPT4</p>
        </div>
        <div class='flex justify-center items-center py-11 relative mt-16 max-2xl:mt-5 max-sm:mt-8'>
            <div ref="bgLeftImgEl" data="bgLeftImgEl" :style="{'--image-url': `url(${imgLeftBgWebp})`}"  class="bg-[image:var(--image-url)] bg-cover absolute left-0 top-0 h-full w-1/2 z-0 blur-sm"></div>
            <div ref="bgRightImgEl" data="bgRightImgEl" class='absolute bg-[#1F283A] right-0 top-0 h-full w-1/2 z-0'></div>
            <picture ref="mobileImgEl" data="mobileImgEl" class="pointer-events-none"><source :srcset="mobileSummWebp" type="image/webp" /><img :src="mobileSumm" alt="mobileSumm" class='w-[1150px] h-[612px] max-2xl:w-[920px] max-2xl:h-[490px] relative z-10 max-sm:w-full max-sm:h-auto' /></picture>
        </div>
    </section>
</template>


<style scoped>

</style>