<template>
    <div
        class="bg-gradient-header-secondary relative animation-block group cursor-default ring-1 ring-blue-500/50 flex max-md:flex-col gap-1 rounded-lg py-3 px-4 max-md:px-0 justify-around flex-wrap">
        <div class="item__block" :class="{'opacity-50 blur-[1px]': currentMultiplier !== MULTIPLIER['1X']}">
            <p class="digit__title">
                1X
                <img
                    v-if="currentMultiplier === MULTIPLIER['1X']"
                    class="absolute top-0 z-20 right-0 translate-x-[45%] -translate-y-[33%] scale-150 animate-pulse"
                    :src="light"
                    aria-hidden="true" />
            </p>
            <div v-if="currentMultiplier === MULTIPLIER['1X']">
                <p class="multi__text">multiplier</p>
                <p class="multi__timer">7 days left</p>
            </div>
        </div>

        <div class="item__block" :class="{'opacity-50 blur-[2px]': currentMultiplier !== MULTIPLIER['1.2X']}">
            <p class="digit__title">
                1.2X
                <img
                    v-if="currentMultiplier === MULTIPLIER['1.2X']"
                    class="absolute top-0 z-20 right-0 translate-x-[45%] -translate-y-[33%] scale-150 animate-pulse"
                    :src="light"
                    aria-hidden="true" />
            </p>
            <template v-if="currentMultiplier === MULTIPLIER['1.2X']">
                <div>
                    <p class="multi__text">multiplier</p>
                    <p class="multi__timer">7 days left</p>
                </div>
                <div class="button__wrap" :class="{disabled: !canClaim}">
                    <button :disabled="!canClaim" @click="multiWeeklyUnits(1.2)" class="button__claim">
                        <p class="button__text">CLAIM</p>
                    </button>
                </div>
            </template>
        </div>

        <div class="item__block" :class="{'opacity-50 blur-[2px]': currentMultiplier !== MULTIPLIER['1.5X']}">
            <p class="digit__title">
                1.5X
                <img
                    v-if="currentMultiplier === MULTIPLIER['1.5X']"
                    class="absolute top-0 z-20 right-0 translate-x-[45%] -translate-y-[33%] scale-150 animate-pulse"
                    :src="light"
                    aria-hidden="true" />
            </p>
            <template v-if="currentMultiplier === MULTIPLIER['1.5X']">
                <div>
                    <p class="multi__text">multiplier</p>
                    <p class="multi__timer">7 days left</p>
                </div>
                <div class="button__wrap" :class="{disabled: !canClaim}">
                    <button :disabled="!canClaim" @click="multiWeeklyUnits(1.2)" class="button__claim">
                        <p class="button__text">CLAIM</p>
                    </button>
                </div>
            </template>
        </div>

        <div class="item__block" :class="{'opacity-50 blur-[3px]': currentMultiplier !== MULTIPLIER['2X']}">
            <p class="digit__title">
                2X
                <img
                    v-if="currentMultiplier === MULTIPLIER['2X']"
                    class="absolute top-0 z-20 right-0 translate-x-[45%] -translate-y-[33%] scale-150 animate-pulse"
                    :src="light"
                    aria-hidden="true" />
            </p>
            <template v-if="currentMultiplier === MULTIPLIER['2X']">
                <div>
                    <p class="multi__text">multiplier</p>
                    <p class="multi__timer">7 days left</p>
                </div>
                <div class="button__wrap">
                    <button @click="multiWeeklyUnits(2)" class="button__claim">
                        <p class="button__text">CLAIM</p>
                    </button>
                </div>
            </template>
        </div>

        <div class="item__block" :class="{'opacity-50 blur-sm': currentMultiplier !== MULTIPLIER['3X']}">
            <p class="digit__title">
                3X
                <img
                    v-if="currentMultiplier === MULTIPLIER['3X']"
                    class="absolute top-0 z-20 right-0 translate-x-[45%] -translate-y-[33%] scale-150 animate-pulse"
                    :src="light"
                    aria-hidden="true" />
            </p>
            <template v-if="currentMultiplier === MULTIPLIER['3X']">
                <div>
                    <p class="multi__text">multiplier</p>
                    <p class="multi__timer">7 days left</p>
                </div>
                <div class="button__wrap">
                    <button @click="multiWeeklyUnits(3)" class="button__claim">
                        <p class="button__text">CLAIM</p>
                    </button>
                </div>
            </template>
        </div>

        <div
            class="popover"
            @mouseenter="isHoverPopover = true"
            @mouseleave="isHoverPopover = false"
            @focusin="isFocusPopover = true"
            @blur="isFocusPopover = false"
            @focusout="isFocusPopover = false">
            <button
                class="popover__button"
                title="click me"
                :class="[isHoverPopover || isFocusPopover ? 'opacity-100' : 'opacity-50']">
                <IconInfoOctagon />
            </button>
            <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 delay-500 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-1 opacity-0">
                <div v-if="isHoverPopover || isFocusPopover" class="popover__panel">
                    <div class="popover__body">
                        <p class="w-full font-TTOctos !leading-tight">
                            In Nimbl's invite module, users earn units each week. To increase these units, they can achieve a weekly multiplier. The multipliers grow each week if they reach 300 units: it starts at 1.2x in week one, then 1.5x in week two, 2x in week three, and 2.5x in week four. If users don't hit 300 units in any week, their next week's multiplier drops back to 1.2x. Each user can earn only one multiplier per week.
                        </p>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, ref, inject} from "vue";
