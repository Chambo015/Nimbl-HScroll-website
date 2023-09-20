<script setup lang="ts">
import HeroButton from "@/components/HeroButton.vue";
import lightImg from "@/assets/light.png";
import lightImgWebp from "@/assets/light.webp";
import HeroSliderApp from "@/components/HeroSliderApp.vue";
import IconFiveDots from "@/components/icons/IconFiveDots.vue";
import gsap from "gsap";
import {computed, onMounted, ref, watchEffect} from "vue";
import useMouseWheel from "@/composables/mouseWheel";
import { useMediaQuery, useWindowSize } from '@vueuse/core';

const props = defineProps({
    ready: Boolean,
});

const isXS = useMediaQuery("(max-width: 640px)");

const sectionEl = ref()
const sliderEl = ref();
const buttonsEl = ref();
const titleEl = ref();
const lightEl = ref();

const {onWheel} = useMouseWheel({toDownRoute: "stakes", target: sectionEl});

watchEffect(() => {
    if(props.ready) {
        gsap.to(lightEl.value, {
        autoAlpha: 1,
        delay: 1.5,
        duration: 1,
    });
    }
});

const { height } = useWindowSize()
const previewOnMobile = computed(() => {
    if(height.value < 700) {
        return 'top-1/2 -translate-y-[55%] scale-[1.8] '
    } else  {
        return 'top-1/2 -translate-y-[60%] scale-[2]'
    }  
}) 

onMounted(() => {
    if(isXS.value) return
    const tl = gsap.timeline();

    tl.from(sliderEl.value, {
        autoAlpha: 0.0,
        duration: 1.5,
        scale: 0.0,
        ease: "expo.inOut",
    });
    tl.from(
        buttonsEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            yPercent: 100,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.from(
        titleEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            yPercent: -100,
            ease: "expo.inOut",
        },
        "0",
    );
});
</script>

<template>
    <section
        ref="sectionEl"
        @wheel="onWheel"
        class="relative w-full "
       >
       <div class="transition-all duration-[1s] delay-100 w-full left-0 absolute"  :class=" ready ? 'scale-100 -translate-y-0 top-0' : isXS? previewOnMobile : 'scale-[0.48] max-2xl:scale-[0.4] top-1/2 -translate-y-1/2'">
            <picture ref="lightEl" data="lightEl" class="opacity-0">
                <source :srcset="lightImgWebp" type="image/webp" />
                <img
                    :src="lightImg"
                    alt="lightImg"
                    loading="lazy"
                    class="absolute top-0 left-1/2 -translate-x-1/2 z-40 select-none pointer-events-none" />
            </picture>
            <div ref="titleEl" data="titleEl" class="container justify-center flex pt-[50px] max-sm:pt-[40px]">
                <div class="inline-flex flex-col">
                    <p
                        class="text-justify font-gilroy leading-none after:inline-block after:w-full text-white text-2xl max-sm:text-xs font-normal uppercase tracking-[.6em] max-sm:tracking-[.3em]">
                        Flagship Social Media Platform
                    </p>
                    <h1 class="main-title">
                        NIMBL.TV
                        <span class="main-text-layer">NIMBL.TV</span>
                    </h1>
                </div>
            </div>
            <div ref="sliderEl" class="relative">
                <HeroSliderApp data="slider_h_El" />
            </div>
            <div
                ref="buttonsEl"
                data="buttonsEl"
                class="max-sm:hidden absolute left-1/2 p-6 gap-4 bottom-16 z-10 -translate-x-1/2 flex justify-center mt-11 max-sm:flex-col items-center bg-[linear-gradient(90deg,#2B253A_0%,#3E3A6E_100%)]">
                <HeroButton
                    >APPLY FOR CLOSED BETA<template #icon><IconFiveDots /></template
                ></HeroButton>
                <HeroButton regular>LAUNCH DESKTOP DEMO APP</HeroButton>
            </div>
            <div class="w-[266px] h-[55px] mx-auto mt-5 hidden max-sm:block">
                <HeroButton
                    >DOWNLOAD APP<template #icon><IconFiveDots /></template
                ></HeroButton>
            </div>
       </div>
    </section>
</template>

<style scoped>
.main-title {
    background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.3) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    @apply text-center font-rfdewi inline-block bg-clip-text text-white text-[145px] max-sm:text-[50px] leading-none font-black uppercase -translate-x-2 -translate-y-7 max-sm:-translate-x-0 max-sm:-translate-y-6;
}
.main-text-layer {
    background-image: url("../assets/image1895.png");
    background-size: contain;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    mix-blend-mode: overlay;
    z-index: 1;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
