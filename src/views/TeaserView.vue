<script setup lang="ts">
import handImg from "@/assets/hand.png";
import handLgImg from "@/assets/hand_lg.png";
import handImgWebp from "@/assets/hand.webp";
import HeroButton from "@/components/HeroButton.vue";
import IconFiveDots from '@/components/icons/IconFiveDots.vue';
import gsap from "gsap";
import useMouseWheel from "@/composables/mouseWheel";
import { onMounted, ref } from 'vue';

const {onWheel} = useMouseWheel({toDownRoute: "transfers", toUpRoute: "swipe"});

const mainImgEl = ref();
const contentEl = ref();

onMounted(() => {
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

/* onBeforeRouteLeave((__, _, next) => {
    const tl = gsap.timeline({onComplete: next});

    tl.to(mainImgEl.value, {
        xPercent: 100,
        autoAlpha: 0.0,
        duration: 1.5,
        rotate: 180,
        transformOrigin: 'bottom right',
        ease: "expo.inOut",
    });
    tl.to(
      contentEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            xPercent: -100,
            stagger: 0.2,
            ease: "expo.inOut",
        },
        "0",
    );
}); */
</script>

<template>
    <section @wheel="onWheel" class="h-full pt-12">
        <div class=" justify-end flex max-sm:flex-col h-full">
            <div ref="contentEl" data="contentEl" class="shrink-0 self-center">
                <h2
                    class="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text font-rfdewi font-black uppercase text-5xl max-sm:text-2xl max-sm:text-center">
                    clips<span class="text-2xl font-univers lowercase mx-1 max-sm:text-sm">to</span>Longs
                </h2>
                <p
                    class="w-[540px] font-gilroy text-2xl text-white mt-14 max-sm:text-base max-sm:w-full max-sm:text-center max-sm:mt-3">
                    Post a short-form teaser leading to a long-form video, get the outreach of bite-sized content into
                    your longer piece of content.
                </p>
                <div class="mt-14 max-sm:flex max-sm:justify-center">
                    <HeroButton class="w-[500px] h-[95px]">
                        <p class="font-rfdewi text-2xl max-sm:text-sm font-bold">DOWNLOAD APP</p><template #icon><IconFiveDots class="w-[37px] h-[37px]" /></template>
                    </HeroButton>
                </div>
            </div>
            <div ref="mainImgEl" data="mainImgEl" class="shrink-0 max-sm:mt-5 relative">
                <picture>
                    <!-- <source :srcset="handImgWebp" type="image/webp" /> -->
                    <img
                        loading="lazy"
                        :src="handLgImg"
                        alt="handImg"
                        class="w-full h-full object-contain object-bottom  max-sm:h-auto" />
                </picture>
                <div
                    class="absolute w-[31%] z-20 h-[70%] top-[5%] left-[11%] rounded-[50px] overflow-hidden max-sm:w-[54%] max-sm:left-[20%]">
                    <video class="w-full h-full" muted loop autoplay >
                        <source src="https://d2n3zca7e0phmo.cloudfront.net/lv_0_20230824191446.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
