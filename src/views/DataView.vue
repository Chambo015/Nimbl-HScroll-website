<template>
    <section ref="sectionEl" @wheel="onWheel" class="h-full">
        <div  class="flex justify-center -mb-[350px] max-2xl:-mb-[300px] max-sm:-mb-[130px]">
            <picture class="flex justify-center pointer-events-none select-none ">
                <source :srcset="imgBgWebp" type="image/webp" />
                <img ref="mainImgEl" data="mainImgEl" width="1919" height="658" :src="imgBg" alt="imgBg" class="w-[1920px] max-3xl:-mt-[100px]  max-sm:max-w-[150%] max-sm:mt-0 object-contain mix-blend-lighten" />
            </picture>
        </div>
        <div ref="contentEl" data="contentEl">
            <div class="text-center relative">
                <span
                    class="text-[#0061F0] text-center text-4xl max-2xl:text-3xl font-medium font-gilroy py-1 px-2 max-sm:text-sm bg-[#001D48] border border-[#1017B9] max-sm:mx-auto max-sm:table mx-auto">
                    Powered by Lens Protocol
                </span>
                <h2
                    class="mt-8 bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-5xl font-black uppercase font-rfdewi max-sm:text-2xl max-sm:w-full leading-none max-sm:text-center max-sm:mt-5">
                    DECENTRALIZED SOCIAL GRAPH
                </h2>
                <p
                    class="font-gilroy mt-5 text-white/80 text-2xl font-normal max-sm:text-sm max-sm:w-full max-sm:text-center max-sm:mt-3">
                    Own your data <span><IconChain class="inline" /></span> Own your content
                </p>
            </div>
            <div class="flex items-center justify-center gap-16 mt-16 max-sm:flex-col max-sm:mt-8">
                <div
                    class="relative [&>span]:absolute [&>span]:bg-[#22202F] [&>span]:font-gilroy max-2xl:[&>span]:text-2xl [&>span]:text-3xl [&>span]:rounded [&>span]:px-2 [&>span]:py-1 max-sm:[&>span]:text-base">
                    <picture class="flex justify-center pointer-events-none select-none ">
                        <source :srcset="personDataWebp" type="image/webp" />
                        <img :src="personData" alt="imgBg" width="250" height="250" class="w-[250px] h-[250px] max-sm:w-[160px] max-sm:h-[160px]" />
                    </picture>
                    <span
                        :style="{transform: `translate(${coords.x},${coords.y})`}"
                        class="-left-5 -top-5 transition-transform duration-75 max-sm:-left-3 max-sm:-top-3"
                        >Interests</span
                    >
                    <span
                        :style="{transform: `translate(${coords.x},${coords.y})`}"
                        class="-right-10 top-0 transition-transform duration-[40ms] max-sm:-right-5 "
                        >Cookies</span
                    >
                    <span
                        :style="{transform: `translate(${coords.x},${coords.y})`}"
                        class="-left-14 bottom-8 transition-transform duration-[50ms] max-sm:-left-7 max-sm:bottom-8"
                        >Data</span
                    >
                    <span
                        :style="{transform: `translate(${coords.x},${coords.y})`}"
                        class="-left-1 -bottom-8 transition-transform duration-[60ms] max-sm:-left-0 max-sm:-bottom-5"
                        >Chats</span
                    >
                    <span
                        :style="{transform: `translate(${coords.x},${coords.y})`}"
                        class="-right-10 bottom-0 transition-transform duration-[65ms]"
                        >History</span
                    >
                </div>
                <div class="max-sm:hidden"><LocksCenter class="w-[770px] h-[380px] max-2xl:w-[460px] max-2xl:h-[240px]" /></div>
                <div
                    class="relative [&>span]:absolute [&>span]:bg-[#22202F] [&>span]:font-gilroy  max-2xl:[&>span]:text-2xl [&>span]:text-3xl [&>span]:rounded [&>span]:px-2 [&>span]:py-1 max-sm:[&>span]:text-base">
                    <picture class="flex justify-center pointer-events-none select-none">
                        <source :srcset="dataNimblWebp" type="image/webp" />
                        <img :src="dataNimbl" alt="imgBg" width="312" height="203" class="w-[289px] h-[181px] max-sm:w-[200px] max-sm:h-[120px]" />
                    </picture>
                    <span
                        :style="{transform: `translate(${coords.x},${coords.y})`}"
                        class="-left-5 -top-5 transition-transform duration-[35ms]"
                        >Content</span
                    >
                    <span
                        :style="{transform: `translate(${coords.x},${coords.y})`}"
                        class="-right-5 -top-5 transition-transform duration-[45ms]"
                        >Posts</span
                    >
                    <span
                        :style="{transform: `translate(${coords.x},${coords.y})`}"
                        class="-left-12 bottom-5 transition-transform duration-[55ms]"
                        >Likes</span
                    >
                    <span
                        :style="{transform: `translate(${coords.x},${coords.y})`}"
                        class="-left-2 -bottom-10 transition-transform duration-[65ms]"
                        >Shares</span
                    >
                    <span
                        :style="{transform: `translate(${coords.x},${coords.y})`}"
                        class="-right-14 -bottom-5 transition-transform duration-[70ms]"
                        >Comments</span
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, computed, ref} from "vue";
import imgBg from "@/assets/db-bg.png";
import imgBgWebp from "@/assets/db-bg.webp";
import personData from "@/assets/person-data.png";
import personDataWebp from "@/assets/person-data.webp";
import dataNimbl from "@/assets/data-nimbl.png";
import dataNimblWebp from "@/assets/data-nimbl.webp";
import IconChain from "@/components/DataView/IconChain.vue";
import LocksCenter from "@/components/DataView/LocksCenter.vue";
import gsap from "gsap";
import useMouseWheel from "@/composables/mouseWheel";
import { useMediaQuery } from '@vueuse/core';

const isXS = useMediaQuery("(max-width: 640px)");

const sectionEl = ref();
const mainImgEl = ref();
const contentEl = ref();

const X = ref();
const Y = ref();

const coords = computed(() => ({x: `${X.value * 35}px`, y: `${Y.value * 35}px`}));

const mouseEventHandle = (e: any) => {
    X.value = (e.clientX - window.innerWidth / 2) / window.innerWidth;
    Y.value = (e.clientY - window.innerHeight / 2) / window.innerHeight;
};
onMounted(() => {
    window.addEventListener("mousemove", mouseEventHandle);
});
onUnmounted(() => {
    window.removeEventListener("mousemove", mouseEventHandle);
});

const {onWheel} = useMouseWheel({toDownRoute: "moderation", toUpRoute: "tokenized", target: sectionEl});

onMounted(() => {
    if(isXS.value) return
    const tl = gsap.timeline();

    tl.from(mainImgEl.value, {
        autoAlpha: 0.0,
        duration: 1.5,
        ease: "expo.inOut",
    });
    tl.from(
        contentEl.value.children,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            yPercent: 100,
            stagger: 0.2,
            ease: "expo.inOut",
        },
        "0",
    );
});
</script>

<style scoped></style>
