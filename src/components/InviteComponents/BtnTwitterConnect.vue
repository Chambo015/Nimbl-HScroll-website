<template>
    <div class="main__wrap relative p-0.5">
        <button v-bind="$attrs" class="shadow-xl rounded-sm overflow-hidden relative z-20 block">
            <div class="flex h-[75px]">
                <div class="w-[75px] h-[75px] bg-[#1F1127] relative">
                    <Vue3Lottie
                        :animation-link="twitterLottieUrl"
                        :height="120"
                        :width="120"
                        :loop="true"
                        class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2" />
                </div>
                <div class="px-5 bg_text flex items-center">
                    <p class="font-tt-octosquares uppercase font-medium text-2xl leading-none max-md:text-lg">
                        connect twitter/X
                    </p>
                </div>
            </div>
        </button>
    </div>
</template>

<script setup lang="ts">
import {Vue3Lottie} from "vue3-lottie";

defineOptions({
    inheritAttrs: false,
});

const twitterLottieUrl = new URL("/lottie/twitter.json", import.meta.url).href;
</script>

<style scoped>
@property --border-angle-1 {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0deg;
}

@property --border-angle-2 {
    syntax: "<angle>";
    inherits: true;
    initial-value: 90deg;
}

@property --border-angle-3 {
    syntax: "<angle>";
    inherits: true;
    initial-value: 180deg;
}

@keyframes rotateBackground {
    to {
        --border-angle-1: 360deg;
    }
}

@keyframes rotateBackground2 {
    to {
        --border-angle-2: -270deg;
    }
}

@keyframes rotateBackground3 {
    to {
        --border-angle-3: 540deg;
    }
}

.bg_text {
    background-image: radial-gradient(443.81% 434.72% at 322.31% -217.78%, #6f359c 0%, #01060c 100%);
}

.main__wrap::before {
    --border-angle-1: 0deg;
    --border-angle-2: 90deg;
    --border-angle-3: 180deg;
    --bright-blue: rgb(0, 100, 255);
    --bright-green: rgb(0, 255, 0);
    --bright-red: rgb(255, 0, 0);
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-image: conic-gradient(
            from var(--border-angle-1) at 10% 15%,
            transparent,
            var(--bright-blue) 10%,
            transparent 30%,
            transparent
        ),
        conic-gradient(
            from var(--border-angle-2) at 70% 60%,
            transparent,
            var(--bright-green) 10%,
            transparent 60%,
            transparent
        ),
        conic-gradient(
            from var(--border-angle-3) at 50% 20%,
            transparent,
            var(--bright-red) 10%,
            transparent 50%,
            transparent
        );
    animation:
        rotateBackground 3s linear infinite,
        rotateBackground2 8s linear infinite,
        rotateBackground3 13s linear infinite;
}
</style>
