<template>
    <div
        class="h-[110xp] flex rounded-r-3xl  rounded-l-md cursor-pointer">
        <div class="flex-grow w-1/4 flex-shrink-0 rounded-l-md overflow-hidden h-full">
            <img src="@/assets/ai-launguages.webp" alt="" class="object-cover w-full h-full" />
        </div>
        <div class="flex-grow-[2] flex-shrink-0 relative flex p-3 gap-2 items-start justify-center flex-col bg_card_body" :style="{'--bg': `url(${noise})`}">
            <p class="font-tt-octosquares font-medium text-white text-xl leading-tight">Follow Nimbl on Twitter</p>
            <div class="flex gap-2 items-center">
                <img :src="logo" alt="nimbl" class="w-[14px] h-[14px] mt-1" />
                <p class="text-xl leading-none text-white font-tt-octosquares ">10 pts</p>
            </div>
        </div>
        <div class="bg_open flex-grow w-1/4 flex items-center justify-center">
            <p class="font-Rollbox font-bold text-black text-3xl text-center">OPEN</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import logo from "@/assets/invite/logo_white.png";
import noise from "@/assets/invite/noise_card_task.webp";
</script>

<style scoped>
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