import {DEFAULT_USER_STORAGE, MULTIPLIER, STORAGE_USER_KEY} from "@/constants";
import {ISessionTwitter, keyClaim} from "@/types";
import {useStorage} from "@vueuse/core";
import IconInfoOctagon from "@/components/icons/IconInfoOctagon.vue";
import light from "@/assets/light-multiplier.webp";
import axios from "axios";

type TypeMultiplier = (typeof MULTIPLIER)[keyof typeof MULTIPLIER];

const isHoverPopover = ref(false);
const isFocusPopover = ref(false);
const triggerAnim = inject(keyClaim);

const userStorage = useStorage<ISessionTwitter>(STORAGE_USER_KEY, DEFAULT_USER_STORAGE, sessionStorage);
const currentMultiplier = computed<TypeMultiplier>(() => {
    const multiplier = userStorage.value.multiplier;
    if (!multiplier) return MULTIPLIER["1X"];
    return multiplier;
});

const multiWeeklyUnits = async (multi: number) => {
    if (!canClaim.value) return;
    if (!userStorage.value.temporary_units) return;
    const resStatus = await postMultiplyUnits()
    if(!resStatus) return;
    userStorage.value.temporary_units = userStorage.value.temporary_units * multi;
    if (triggerAnim) triggerAnim.showMultiUnitsAnim.value = true;
};

const canClaim = computed(() => !userStorage.value.multiplier_claimed);

const postMultiplyUnits = async () => {
    try {
        const res = await axios.post("https://api.nimbl.tv/ru/api/hunter/units/multiply/", null, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${userStorage.value.token}`,
            },
        });
        if (res.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error("error multiply", error);
        return false;
    }
};
</script>

<style scoped>
.animation-block {
    @apply hover:shadow-[-1px_1px_10px_1px] hover:shadow-blue-600 !shadow-blue-600 duration-500  transition-shadow delay-200 hover:delay-0;
}
.item__block {
    @apply flex items-center gap-4 max-md:bg-[#333333]/50 max-md:justify-center max-md:py-2 group-hover:opacity-100 transition-opacity;
}
.digit__title {
    @apply select-none token-gradient-text font-rfdewi font-black text-[48px] max-2xl:text-[38px] max-md:text-[48px] leading-none uppercase relative;
}

.multi__text {
    @apply select-none text-[#BF51F7] text-base !leading-none max-2xl:text-sm max-md:text-base font-TTOctos uppercase;
}

.multi__timer {
    @apply select-none max-2xl:text-xs !leading-tight mt-1 text-sm font-TTOctos uppercase;
}

.button__wrap {
    @apply drop-shadow-none transition-all hover:drop-shadow-[-2px_1px_7px_#d0a530] duration-300;
}

.button__wrap.disabled {
    @apply hover:!drop-shadow-none;
}
.button__claim {
    --r: 10px;
    clip-path: polygon(
        0% var(--r),
        var(--r) 0%,
        calc(100% - var(--r)) 0%,
        100% var(--r),
        100% calc(100% - var(--r)),
        calc(100% - var(--r)) 100%,
        var(--r) 100%,
        0% calc(100% - var(--r))
    );
    background-image: linear-gradient(180deg, #b0731a -9.01%, #d0a530 22.91%, #f2d14e 63.49%);
    @apply opacity-80  flex-shrink-0 flex items-center justify-center px-3 py-2 cursor-pointer active:scale-90 transition-transform will-change-transform;
}

.button__claim:disabled {
    @apply !opacity-40 active:scale-100;
}
.button__text {
    @apply font-TTOctos font-bold text-black text-2xl text-center max-md:text-base max-2xl:text-lg px-1;
}

.divider {
    @apply flex-grow bg-[#C0F] blur-[1px] h-[1px] self-center rounded-md min-w-[40px] mx-1;
}

.popover {
    position: absolute;
    left: 0px;
    top: 0px;
    padding: 8px;
}
.popover__button {
    @apply text-xl text-[#BF51F7]  hover:opacity-100 focus:opacity-100;
}
.popover__panel {
    @apply absolute left-0 bottom-full pb-5 z-50;
}
.popover__body {
    @apply bg-gradient-header-secondary min-w-[500px] max-h-[300px] overflow-auto p-4 rounded-md shadow-md ring ring-blue-500/50 max-md:w-[98vw] max-md:min-w-[auto];
}
</style>
