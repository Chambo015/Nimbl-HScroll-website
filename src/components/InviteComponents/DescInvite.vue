<template>
    <div
        class="bg-gradient-header-secondary relative animation-block group cursor-default ring-1 ring-blue-500/50 max-md:bg-transparent flex max-md:flex-col gap-1 rounded-lg py-3 px-4 max-md:px-0 justify-around flex-wrap">
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

        <div class="item__block" :class="{'opacity-50': currentMultiplier !== MULTIPLIER['1.2X']}">
            <p class="digit__title">
                1.2X
                <img
                    v-if="currentMultiplier === MULTIPLIER['1.2X']"
                    class="absolute top-0 z-20 right-0 translate-x-[45%] -translate-y-[33%] scale-150 animate-pulse"
                    :src="light"
                    aria-hidden="true" />
            </p>
            <div v-if="currentMultiplier === MULTIPLIER['1.2X']">
                <p class="multi__text">multiplier</p>
                <p class="multi__timer">7 days left</p>
            </div>
            <div class="button__wrap">
              <button class="button__claim">
                  <p
                      class="button__text">
                      CLAIM
                  </p>
              </button>
            </div>
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
            <div v-if="currentMultiplier === MULTIPLIER['1.5X']">
                <p class="multi__text">multiplier</p>
                <p class="multi__timer">7 days left</p>
            </div>
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
            <div v-if="currentMultiplier === MULTIPLIER['2X']">
                <p class="multi__text">multiplier</p>
                <p class="multi__timer">7 days left</p>
            </div>
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
            <div v-if="currentMultiplier === MULTIPLIER['3X']">
                <p class="multi__text">multiplier</p>
                <p class="multi__timer">7 days left</p>
            </div>
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
                            London is Red Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {DEFAULT_USER_STORAGE, MULTIPLIER, STORAGE_USER_KEY} from "@/constants";
import {ISessionTwitter} from "@/types";
import {useStorage} from "@vueuse/core";
import IconInfoOctagon from "@/components/icons/IconInfoOctagon.vue";
import light from "@/assets/light-multiplier.webp";

type TypeMultiplier = (typeof MULTIPLIER)[keyof typeof MULTIPLIER];

const isHoverPopover = ref(false);
const isFocusPopover = ref(false);

const userStorage = useStorage<ISessionTwitter>(STORAGE_USER_KEY, DEFAULT_USER_STORAGE, sessionStorage);
const currentMultiplier = computed<TypeMultiplier>(() => {
    const multiplier = userStorage.value.multiplier;
    if (!multiplier) return MULTIPLIER["1X"];
    return multiplier;
});
</script>

<style scoped>
.animation-block {
    @apply hover:shadow-[-1px_1px_10px_1px] hover:shadow-blue-600 !shadow-blue-600 duration-500  transition-shadow delay-200 hover:delay-0;
}
.item__block {
    @apply flex items-center gap-4 max-md:bg-[#333333] max-md:justify-center max-md:py-2 group-hover:opacity-100 transition-opacity;
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
  @apply drop-shadow-none transition-all hover:drop-shadow-[-2px_1px_7px_#d0a530] duration-300
}
.button__claim {
    --r: 10px;
    clip-path: polygon(0% var(--r), var(--r) 0%, calc(100% - var(--r)) 0%, 100% var(--r), 100% calc(100% - var(--r)), calc(100% - var(--r)) 100%, var(--r) 100%, 0% calc(100% - var(--r)));
    background-image: linear-gradient(180deg, #b0731a -9.01%, #d0a530 22.91%, #f2d14e 63.49%);
    @apply opacity-80  flex-shrink-0 flex items-center justify-center px-3 py-2 cursor-pointer active:scale-90 transition-transform will-change-transform;
}
.button__text {
    @apply font-TTOctos font-bold text-black text-2xl text-center max-md:text-base max-2xl:text-lg px-1
}

.divider {
    @apply flex-grow bg-[#C0F] blur-[1px] h-[1px] self-center rounded-md min-w-[40px] mx-1
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
    @apply absolute left-0 bottom-full pb-5;
}
.popover__body {
    @apply bg-gradient-header-secondary min-w-[500px] max-h-[300px] overflow-auto p-4 rounded-md shadow-md ring ring-blue-500/50;
}
</style>
