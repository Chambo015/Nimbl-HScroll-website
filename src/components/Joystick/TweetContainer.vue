<template>
    <div ref="el" class="w-[500px] h-full max-2xl:w-[350px] max-md:w-[calc(100vw-40px)] overflow-y-scroll overflow-x-hidden rounded-2xl">
        <template v-for="tweet of tweetPosts" :key="tweet.id">
            <TweetComponent :tweet-id="tweet.id.toString()"  theme="dark" :width="widthWidget">
                <template v-slot:loading>
                    <div class="w-[500px] h-[590px] max-md:w-[calc(100vw-40px)] max-md:h-[400px] max-2xl:w-[350px] bg-[#15202b] flex items-center justify-center rounded-lg"> <Vue3Lottie :animation-data="loadingCircle" :height="200" :width="200" /></div>
                </template>
            </TweetComponent>
        </template>
    </div>
</template>

<script setup lang="ts">
import TweetComponent from '@/components/TweetComponent.vue'
import { Vue3Lottie } from 'vue3-lottie'
import {breakpointsTailwind, useBreakpoints, useInfiniteScroll, useWindowSize } from "@vueuse/core";
import { computed, ref } from 'vue';
import useTwitterPosts from '@/composables/useTwitterPosts';
import loadingCircle from '@/assets/lottie/loading-circle.json'

const { tweetPosts, fetchNextPosts} = useTwitterPosts()
const { width } = useWindowSize()
const breakpoints = useBreakpoints(breakpointsTailwind);
const mdAndSmaller = breakpoints.smallerOrEqual("md");
const TwoXlAndSmaller = breakpoints.smallerOrEqual("2xl");
const el = ref<HTMLElement | null>(null)

const widthWidget = computed(() => {
    if(mdAndSmaller.value) {
        return width.value - 40
    } else if(TwoXlAndSmaller.value) {
        return 350
    }
    return 500
})
useInfiniteScroll(el, 
    fetchNextPosts,
    {
        distance: 10
    }
);

</script>

<style scoped>
::-webkit-scrollbar {
    width: 3px;
}
/* Track */
::-webkit-scrollbar-track {
    background: transparent;
}
/* Handle */
::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #60e2ff 0%, #8c98ff 50%, #cc61ff 100%);
}
</style>

<!-- 

    <template v-slot:loading>
                    <div class="w-[500px] h-[590px] max-md:w-[calc(100vw-40px)] max-md:h-[400px] max-2xl:w-[350px] bg-[#15202b] flex items-center justify-center rounded-lg"> <Vue3Lottie :animation-data="loadingCircle" :height="200" :width="200" /></div>
                </template>
 -->

 <!-- import { Vue3Lottie } from 'vue3-lottie' -->

 <!-- import loadingCircle from '@/assets/lottie/loading-circle.json' -->