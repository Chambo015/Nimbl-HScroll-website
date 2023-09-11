<template>
    <section class="h-full py-14 flex items-center">
        <div class="mx-auto px-9"><h2 class="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] leading-none font-black uppercase font-rfdewi text-center max-sm:text-2xl">AI research</h2>
        <div class="flex gap-52 mt-24">
            <div class="max-w-[650px]">
                <div class=" w-[640px] h-[387px] relative">
                    <img :src="frame_video" alt="frame_video" class="w-full h-full mix-blend-lighten pointer-events-none">
                    <video width="558" height="314" muted loop autoplay class="absolute top-9 left-9 rounded-xl" >
                        <source src="https://d2n3zca7e0phmo.cloudfront.net/aipravka.mp4" type="video/mp4" />
                    </video>
                </div>
                <h3 class="text-[40px] mt-10 font-rfdewi font-bold uppercase">longs to clips</h3>
                <p class=' text-white text-2xl font-normal font-gilroy mt-6 max-sm:mt-3 max-sm:text-base'>Auto Clipper AI automatically edits your long-form videos into polished, vertical clips</p>
            </div>
            <div class="max-w-[650px]"> <div class=" w-[640px] h-[387px] relative">
                    <img :src="frame_video" alt="frame_video" class="w-full h-full mix-blend-lighten pointer-events-none">
                    <picture><source :srcset="imglaunguagesWebp" type="image/webp" /><img loading="lazy" :src="imglaunguages" alt="imgMobileGpt" className=" absolute top-9 left-9 rounded-xl w-[88%] h-[82%] object-cover" /></picture>
                </div>
                <h3 class="text-[40px] mt-10 font-rfdewi font-bold uppercase">ai translate</h3>
                <p class=' text-white text-2xl font-normal font-gilroy mt-6 max-sm:mt-3 max-sm:text-base'>LLM tool translates your videos into 40 languages, making your content globally accessible.</p></div>
        </div></div>
    </section>
</template>

<script setup lang="ts">
import frame_video from '@/assets/ai_video_frame.png'
import imglaunguages from '@/assets/ai-launguages.png';
import imglaunguagesWebp from '@/assets/ai-launguages.webp';
</script>

<style scoped>

</style>