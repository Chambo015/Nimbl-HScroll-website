<script setup lang="ts">
import handLgImg from "@/assets/hand_lg.png";
import handLgImgWebp from "@/assets/hand_lg.webp";
import HeroButton from "@/components/HeroButton.vue";
import IconFiveDots from '@/components/icons/IconFiveDots.vue';
import gsap from "gsap";
import useMouseWheel from "@/composables/mouseWheel";
import { onMounted, ref } from 'vue';
import { useMediaQuery } from '@vueuse/core';

const isXS = useMediaQuery("(max-width: 640px)");

const sectionEl = ref();
const mainImgEl = ref();
const contentEl = ref();

const {onWheel} = useMouseWheel({toDownRoute: "transfers", toUpRoute: "swipe", target: sectionEl});

onMounted(() => {
    if(isXS.value) return
    const tl = gsap.timeline();

    tl.from(mainImgEl.value, {
        xPercent: 100,
        autoAlpha: 0.0,
        duration: 1.5,
        rotate: 180,
        transformOrigin: 'bottom right',
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
    <section ref="sectionEl" @wheel="onWheel" class="pt-12 max-sm:pt-0">
        <div class="container justify-between flex max-sm:flex-col h-full max-sm:justify-start max-sm:pt-5">
            <div ref="contentEl" data="contentEl" class="self-center flex-shrink-0 ">
                <h2
                    class="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text font-rfdewi font-black uppercase text-5xl max-sm:text-2xl max-sm:text-center">
                    clips<span class="text-2xl font-univers lowercase mx-1 max-sm:text-sm">to</span>Longs
                </h2>
                <p
                    class="w-[540px] font-gilroy text-2xl text-white mt-14 max-sm:text-base max-sm:w-full max-sm:text-center max-sm:mt-3">
                    Post a short-form teaser leading to a long-form video, get the outreach of bite-sized content into
                    your longer piece of content.
                </p>
                <div class="mt-14 max-sm:flex max-sm:justify-center max-sm:hidden
                ">
                    <HeroButton class="w-[500px] h-[95px]">
                        <p class="font-rfdewi text-2xl max-sm:text-sm font-bold">DOWNLOAD APP</p><template #icon><IconFiveDots class="w-[37px] h-[37px]" /></template>
                    </HeroButton>
                </div>
            </div>
            <div ref="mainImgEl" data="mainImgEl" class="shrink-0 max-sm:mt-5 relative max-sm:w-[180%] " >
                <picture class="relative ">
                    <source :srcset="handLgImgWebp" type="image/webp" />
                    <img
                        loading="lazy"
                        :src="handLgImg"
                        alt="handImg"
                        class="w-full h-full object-contain object-bottom  max-sm:h-auto relative " />
                </picture>
                <div class="from-transparent to-[#0F0722] bg-gradient-to-r absolute right-0 inset-y-0 w-[200px] max-sm:hidden"></div>
                <div
                    class="absolute w-[31%] z-20 h-[70%] top-[5%] left-[11%] rounded-[50px] overflow-hidden max-sm:w-[31%] max-sm:left-[11%] max-sm:rounded-3xl ">
                    <video class="w-full h-full max-sm:rounded-3xl" muted loop autoplay >
                        <source src="https://d2n3zca7e0phmo.cloudfront.net/lv_0_20230824191446.mp4" type="video/mp4" class="max-sm:rounded-3xl" />
                    </video>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
