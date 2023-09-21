<script setup lang="ts">
import tokenCoins from "@/assets/token-coins.png";
import podium from "@/assets/podium.png";
import tokenCard from "@/assets/token-card.png";
import gsap from "gsap";
import useMouseWheel from "@/composables/mouseWheel";
import {onMounted, ref} from "vue";
import {useMediaQuery} from "@vueuse/core";

const isXS = useMediaQuery("(max-width: 640px)");

const sectionEl = ref();
const titleEl = ref();
const listEl = ref();
const starShipsEl = ref();
const imgEarthEl = ref();

const {onWheel} = useMouseWheel({toDownRoute: "roadmap", toUpRoute: "handle", target: sectionEl});

onMounted(() => {
    if (isXS.value) return;
    /* const tl = gsap.timeline();

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
    tl.from(
        listEl.value.children,
        {
            xPercent: -100,
            autoAlpha: 0.0,
            duration: 1.5,
            stagger: -0.1,
            ease: "expo.inOut",
        },
        "0",
    ); */
});
</script>

<template>
    <section ref="sectionEl" @wheel="onWheel" class="h-full flex flex-col  max-3xl:pt-9 bg-black relative">
        <div ref="titleEl" data="titleEl" class="text-center">
            <h2 class="main-title">NIMBL TOKEN<span class="main-text-layer">NIMBL TOKEN</span></h2>
            <p class="text-center text-white font-gilroy text-3xl max-sm:text-base -translate-y-5">
              $NIMBL is a utility token that acts as the platform currency
            </p>
        </div>
        <div class="flex flex-col justify-center items-center relative after:absolute after:w-full after:h-[30%] after:bg-gradient-to-b after:to-black after:bottom-0 after:from-black/10 ">
            <div>
                <div></div>
            </div>
            <img :src="tokenCoins" alt="tokenCoins" width="618" height="392">
            <img :src="podium" alt="podium" width="820" height="170">
            <div class="bg-btn-bg-liner border-[#7351C8] border-[2px] shadow-[0px_2px_5px_6px_rgba(101,41,225,0.35)] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
                <div class="flex flex-col items-center -mt-14 w-[665px] pb-6">
                    <img :src="tokenCard" alt="tokenCard" width="134" height="119" class="pointer-events-none select-none">
                    <ul class="flex gap-1 font-gilroy text-3xl">
                        <li>Stake</li>
                        <li>$Nimbl</li>
                        <li>to gain governance</li>
                    </ul>
                </div>
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
    @apply text-center font-rfdewi inline-block bg-clip-text text-white text-[88px] max-sm:text-[50px] leading-none font-black uppercase -translate-x-2 -translate-y-7 max-sm:-translate-x-0 max-sm:-translate-y-6;
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
