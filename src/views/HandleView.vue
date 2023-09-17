<template>
    <section ref="sectionEl" @wheel="onWheel" class="relative flex items-center justify-center h-full">
        <div ref="webEl" data="webEl" class="relative max-2xl:-translate-y-[5%]">
            <HandleWeb class='max-sm:w-[750px] max-sm:h-[365px]' />
            <picture>
                <source :srcset="radarIconWebp" type="image/webp" />
                <img
                    ref="iconImgEl" data="iconImgEl"
                    loading="lazy"
                    :src="radarIcon"
                    alt="radarIcon"
                    class="w-[112px] h-[112px] absolute left-1/2 -translate-x-1/2 bottom-[30%] max-sm:w-[54px] max-sm:h-[54px] max-sm:bottom-[28%] z-20" />
            </picture>
            <div
                ref="refImg5"
                class="bg-[#20133E] pb-3 px-[5px] absolute left-[50%] -translate-x-[800px] top-[35%] rounded-md pt-7 max-sm:-translate-x-[100px] max-sm:top-[58%] max-sm:pt-2 max-sm:pb-1">
                <img
                    loading="lazy"
                    :src="user1"
                    alt="user1"
                    class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 max-sm:w-8 max-sm:h-8" />
                <p class="text-white/50 text-xl font-gilroy font-medium max-sm:text-[8px]">@diasnkteam</p>
            </div>
            <div
                ref="refImg4"
                class="bg-[#20133E] pb-3 px-[7px] absolute left-[50%] -translate-x-[700px] top-[50%] rounded-md pt-7 max-sm:hidden">
                <img
                    loading="lazy"
                    :src="user2"
                    alt="user2"
                    class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 max-sm:w-5 max-sm:h-5" />
                <p class="text-white/50 text-xl font-gilroy font-medium max-sm:text-[8px]">@adilkhan.r</p>
            </div>
            <div
                ref="refImg3"
                class="bg-[#20133E] pb-3 px-[7px] absolute left-[50%] -translate-x-[500px] top-[65%] rounded-md pt-7  max-sm:hidden">
                <img
                    loading="lazy"
                    :src="user3"
                    alt="user3"
                    class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 max-sm:w-5 max-sm:h-5" />
                <p class="text-white/50 text-xl font-gilroy font-medium max-sm:text-[8px]">@kairkuka</p>
            </div>
            <div
                ref="refImg2"
                class="bg-[#20133E] pb-3 px-[7px] absolute left-[50%] -translate-x-[250px] top-[60%] rounded-md pt-7 max-sm:-translate-x-[180px] max-sm:top-[60%] max-sm:pt-2 max-sm:pb-1">
                <img
                    loading="lazy"
                    :src="user4"
                    alt="user4"
                    class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 max-sm:w-8 max-sm:h-8" />
                <p class="text-white/50 text-xl font-gilroy font-medium max-sm:text-[8px]">@buman</p>
            </div>
            <div
                ref="refImg5Prime"
                class="bg-[#20133E] pb-3 px-[7px] absolute right-[50%] top-[40%] rounded-md pt-7 max-sm:translate-x-[180px] max-sm:top-[61%] max-sm:pt-2 max-sm:pb-1">
                <img
                    loading="lazy"
                    :src="user4Prime"
                    alt="user4Prime"
                    class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 max-sm:w-8 max-sm:h-8" />
                <p class="text-white text-xl font-gilroy font-medium max-sm:text-[8px]">@buman</p>
            </div>
            <div ref="refImg4Prime" class="bg-[#20133E] pb-3 px-[7px] absolute right-[50%] top-[55%] rounded-md pt-7  max-sm:hidden">
                <img
                    loading="lazy"
                    :src="user3Prime"
                    alt="user3Prime"
                    class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 max-sm:w-5 max-sm:h-5" />
                <p class="text-white text-xl font-gilroy font-medium max-sm:text-[8px]">@kairkuka</p>
            </div>
            <div ref="refImg3Prime" class="bg-[#20133E] pb-3 px-[7px] absolute right-[50%] top-[65%] rounded-md pt-7  max-sm:hidden">
                <img
                    loading="lazy"
                    :src="user2Prime"
                    alt="user2Prime"
                    class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 max-sm:w-5 max-sm:h-5" />
                <p class="text-white text-xl font-gilroy font-medium max-sm:text-[8px]">@adilkhan.r</p>
            </div>
            <div
                ref="refImg2Prime" data="refImg2Prime"
                class="bg-[#20133E] pb-3 px-[7px] absolute right-[50%] top-[62%] rounded-md pt-7 max-sm:translate-x-[100px] max-sm:top-[54%] max-sm:pt-2 max-sm:pb-1">
                <img
                    loading="lazy"
                    :src="user1Prime"
                    alt="user1Prime"
                    class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 max-sm:w-8 max-sm:h-8" />
                <p class="text-white text-xl font-gilroy font-medium max-sm:text-[8px]">@diasnkteam</p>
            </div>
        </div>
        <h2
            ref="titleEl" data="titleEl"
            class="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-center mt-20 text-5xl font-rfdewi font-black uppercase absolute top-[30%] max-2xl:top-[25%] max-sm:text-2xl">
            Claim Your Handle
        </h2>
        <div
            ref="buttonEl" data="buttonEl"
            class="flex justify-center absolute left-1/2 bottom-[10%] -translate-x-1/2 max-sm:bottom-[30%]">
            <HeroButton class="w-[500px] h-[95px]">
                <p class="font-rfdewi text-2xl max-sm:text-sm font-bold">DOWNLOAD APP</p>
                <template #icon><IconFiveDots class="w-[37px] h-[37px]" /></template>
            </HeroButton>
        </div>
    </section>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import radarIcon from "@/assets/radar-icon.png";
