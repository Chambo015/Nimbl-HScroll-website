<template>
    <div class="main__wrap" :class="[isCompleted ? 'bg-[#f5b418]': 'bg-transparent']">
        <div class="main__inner" @mouseenter="isHover = true" @mouseleave="isHover = false" :class="[isCompleted ? 'pointer-events-none [&>div]:opacity-50' : '']">
            <div
                class="w-1/4 flex-shrink-0 overflow-hidden h-full relative bg-cover bg-center"
                :style="{backgroundImage: `url(${imgUrl || defaultImgUrl})`}"></div>
            <div
                class="flex-grow-[2] flex-shrink relative flex p-3 gap-2 items-start justify-center flex-col bg_card_body"
                :style="{'--bg': `url(${noise})`}">
                <p
                    class="font-tt-octosquares font-medium text-white text-xl !leading-tight max-md:text-sm max-2xl:text-lg">
                    {{ name }}
                </p>
                <div
                    class="flex gap-2 items-center bg-black/20 pt-[2px] pb-1 pl-1 pr-2 rounded-tr-md rounded-br-md rounded-tl-[15px] rounded-bl-[15px]">
                    <img :src="true ? logoOrange : logo" alt="nimbl" class="w-[16px] h-[16px] translate-y-[1px]" />
                    <p class="text-xl !leading-none  font-tt-octosquares max-md:text-xs max-2xl:text-base" :class="[ true ? 'text-[#f5b418]': 'text-white']">
                        {{ reward }} units<span v-if="tweetsCount" class="ml-2">{{
                            "per " + tweetsCount.done_tweets + "/" + tweetsCount.limit_tweets
                        }}</span>
                    </p>
                </div>
            </div>
            <div
                v-if="!isCompleted"
                class="bg_open  flex-shrink-0 flex items-center justify-center max-md:w-[12%] w-[17%] cursor-pointer">
                <p
                    class="font-TTOctos font-bold text-black text-2xl text-center max-md:rotate-90 max-md:text-base max-2xl:text-lg px-1">
                    CLAIM
                </p>
            </div>
            <div v-if="isCompleted" class="absolute right-0 top-1/2 -translate-y-1/2 z-2 !opacity-100">
                <Vue3Lottie :animation-data="doneTaskLottie" :height="100" :width="100" :loop="true" />
            </div>
        </div>
    </div>
    <!-- <div
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
        class="card inside__shadow  overflow-hidden border min-h-[90px] flex relative rounded-r-3xl rounded-l-md cursor-pointer"
        :class="[isCompleted ? 'pointer-events-none [&>*]:opacity-50 border-[#f5b418]' : 'border-white/30']">
        <div
            class="w-1/4 flex-shrink-0 rounded-l-md overflow-hidden h-full relative bg-cover bg-center"
            :style="{backgroundImage: `url(${imgUrl || defaultImgUrl})`}">
            
        </div>
        <div
            class="flex-grow-[2]  flex-shrink relative flex p-3 gap-2 items-start justify-center flex-col bg_card_body"
            :style="{'--bg': `url(${noise})`}">
            <p class="font-tt-octosquares font-medium text-white text-xl !leading-tight max-md:text-sm max-2xl:text-lg">
                {{ name }}
            </p>
            <div
                class="flex  gap-2 items-center bg-black/20 pt-[2px] pb-1 pl-1 pr-2 rounded-tr-md rounded-br-md rounded-tl-[15px] rounded-bl-[15px]">
                <img :src="logo" alt="nimbl" class="w-[16px] h-[16px] translate-y-[1px]" />
                <p class="text-xl !leading-none text-white font-tt-octosquares max-md:text-xs max-2xl:text-base">
                    {{ reward }} units<span v-if="tweetsCount" class="ml-2">{{"per " + tweetsCount.done_tweets + "/" + tweetsCount.limit_tweets
                    }}</span>
                </p>
            </div>
        </div>
        
        <div v-if="isCompleted" class="absolute right-0 top-1/2 -translate-y-1/2 z-2 !opacity-100">
            <Vue3Lottie :animation-data="doneTaskLottie" :height="100" :width="100" :loop="true" />
        </div>
    </div> -->
    <!--   <div v-if="!isCompleted" class="bg_open  w-1/4 flex-shrink-0 flex items-center justify-center max-md:w-[12%] max-2xl:w-[23%]">
            <p class="font-Rollbox font-bold text-black text-2xl text-center max-md:rotate-90 max-md:text-base max-2xl:text-lg px-1">ACTIVE</p>
        </div> -->
</template>

<script setup lang="ts">
import {PropType, ref} from "vue";
import {ITweetsCount} from "@/types";
import {Vue3Lottie} from "vue3-lottie";
import logo from "@/assets/invite/logo_white.png";
import logoOrange from "@/assets/invite/logo_orange.png";
import noise from "@/assets/invite/noise_card_task.webp";
import doneTaskLottie from "@/assets/lottie/done-task.json";

const defaultImgUrl = new URL("/nimbl-nimbl.png", import.meta.url).href;
const isHover = ref(false);

defineProps({
    imgUrl: {
        type: String,
        required: false,
    },
    reward: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    tweetsCount: {
        type: Object as PropType<ITweetsCount>,
        required: false,
    },
    isCompleted: Boolean,
});
</script>

<style scoped>
@property --a  {
    syntax: '<angle>';
        inherits: false;
    initial-value: 0deg;
}
@keyframes animation-conic {
    0% {
        --a: 0deg;
    }
    100% {
        --a: 360deg;
    }
}
.main__wrap {
    --r: 15px;
    clip-path: polygon(
        0% 0%,
        calc(100% - var(--r)) 0%,
        100% var(--r),
        100% calc(100% - var(--r)),
        calc(100% - var(--r)) 100%,
        0% 100%
    );
    @apply overflow-hidden min-h-[93px] relative ;
}

.main__wrap::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: conic-gradient(from var(--a) at 50% 50%, rgba(245,179,24,0), rgba(0, 0, 0, 0), #f5b418, rgba(255,71,111,0), rgba(245, 179, 24, 0), #F5B418, rgba(245, 179, 24, 0));
    animation: animation-conic 4s linear infinite;
   
}
.main__inner {
    --b: 1.5px;
    --r: 15px;
    clip-path: polygon(
        0% 0%,
        calc(100% - var(--r)) 0%,
        100% var(--r),
        100% calc(100% - var(--r)),
        calc(100% - var(--r)) 100%,
        0% 100%
    );
    @apply bg-black m-[var(--b)] w-[calc(100%_-_2*var(--b))] h-[calc(100%_-_2*var(--b))] overflow-hidden flex relative;
}
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

.inside__shadow {
    @apply before:absolute before:z-30 before:w-full before:h-full hover:before:shadow-[0px_0px_100px_-20px_inset] 
    hover:before:shadow-blue-700/70 before:shadow-blue-500/70 before:duration-500  before:transition-shadow before:origin-center;
}


</style>
