<template>
    <main ref=contentEl v-if="!mdAndSmaller" class="w-full h-full flex pt-5 pl-5 pb-[35px] gap-5">
        <div class="w-1/3 flex-shrink-0 flex flex-col space-y-5 pb-5">
            <BoardMetamask />
            <BoardUsersRating />
        </div>
        <div class="flex flex-grow flex-col pb-5 gap-5">
            <div class="flex h-[100px] gap-4 flex-shrink-0 w-full pr-5 max-xl:flex-wrap max-xl:h-auto">
                <BackToNimbl />
                <CardTelegram />
                <CardXTwitter />
                <CardContract />
                <CardTokenInfo />
            </div>
            <div class="w-full overflow-hidden flex-grow">
                <BoardTasks />
            </div>
            <div class="mt-auto pr-5">
                <DescInvite />
            </div>
        </div>
    </main>
    <main v-else class="w-full flex flex-col h-full overflow-x-hidden">
        <div class="font-Rollbox font-bold flex justify-between border-b border-[rgba(51,51,51,0.50)]">
            <button
                class="px-2 py-2 text-center flex-grow flex-shrink-0 border-b-2 border-transparent rounded-md"
                :class="{'border-b-2 !border-[#768BD3]': activeMobileTab === 'invite'}"
                @click="activeMobileTab = 'invite'">
                Invite
            </button>
            <button
                class="px-2 py-2 text-center flex-grow flex-shrink-0 border-b-2 border-transparent rounded-md"
                :class="{'border-b-2 !border-[#768BD3]': activeMobileTab === 'tasks'}"
                @click="activeMobileTab = 'tasks'">
                Tasks
            </button>
            <button
                class="px-2 py-2 text-center flex-grow flex-shrink-0 border-b-2 border-transparent rounded-md"
                :class="{'border-b-2 !border-[#768BD3]': activeMobileTab === 'ranking'}"
                @click="activeMobileTab = 'ranking'">
                Ranking
            </button>
        </div>
        <div v-if="activeMobileTab === 'invite'" class="mt-2 overflow-y-auto">
            <BoardMetamask />
            
            <div class="mt-5">
                <DescInvite />
            </div>
            <div class="grid grid-cols-2 mt-5 px-5 gap-3 mb-5">
                <BackToNimbl />
                <CardTelegram />
                <CardXTwitter />
                <CardContract />
            </div>
        </div>
        <div v-if="activeMobileTab === 'tasks'" class="mt-2 overflow-y-auto">
          <BoardTasks />
        </div>
        <div v-if="activeMobileTab === 'ranking'" class="mt-2 overflow-y-auto">
          <BoardUsersRating />
        </div>
    </main>
</template>

<script setup lang="ts">
import {breakpointsTailwind, useBreakpoints, useMediaQuery} from "@vueuse/core";
import BoardMetamask from "@/components/InviteComponents/BoardMetamask.vue";
import BoardUsersRating from "@/components/InviteComponents/BoardUsersRating.vue";
import CardTelegram from "@/components/InviteComponents/SocialCards/CardTelegram.vue";
import CardXTwitter from "@/components/InviteComponents/SocialCards/CardXTwitter.vue";
import CardContract from "@/components/InviteComponents/SocialCards/CardContract.vue";
import DescInvite from "@/components/InviteComponents/DescInvite.vue";
import BoardTasks from "@/components/InviteComponents/BoardTasks.vue";
import {onMounted, ref , provide} from "vue";
import BackToNimbl from "@/components/InviteComponents/SocialCards/BackToNimbl.vue";
import CardTokenInfo from '@/components/InviteComponents/SocialCards/CardTokenInfo.vue';
import gsap from 'gsap';
import { keyClaim } from '@/types';
const breakpoints = useBreakpoints(breakpointsTailwind);

const mdAndSmaller = breakpoints.smallerOrEqual("md");
const activeMobileTab = ref<"invite" | "tasks" | "ranking">("invite");
const isXS = useMediaQuery("(max-width: 700px)");
const contentEl = ref()

onMounted(() => {
    if (isXS.value) return;
    const tl = gsap.timeline();

    tl.from(contentEl.value, {
        autoAlpha: 0.0,
        duration: 1.5,
        ease: "expo.inOut",
    });
});

const showMultiUnitsAnim = ref(false)
const showTransferUnitsAnim = ref(false)
provide(keyClaim, {
    showMultiUnitsAnim,
    showTransferUnitsAnim
})
</script>

<style scoped>
</style>