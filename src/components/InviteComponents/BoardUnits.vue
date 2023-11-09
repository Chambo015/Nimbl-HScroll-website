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
        <div class="flex flex-col items-center gap-2 relative z-20 isolate">
            <p>weekly units</p>
            <p class="font-extrabold text-[40px] !leading-none max-2xl:text-[32px] relative">
                {{ weeklyUnits.number.toFixed(0) || userStorage.user?.units || 0 }}
            </p>
            <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="translate-y-4 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 delay-1000 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-4 opacity-0"
                ><span
                    v-if="showMultiplier"
                    class="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 translate-y-2 multi__text"
                    >1.2X</span
                >
            </Transition>

            <Transition>
                <ul className="round-list">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Transition>
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
import {ref} from "vue";
import {useStorage} from "@vueuse/core";
import user_stat_bg from "@/assets/invite/user_stat_bg.png";
import {useAnimationDigits} from "@/composables/useAnimationDigits";
import {DEFAULT_USER_STORAGE, STORAGE_USER_KEY} from "@/constants";
import {ISessionTwitter} from "@/types";

const userStorage = useStorage<ISessionTwitter>(STORAGE_USER_KEY, DEFAULT_USER_STORAGE, sessionStorage);
const showMultiplier = ref(false);

const {tweened: unitsWithAnim} = useAnimationDigits(() => userStorage.value.user?.units);
const {tweened: invitesWithAnim} = useAnimationDigits(() => userStorage.value.total_invites);
const {tweened: weeklyUnits} = useAnimationDigits(
    () => userStorage.value.temporary_units,
    onDoneWeeklyAnim,
    onStartWeeklyAnim,
);

function onDoneWeeklyAnim() {
    showMultiplier.value = false;
}
function onStartWeeklyAnim() {
    if (!userStorage.value.temporary_units) return;
    if (userStorage.value.temporary_units < 300) return;
    showMultiplier.value = true;
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



ul.round-list {
    --speed-anim: 2;
    --delay-anim: calc(var(--speed-anim) * 125);
    list-style: none;
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-30%) translateX(-90%);
    width: 100%;
    overflow: hidden;
}

ul.round-list li {
    animation: target-round12  infinite linear;
    animation-duration: calc(var(--speed-anim) * 1s);
    border-radius: 50%;
    box-shadow: 0 0 10px #7351c8;
    display: block;
    position: absolute;
    width: 8px;
    height: 8px;
    background: white;
    right: 0;
    opacity: 0;
}
ul.round-list li::after {
    content: "";
    position: absolute;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 100%);
    height: 100%;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 20px;
}

ul.round-list li:nth-child(1) {
    animation-delay: calc(var(--delay-anim)*1ms);
}

ul.round-list li:nth-child(2) {
    animation-delay: calc(var(--delay-anim)*3ms);
}

ul.round-list li:nth-child(3) {
    animation-delay: calc(var(--delay-anim)*5ms);
}

ul.round-list li:nth-child(4) {
    animation-delay: calc(var(--delay-anim)*7ms);
}

ul.round-list li:nth-child(5) {
    animation-delay: calc(var(--delay-anim)*9ms);
}

ul.round-list li:nth-child(6) {
    animation-delay: calc(var(--delay-anim)*11ms);
}

@keyframes target-round12 {
    1% {
        opacity: 0;
        transform: translateX(0px);
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translateX(-100px);
    }
}
</style>
