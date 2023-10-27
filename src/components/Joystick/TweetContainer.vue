<template>
    <div class="w-[500px] h-full max-2xl:w-[350px] max-md:w-[calc(100vw-40px)] overflow-y-scroll overflow-x-hidden rounded-2xl">
        <template v-for="tweet of tweetPosts" :key="tweet.id">
            <Tweet :tweet-url="tweet.tweet_url"  theme="dark" :width="widthWidget">
                <template v-slot:loading>
                    <div class="w-[500px] h-[590px] max-md:w-[calc(100vw-40px)] max-md:h-[400px] max-2xl:w-[350px] bg-[#15202b] flex items-center justify-center rounded-lg"> <Vue3Lottie animation-link="lottie/loading.json" :height="200" :width="200" /></div>
                </template>
            </Tweet>
        </template>
    </div>
</template>

<script setup lang="ts">
import  Tweet from "vue-tweet";
import { Vue3Lottie } from 'vue3-lottie'
import {breakpointsTailwind, useBreakpoints, useWindowSize } from "@vueuse/core";
import { computed, onMounted, ref } from 'vue';
import useTwitterPosts from '@/composables/useTwitterPosts';
import { ITweets } from '@/types';

const tweetPosts = ref<ITweets[]>([])
const {fetchTweetPosts} = useTwitterPosts()
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

onMounted(async() => {
    const res = await fetchTweetPosts()
    tweetPosts.value = res
})
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
