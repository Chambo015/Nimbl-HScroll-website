<template>
    <div class="w-[500px] max-md:w-[calc(100vw-40px)]">
        <Tweet tweet-id="1702230452373745826" theme="dark" :width="widthWidget">
            <template v-slot:loading>
                <div class="w-[500px] h-[590px] max-md:w-[calc(100vw-40px)] max-md:h-[400px] bg-[#15202b] flex items-center justify-center rounded-lg"><span>Loading...</span></div>
            </template>
        </Tweet>
    </div>
</template>

<script setup lang="ts">
import Tweet from "vue-tweet";
import {breakpointsTailwind, useBreakpoints, useWindowSize } from "@vueuse/core";
import { computed } from 'vue';

const { width } = useWindowSize()
const breakpoints = useBreakpoints(breakpointsTailwind);
const mdAndSmaller = breakpoints.smallerOrEqual("md");

const widthWidget = computed(() => {
    if(mdAndSmaller.value) {
        return width.value - 40
    }
    return 500
})
</script>

<style scoped></style>
