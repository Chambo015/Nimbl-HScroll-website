<template>
    <div
        class="card min-h-[90px] flex relative rounded-r-3xl  rounded-l-md cursor-pointer" :class="{'pointer-events-none [&>*]:opacity-50': isCompleted}">
        <div class="w-1/4 flex-shrink-0 rounded-l-md overflow-hidden h-full relative bg-cover bg-center" :style="{backgroundImage: `url(${imgUrl || defaultImgUrl})`}">
            <!-- <img :src="imgUrl" alt="image task" class="object-cover w-full h-full absolute inset-x-0 inset-y-0" /> -->
        </div>
        <div class="flex-grow-[2] flex-shrink relative flex p-3 gap-2 items-start justify-center flex-col bg_card_body" :style="{'--bg': `url(${noise})`}">
            <p class="font-tt-octosquares font-medium text-white text-xl !leading-tight max-md:text-sm max-2xl:text-lg">{{ name }}</p>
            <div class="flex gap-2 items-center">
                <img :src="logo" alt="nimbl" class="w-[14px] h-[14px] mt-1" />
                <p class="text-xl leading-none text-white font-tt-octosquares max-md:text-xs max-2xl:text-base">{{reward}} units</p>
            </div>
        </div>
      <!--   <div v-if="!isCompleted" class="bg_open  w-1/4 flex-shrink-0 flex items-center justify-center max-md:w-[12%] max-2xl:w-[23%]">
            <p class="font-Rollbox font-bold text-black text-2xl text-center max-md:rotate-90 max-md:text-base max-2xl:text-lg px-1">ACTIVE</p>
        </div> -->
        <div v-if="isCompleted" class="absolute right-0 z-2 !opacity-100">
            <Vue3Lottie :animation-link="doneLottieUrl" :height="100" :width="100" :loop="false" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import logo from "@/assets/invite/logo_white.png";
import noise from "@/assets/invite/noise_card_task.webp";

const defaultImgUrl = new URL('./nimbl-nimbl.png', import.meta.url).href
const doneLottieUrl = new URL('/lottie/done.json', import.meta.url).href

defineProps({
    imgUrl: {
        type: String,
        required: false,
    },
    reward: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    isCompleted: Boolean
})
</script>

<style scoped>
.card {
    --r: 15px;
    clip-path: polygon(
        0% 0%,
        calc(100% - var(--r)) 0%,
        100% var(--r),
        100% calc(100% - var(--r)),
        calc(100% - var(--r)) 100%,
        0% 100%
    );
}
.bg_card_body {
    background-image: linear-gradient(180deg, #5c2786 0%, #2f0053 100%);
}
.bg_card_body::before {
    content: "";
    background-image: var(--bg);
    background-size: cover;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    opacity: 0.9;
    mix-blend-mode: hard-light;
}
.bg_open {
    --r: 15px;
    clip-path: polygon(
        0% 0%,
        calc(100% - var(--r)) 0%,
        100% var(--r),
        100% calc(100% - var(--r)),
        calc(100% - var(--r)) 100%,
        0% 100%
    );
    background-image: linear-gradient(180deg, #b0731a -9.01%, #d0a530 22.91%, #f2d14e 63.49%);
}
</style>
