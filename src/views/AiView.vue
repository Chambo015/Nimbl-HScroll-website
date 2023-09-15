<template>
    <section @wheel="onWheel" class="h-full py-5 flex items-center">
        <div class="mx-auto px-9"><h2 ref="titleEl" data="titleEl" class="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] leading-none font-black uppercase font-rfdewi text-center max-sm:text-2xl">AI research</h2>
        <div class="flex gap-52 mt-24 max-2xl:mt-10 max-2xl:gap-20">
            <div ref="leftVideoEl" data="leftVideoEl" class="max-w-[650px] mix-blend-lighten">
                <div class=" w-[640px] h-[387px] relative">
                    <img :src="frame_video" alt="frame_video" class="w-full h-full mix-blend-lighten pointer-events-none">
                    <video width="558" height="314" muted loop autoplay class="absolute top-9 left-9 rounded-xl" >
                        <source src="https://d2n3zca7e0phmo.cloudfront.net/aipravka.mp4" type="video/mp4" />
                    </video>
                </div>
                <h3 class="text-[40px] max-2xl:text-3xl mt-10 max-2xl:mt-6 font-rfdewi font-bold uppercase">longs to clips</h3>
                <p class=' text-white text-2xl font-normal font-gilroy mt-6 max-sm:mt-3 max-sm:text-base'>Auto Clipper AI automatically edits your long-form videos into polished, vertical clips</p>
            </div>
            <div ref="rightVideoEl" data="rightVideoEl" class="max-w-[650px] mix-blend-lighten"> <div class=" w-[640px] h-[387px] relative">
                    <img :src="frame_video" alt="frame_video" class="w-full h-full mix-blend-lighten pointer-events-none">
                    <Transition name="fade" >
                        <VideoPlayer v-if="readyToShowVideo" :lite="false" class="absolute top-9 left-9 rounded-xl w-[88%] h-[82%] object-cover" :video-src="video.videoSrc" :subtitles="video.subtitles" :voice-tracks="video.audioSrc"/>
                        <picture v-else><source :srcset="imglaunguagesWebp" type="image/webp" /><img loading="lazy" :src="imglaunguages" alt="imgMobileGpt" class=" absolute top-9 left-9 rounded-xl w-[88%] h-[82%] object-cover" /></picture>
                    </Transition>
                </div>
                <h3 class="text-[40px] max-2xl:text-3xl max-2xl:mt-6 mt-10 font-rfdewi font-bold uppercase">ai translate</h3>
                <p class=' text-white text-2xl font-normal font-gilroy mt-6 max-sm:mt-3 max-sm:text-base'>LLM tool translates your videos into 40 languages, making your content globally accessible.</p></div>
        </div></div>
    </section>
</template>

<script setup lang="ts">
import frame_video from '@/assets/ai_video_frame.png'
import imglaunguages from '@/assets/ai-launguages.png';
import imglaunguagesWebp from '@/assets/ai-launguages.webp';
import VideoPlayer from '@/components/AppVideoPlayer/VideoPlayer.vue';
import gsap from "gsap";
import useMouseWheel from "@/composables/mouseWheel";
import { onMounted, ref } from 'vue';
import {video} from '@/video'

const {onWheel} = useMouseWheel({toDownRoute: "handle", toUpRoute: "summarize"});

const leftVideoEl = ref();
const rightVideoEl = ref();
const titleEl = ref();
const readyToShowVideo = ref(false)

onMounted(() => {
    const tl = gsap.timeline({onComplete: () => {
        readyToShowVideo.value = true
    }});

    tl.from(leftVideoEl.value.children, {
        yPercent: 150,
        autoAlpha: 0.0,
        duration: 1.5,
        stagger: 0.3,
        ease: "expo.inOut",
    });
    tl.from(rightVideoEl.value.children, {
        yPercent: 150,
        autoAlpha: 0.0,
        duration: 1.5,
        stagger: 0.3,
        ease: "expo.inOut",
    }, '0');
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
/* onBeforeRouteLeave((__, _, next) => {
    const tl = gsap.timeline({onComplete: next});
    tl.to(leftVideoEl.value.children, {
        yPercent: 150,
        autoAlpha: 0.0,
        duration: 1.5,
        stagger: -0.3,
        ease: "expo.inOut",
    });
    tl.to(rightVideoEl.value.children, {
        yPercent: 150,
        autoAlpha: 0.0,
        duration: 1.5,
        stagger: -0.3,
        ease: "expo.inOut",
    }, '0');
    tl.to(
        titleEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            yPercent: -150,
            ease: "expo.inOut",
        },
        "0",
    );
}); */
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>