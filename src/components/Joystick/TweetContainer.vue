<template>
    <div class="w-[500px] max-2xl:w-[350px] max-md:w-[calc(100vw-40px)]">
        <Tweet tweet-id="1702230452373745826" theme="dark" :width="widthWidget">
            <template v-slot:loading>
                <div class="w-[500px] h-[590px] max-md:w-[calc(100vw-40px)] max-md:h-[400px] max-2xl:w-[350px] bg-[#15202b] flex items-center justify-center rounded-lg"> <Vue3Lottie animation-link="lottie/loading.json" :height="200" :width="200" /></div>
            </template>
        </Tweet>
    </div>
</template>

<script setup lang="ts">
import  Tweet from "vue-tweet";
import { Vue3Lottie } from 'vue3-lottie'
import {breakpointsTailwind, useBreakpoints, useWindowSize } from "@vueuse/core";
import { computed } from 'vue';

const { width } = useWindowSize()
const breakpoints = useBreakpoints(breakpointsTailwind);
const mdAndSmaller = breakpoints.smallerOrEqual("md");
const TwoXlAndSmaller = breakpoints.smallerOrEqual("2xl");

const widthWidget = computed(() => {
    if(mdAndSmaller.value) {
        return width.value - 40
    } else if(TwoXlAndSmaller.value) {
        return 350
    }
    return 500
})
</script>

<style scoped></style>
