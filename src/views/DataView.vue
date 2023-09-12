<template>
    <section @wheel="onWheel" class="h-full">
        <div  class="flex justify-center -mb-[250px] max-sm:-mb-[70px]">
            <picture class="flex justify-center pointer-events-none select-none">
                <source :srcset="imgBgWebp" type="image/webp" />
                <img ref="mainImgEl" :src="imgBg" alt="imgBg" class="w-[1920px] max-sm:max-w-[150%] object-contain mix-blend-lighten" />
            </picture>
        </div>
        <div ref="contentEl" class="">
            <div class="text-center">
                <span
                    class="text-[#0061F0] text-center text-4xl font-medium font-gilroy py-1 px-2 max-sm:text-sm bg-[#001D48] border border-[#1017B9] max-sm:mx-auto max-sm:table mx-auto">
                    Powered by Lens Protocol
                </span>
                <h2
                    class="mt-8 bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-5xl font-black uppercase font-rfdewi max-sm:text-2xl max-sm:w-full leading-none max-sm:text-center">
                    DECENTRALIZED SOCIAL GRAPH
                </h2>
                <p
                    class="font-gilroy mt-5 text-white/80 text-2xl font-normal max-sm:text-sm max-sm:w-full max-sm:text-center">
                    Own your data <span><IconChain class="inline" /></span> Own your content
                </p>
            </div>
            <div class="flex items-center justify-center gap-16 mt-16">
                <div
                    class="relative [&>span]:absolute [&>span]:bg-[#22202F] [&>span]:font-gilroy [&>span]:text-3xl [&>span]:rounded [&>span]:px-2 [&>span]:py-1">
                    <picture class="flex justify-center pointer-events-none select-none">
                        <!-- <source :srcset="imgBgWebp" type="image/webp" /> -->
                        <img :src="personData" alt="imgBg" class="w-[250px] h-[250px]" />
                    </picture>
                    <span
                        :style="{transform: `translate(${coords.x},${coords.y})`}"
                        class="-left-5 -top-5 transition-transform duration-75"
                        >Interests</span
                    >
                    <span
                        :style="{transform: `translate(${coords.x},${coords.y})`}"
                        class="-right-10 top-0 transition-transform duration-[40ms]"
                        >Cookies</span
                    >
                    <span
                        :style="{transform: `translate(${coords.x},${coords.y})`}"
                        class="-left-14 bottom-8 transition-transform duration-[50ms]"
                        >Data</span
                    >
                    <span
                        :style="{transform: `translate(${coords.x},${coords.y})`}"
                        class="-left-1 -bottom-8 transition-transform duration-[60ms]"
                        >Chats</span
                    >
                    <span
                        :style="{transform: `translate(${coords.x},${coords.y})`}"
                        class="-right-10 bottom-0 transition-transform duration-[65ms]"
                        >History</span
                    >
                </div>
                <div><LocksCenter class="w-[770px] h-[401px]" /></div>
                <div
                    class="relative [&>span]:absolute [&>span]:bg-[#22202F] [&>span]:font-gilroy [&>span]:text-3xl [&>span]:rounded [&>span]:px-2 [&>span]:py-1">
                    <picture class="flex justify-center pointer-events-none select-none">
                        <!-- <source :srcset="imgBgWebp" type="image/webp" /> -->
                        <img :src="dataNimbl" alt="imgBg" class="w-[289px] h-[181px]" />
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
import dataNimbl from "@/assets/data-nimbl.png";
import IconChain from "@/components/DataView/IconChain.vue";
import LocksCenter from "@/components/DataView/LocksCenter.vue";
import gsap from "gsap";
import {onBeforeRouteLeave} from "vue-router";
import useMouseWheel from "@/composables/mouseWheel";

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

const {onWheel} = useMouseWheel({toDownRoute: "moderation", toUpRoute: "tokenized"});

const mainImgEl = ref();
const contentEl = ref();

onMounted(() => {
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

onBeforeRouteLeave((__, _, next) => {
    const tl = gsap.timeline({onComplete: next});

    tl.to(mainImgEl.value, {
        autoAlpha: 0.0,
        duration: 1.5,
        ease: "expo.inOut",
    });
    tl.to(
        contentEl.value,
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
