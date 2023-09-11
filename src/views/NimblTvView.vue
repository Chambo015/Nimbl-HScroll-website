<script setup lang="ts">
import HeroButton from "@/components/HeroButton.vue";
import lightImg from "@/assets/light.png";
import lightImgWebp from "@/assets/light.webp";
import HeroSliderApp from "@/components/HeroSliderApp.vue";
import IconFiveDots from "@/components/icons/IconFiveDots.vue";
import gsap from "gsap";
import {onMounted, ref} from "vue";
import {onBeforeRouteLeave, useRoute} from "vue-router";

const route = useRoute();

const sliderEl = ref();
const buttonsEl = ref();
const titleEl = ref();
const lightEl = ref();

onMounted(() => {
    const tl = gsap.timeline();

    tl.from(sliderEl.value, {
        autoAlpha: 0.0,
        duration: 1.5,
        scale: 0.0,
        ease: "expo.inOut",
        delay: route.meta.firstPage ? 2 : 0,
    });
    tl.from(
        buttonsEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            yPercent: 100,
            ease: "expo.inOut",
            delay: route.meta.firstPage ? 2: 0,
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
            delay: route.meta.firstPage ? 2 : 0,
        },
        "0",
    );
    tl.from(
      lightEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            delay: route.meta.firstPage ? 2 : 0,
        },
        "0",
    );
});

onBeforeRouteLeave((__, _, next) => {
  const tl = gsap.timeline({onComplete: next});

    tl.to(sliderEl.value, {
        autoAlpha: 0.0,
        duration: 1,
        scale: 0.0,
        ease: "expo.inOut",
    });
    tl.to(
        buttonsEl.value,
        {
            autoAlpha: 0.0,
            duration: 1,
            yPercent: 100,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.to(
      titleEl.value,
        {
            autoAlpha: 0.0,
            duration: 1,
            yPercent: -100,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.to(
      lightEl.value,
        {
            autoAlpha: 0.0,
            duration: 1,
        },
        "0",
    );
})
</script>

<template>
    <section class="relative h-full w-full">
        <picture ref="lightEl">
            <source :srcset="lightImgWebp" type="image/webp" />
            <img
                :src="lightImg"
                alt="lightImg"
                loading="lazy"
                class="absolute top-0 left-1/2 -translate-x-1/2 z-40 select-none pointer-events-none" />
        </picture>
        <div ref="titleEl" class="container justify-center flex pt-[50px] max-sm:pt-[40px]">
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
        <div ref="sliderEl">
            <HeroSliderApp />
        </div>
        <div
            ref="buttonsEl"
            class="absolute left-1/2 p-6 gap-4 bottom-16 z-10 -translate-x-1/2 flex justify-center mt-11 max-sm:flex-col items-center bg-[linear-gradient(90deg,#2B253A_0%,#3E3A6E_100%)]">
            <HeroButton
                >APPLY FOR CLOSED BETA<template #icon><IconFiveDots /></template
            ></HeroButton>
            <HeroButton regular>LAUNCH DESKTOP DEMO APP</HeroButton>
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
