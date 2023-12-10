<template>
    <div
        class="main__wrap group isolate"
        :class="[isCompleted ? 'bg-[#f5b3183d] is-completed' : isSpecial ? 'is-special' : 'bg-[#2a0a42]']">
        <div
            class="main__inner"
            @mouseenter="isHover = true"
            @mouseleave="isHover = false"
            :class="[isCompleted ? 'pointer-events-none [&>div]:opacity-50' : 'inside__shadow']">
            <div class="card__image" :style="{backgroundImage: `url(${imgUrl || defaultImgUrl})`}"></div>
            <div
                class="card__content relative isolate"
                :style="{'--bg': `url(${noise})`}"
                :class="[isCompleted && 'card__content_completed']">
                <p
                    class="font-tt-octosquares relative z-20 font-medium text-white text-xl !leading-tight max-md:text-sm max-2xl:text-lg"
                    :class="[ isSpecial && 'special-gradient-text font-bold ']">
                    {{ name }}
                </p>
                <div
                    class="flex gap-2 relative z-20 items-center pt-[2px] ring-[1.5px] pb-1 pl-1 pr-2 rounded-tr-md rounded-br-md rounded-tl-[15px] rounded-bl-[15px] transition-all"
                    :class="[
                        isCompleted
                            ? 'ring-[#f5b418] group-hover:bg-[#f5b418] ' : isSpecial ? 'ring-[#b400ad] group-hover:bg-[#b400ad]'
                            : ' ring-blue-500/60 group-hover:bg-blue-800',
                    ]">
                    <img :src="logo" alt="nimbl" class="w-[16px] h-[16px] translate-y-[1px]" />
                    <p class="text-xl !leading-none font-TTOctos max-md:text-xs max-2xl:text-base text-white">
                        {{ reward }} units
                        <span v-if="tweetsCount" class="ml-1">{{
                            "per " + tweetsCount.done_tweets + "/" + tweetsCount.limit_tweets
                        }}</span>
                        <span v-if="tweetsMetrics" class="ml-1">{{
                            "per " + tweetsMetrics.done_tweets + "/" + tweetsMetrics.all_tweets
                        }}</span>
                    </p>
                </div>
                <div
                    v-if="!isCompleted"
                    class="absolute right-0 z-0 rotate-[-0deg] h-[130%] aspect-square translate-x-[30%] origin-center translate-y-[-30%] top-1/2 opacity-30 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-[25%] group-hover:translate-y-[-35%] will-change-transform">
                    <img :src="isSpecial ? specialLogo : logoCircle" alt="" class="w-full h-full" />
                </div>
            </div>
            <div v-if="isCompleted" class="absolute right-0 top-1/2 z-30 -translate-y-1/2 z-2 !opacity-100">
                <Vue3Lottie :animation-data="doneTaskLottie" :height="120" :width="120" :loop="true" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {Vue3Lottie} from "vue3-lottie";
import {PropType, computed, ref} from "vue";
import {ITweetsCount, ITweetsMetricsCount} from "@/types";
import logo from "@/assets/invite/logo_white.png";
import logoCircle from "@/assets/preview/logo-circle.webp";
import specialLogo from "@/assets/preview/special-logo.webp";
import noise from "@/assets/invite/noise_card_task.webp";
import doneTaskLottie from "@/assets/lottie/done-task.json";

const props = defineProps({
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
    tweetsMetrics: {
        type: Object as PropType<ITweetsMetricsCount>,
        required: false,
    },
    isCompleted: Boolean,
});

const defaultImgUrl = new URL("/nimbl-nimbl.png", import.meta.url).href;
const isHover = ref(false);

const isSpecial = computed(() => props.name.includes("Retweet all Nimbl tv") || props.name.includes("Retweet latest post"));
</script>

<style scoped>
@property --a {
    syntax: "<angle>";
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
    @apply overflow-hidden min-h-[93px] relative;
}

.main__wrap.is-completed::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: conic-gradient(
        from var(--a) at 50% 50%,
        rgba(245, 179, 24, 0),
        rgba(0, 0, 0, 0),
        #f5b418,
        rgba(255, 71, 111, 0),
        rgba(245, 179, 24, 0),
        #f5b418,
        rgba(245, 179, 24, 0)
    );
    animation: animation-conic 4s linear infinite;
}

.main__wrap.is-special {
    box-shadow: 0px 0px 8px 10px #f5b318e3;
}
.main__wrap.is-special::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #15021b 0%, #ffd900b5 100%); ;
}
.main__inner {
    --b: max(2px, 0.3vh);
    --r: 15px;
    clip-path: polygon(
        0% 0%,
        calc(100% - var(--r)) 0%,
        100% var(--r),
        100% calc(100% - var(--r)),
        calc(100% - var(--r)) 100%,
        0% 100%
    );
    @apply bg-[#180e20] m-[var(--b)] w-[calc(100%_-_2*var(--b))] h-[calc(100%_-_2*var(--b))] overflow-hidden flex relative;
}
.card__image {
    /*  -webkit-box-shadow: inset 0px 0px 5px 3px rgba(0, 0, 0, 0.52);
    box-shadow: inset 0px 0px 5px 3px rgba(0, 0, 0, 0.52); */
    @apply w-[30%] flex-shrink-0 overflow-hidden h-full relative bg-cover bg-center;
}
.card__image::before {
    content: "";
    @apply absolute right-0 h-full w-full bg-gradient-to-l from-[#15021b] via-[#15021b76];
}

.card__image::after {
    content: "";
    padding-top: min(70%);
    display: block;
}
.card__content {
    background-image: linear-gradient(to right, #15021b 0%, #080e3f 100%);
    @apply flex-grow-[2] flex-shrink relative flex p-3 gap-2 items-start justify-center flex-col;
}

.main__wrap.is-special .card__content {
     background-image: linear-gradient(to right, #15021b 0%, #b400ae4d 100%);
}
/* #b400ad] */
.card__content_completed {
    background-color: #15021b;
    background-image: none;
}
.inside__shadow {
    @apply before:absolute before:z-30 before:w-full before:h-full hover:before:shadow-[0px_0px_100px_-20px_inset]
    hover:before:shadow-blue-700/70 before:shadow-blue-500/70 before:duration-500  before:transition-shadow before:origin-center;
}
</style>