import radarIconWebp from "@/assets/radar-icon.webp";
import user1 from "@/assets/user1.png";
import user2 from "@/assets/user2.png";
import user3 from "@/assets/user3.png";
import user4 from "@/assets/user4.png";
import user4Prime from "@/assets/user4-prime.png";
import user3Prime from "@/assets/user3-prime.png";
import user2Prime from "@/assets/user2-prime.png";
import user1Prime from "@/assets/user1-prime.png";
import gsap from "gsap";
import HeroButton from "@/components/HeroButton.vue";
import HandleWeb from "@/components/HandleWeb.vue";
import useMouseWheel from "@/composables/mouseWheel";
import IconFiveDots from "@/components/icons/IconFiveDots.vue";
import { useMediaQuery } from '@vueuse/core';

const isXS = useMediaQuery("(max-width: 640px)");

const refImg2 = ref<HTMLDivElement | null>(null);
const refImg3 = ref<HTMLDivElement | null>(null);
const refImg5 = ref<HTMLDivElement | null>(null);
const refImg4 = ref<HTMLDivElement | null>(null);

const refImg2Prime = ref<HTMLDivElement | null>(null);
const refImg3Prime = ref<HTMLDivElement | null>(null);
const refImg5Prime = ref<HTMLDivElement | null>(null);
const refImg4Prime = ref<HTMLDivElement | null>(null);

const startAnimationUsers = () => {
    const tl1 = gsap.timeline({repeat: -1});
    tl1.to(refImg2.value, {x: 0, autoAlpha: 0, duration: 3, scale: 0.5});
    tl1.fromTo(
        refImg5Prime.value,
        {x: 0, autoAlpha: 0, scale: 0.5, y: 200},
        {x: 850, autoAlpha: 1, duration: 5, scale: 1, y: 0},
        "<.2",
    );

    const tl2 = gsap.timeline({repeat: -1});
    tl2.to(refImg3.value, {x: 0, autoAlpha: 0, duration: 3, scale: 0.5});
    tl2.fromTo(
        refImg4Prime.value,
        {x: 0, autoAlpha: 0, scale: 0.5, y: 50},
        {x: 700, autoAlpha: 1, duration: 4, scale: 1, y: 0},
        "<.2",
    );

    const tl3 = gsap.timeline({repeat: -1});
    tl3.to(refImg5.value, {x: 0, autoAlpha: 0, duration: 3, scale: 0.5, y: 300});
    tl3.fromTo(
        refImg2Prime.value,
        {x: 0, autoAlpha: 0, scale: 0.5},
        {x: 550, autoAlpha: 1, duration: 3, scale: 1},
        "<.2",
    );

    const tl4 = gsap.timeline({repeat: -1});
    tl4.to(refImg4.value, {x: 0, autoAlpha: 0, duration: 3.5, scale: 0.5, y: 100});
    tl4.fromTo(
        refImg3Prime.value,
        {x: 0, autoAlpha: 0, scale: 0.5},
        {x: 650, autoAlpha: 1, duration: 4, y: 100, scale: 1},
        "<.2",
    );
}

onMounted(() => {
   if(!isXS.value) {
    startAnimationUsers()
} 
    
});

const sectionEl = ref();
const webEl = ref();
const iconImgEl = ref();
const titleEl = ref();
const buttonEl = ref();

const {onWheel} = useMouseWheel({toDownRoute: "token", toUpRoute: "ai", target: sectionEl});

onMounted(() => {
    const tl = gsap.timeline();

    tl.from(webEl.value, {
        autoAlpha: 0.0,
        duration: 1.5,
        ease: "expo.inOut",
    });
    tl.from(
        iconImgEl.value,
        {
            scale: 1.5,
            autoAlpha: 0.0,
            duration: 1.5,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.from(
        buttonEl.value,
        {
            yPercent: 150,
            autoAlpha: 0.0,
            duration: 1.5,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.from(
        titleEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            yPercent: -150,
            ease: "expo.inOut",
        },
        "0",
    );
});
</script>

<style scoped></style>
