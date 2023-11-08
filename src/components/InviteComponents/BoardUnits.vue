<template>
    <div
        class="max-md:hidden font-Rollbox text-white py-3 uppercase max-2xl:text-sm flex items-center justify-around mt-5 user_stats relative"
        :style="{'--bg': `url(${user_stat_bg})`}">
        <div class="flex flex-col items-center gap-2 relative z-20">
            <p>units</p>
            <p class="font-extrabold text-[40px] !leading-none max-2xl:text-[32px]">
                {{ unitsWithAnim.number.toFixed(0) || userStorage.user?.units || 0 }}
            </p>
        </div>
        <div @click="multiWeeklyUnits(1.2)" class="flex flex-col items-center gap-2 relative z-20 isolate">
            <p>weekly units</p>
            <p class="font-extrabold text-[40px] !leading-none max-2xl:text-[32px]">
                {{ weeklyUnits.number.toFixed(0) || userStorage.user?.units || 0 }}
            </p>
            <transition    enter-active-class="transition duration-200 ease-out"
                enter-from-class="translate-y-4 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 delay-1000 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-4 opacity-0"><span v-if="showMultiplier" class="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 translate-y-2 multi__text">1.2X</span></transition>
        </div>
        <div class="flex flex-col items-center gap-2 relative z-20">
            <p>invites</p>
            <p class="font-extrabold text-[40px] leading-none max-2xl:text-[32px]">
                {{ invitesWithAnim.number.toFixed(0) || userStorage.total_invites || 0 }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref } from 'vue'
import { useStorage } from '@vueuse/core';
import user_stat_bg from "@/assets/invite/user_stat_bg.png";
import {useAnimationDigits} from "@/composables/useAnimationDigits";
import { DEFAULT_USER_STORAGE, STORAGE_USER_KEY } from '@/constants';
import { ISessionTwitter } from '@/types';

const userStorage = useStorage<ISessionTwitter>(STORAGE_USER_KEY, DEFAULT_USER_STORAGE, sessionStorage);
const showMultiplier = ref(false)

const {tweened: unitsWithAnim} = useAnimationDigits(() => userStorage.value.user?.units);
const {tweened: invitesWithAnim} = useAnimationDigits(() => userStorage.value.total_invites);
const {tweened: weeklyUnits} = useAnimationDigits(() => (userStorage.value.temporary_units), onDoneWeeklyAnim, onStartWeeklyAnim);

function onDoneWeeklyAnim() {
    showMultiplier.value = false
}
function onStartWeeklyAnim() {
    if(!userStorage.value.temporary_units) return
    if(userStorage.value.temporary_units < 300) return
    showMultiplier.value = true
}
const multiWeeklyUnits = (multi: number) => {
    if(!userStorage.value.temporary_units) return
    userStorage.value.temporary_units = userStorage.value.temporary_units * multi
}
</script>


<style scoped>

.user_stats::before {
    content: "";
    background-image: var(--bg);
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.6;
    z-index: 1;
    mix-blend-mode: screen;
}
.multi__text {
    @apply select-none token-gradient-text font-rfdewi font-black text-[28px] drop-shadow-[0px_-1px_6px_#7538f0] !leading-none uppercase;
}
</style>
