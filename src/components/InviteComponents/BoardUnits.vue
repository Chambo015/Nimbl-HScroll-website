<template>
    <div
        class="font-Rollbox ring-1 ring-white/20 text-white py-3 uppercase max-2xl:text-sm flex isolate items-center justify-around mt-5 user_stats relative"
        >
        
        <div class="flex flex-col items-center gap-2 relative z-20 max-md:hidden">
            <p class="max-md:text-xs">units</p>
            <p class="font-extrabold text-[40px] !leading-none max-2xl:text-[32px] max-md:text-2xl">
                {{ unitsWithAnim.number.toFixed(0) || userStorage.user?.units || 0 }}
            </p>
        </div>
        <div class="flex flex-col items-center gap-2 relative z-20 isolate">
            <p class="max-md:text-xs">weekly units</p>
            <p class="font-extrabold text-[40px] !leading-none max-2xl:text-[32px] relative max-md:text-2xl">
                {{ weeklyUnits.number.toFixed(0) || userStorage.user?.units || 0 }}
            </p>
            <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="translate-y-4 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 delay-500 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-4 opacity-0"
                ><span
                    v-if="showMultiplier && triggerAnim?.showMultiUnitsAnim.value"
                    class="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 translate-y-2 multi__text"
                    >{{ multiText }}</span
                >
            </Transition>

            <Transition>
                <ul v-if="showTransfer" className="round-list max-md:hidden">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Transition>
        </div>
        <div class="flex flex-col items-center gap-2 relative z-20">
            <p class="max-md:text-xs">invites</p>
            <p class="font-extrabold text-[40px] leading-none max-2xl:text-[32px] max-md:text-2xl">
                {{ invitesWithAnim.number.toFixed(0) || userStorage.total_invites || 0 }}
            </p>
        </div>

        <div class="absolute inset-0 z-10 overflow-hidden">
            <span class="light_line"></span>
            <span class="light_line"></span>
            <span class="light_line"></span>
            <span class="light_line"></span>
            <span class="light_line"></span>
            <span class="light_line"></span>
            <span class="light_line"></span>
            <span class="light_line"></span>
            <span class="light_line"></span>
            <span class="light_line"></span>
            <span class="light_line"></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, inject, nextTick, computed} from "vue";
import {useStorage} from "@vueuse/core";
import {useAnimationDigits} from "@/composables/useAnimationDigits";
import {DEFAULT_USER_STORAGE, MULTIPLIER, STORAGE_USER_KEY} from "@/constants";
import {ISessionTwitter, keyClaim} from "@/types";

const userStorage = useStorage<ISessionTwitter>(STORAGE_USER_KEY, DEFAULT_USER_STORAGE, sessionStorage);
const showMultiplier = ref(false);
const showTransfer = ref(false)
const triggerAnim = inject(keyClaim)

const {tweened: unitsWithAnim} = useAnimationDigits(() => userStorage.value.user?.units, onDoneTotalUAnim, onStartTotalUAnim);
const {tweened: invitesWithAnim} = useAnimationDigits(() => userStorage.value.total_invites);
const {tweened: weeklyUnits} = useAnimationDigits(
    () => userStorage.value.temporary_units,
    onDoneWeeklyAnim,
    onStartWeeklyAnim,
);

const multiText = computed(() => {
    let currentM
    Object.entries(MULTIPLIER).forEach(([k, v]) => {
         if(v !== userStorage.value.multiplier) return  
         currentM = k
    })
    return currentM
})

async function onDoneWeeklyAnim() {
    showMultiplier.value = false;
    if(triggerAnim) {
        if(triggerAnim.showMultiUnitsAnim.value) {
           await  transferUnits()
        }
        triggerAnim.showMultiUnitsAnim.value = false
    } 
}
function onStartWeeklyAnim() {
    if (!userStorage.value.temporary_units) return;
    if (userStorage.value.temporary_units < 300) return;
    showMultiplier.value = true;
}
function onDoneTotalUAnim() {
    showTransfer.value = false
}
function onStartTotalUAnim() {
    
}
async function transferUnits() {
    await nextTick()
    if (!userStorage.value.temporary_units) return;
    if (!userStorage.value.token) return;
    if (!userStorage.value.user) return;
    showTransfer.value = true
    const unitsTransfer = userStorage.value.temporary_units
    userStorage.value.temporary_units = 0
    userStorage.value.user.units = userStorage.value.user?.units + unitsTransfer

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
    --speed-anim: 1;
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


.light_line {
    width: 7px;
    height: 100px;
    background-image: linear-gradient(to top, transparent,  #f9f9f9 25%, transparent 50%, transparent 75%, #ffffff 100%);
    position: absolute; 
    opacity: 0.2;
    top: -5px;
    left: 50%;
    background-size: 200% 600%;
    transform-origin: top center;
    transform:  perspective(100px) rotateX(60deg);
    animation-name: gradient-liner;
    animation-duration: 3s;
    animation-timing-function: liner;
    animation-direction: alternate;
    animation-iteration-count: infinite;
}
.light_line:nth-child(2) {
    width: 2px;
    height: 100px;
    left: 60%;
    transform:  perspective(100px) rotateX(20deg) rotateZ(-35deg);
    animation-duration: 2s;
    animation-delay: 0.1;
}
.light_line:nth-child(3) {
    width: 2px;
    height: 200px;
    left: 70%;
    transform:  perspective(100px) rotateX(20deg) rotateZ(-55deg);
    animation-duration: 3s;
    animation-delay: 0.2;
}
.light_line:nth-child(4) {
    width: 5px;
    height: 200px;
    left: 75%;
    transform:  perspective(100px) rotateX(30deg) rotateZ(-70deg);
    animation-duration: 3s;
    animation-delay: 0.3;
}

.light_line:nth-child(5) {
    width: 2px;
    height: 100px;
    left: 55%;
    transform:  perspective(100px) rotateX(20deg) rotateZ(-30deg);
    animation-duration: 3s;
    animation-delay: 0.3;
}
.light_line:nth-child(6) {
    width: 2px;
    height: 100px;
    left: 45%;
    transform:  perspective(100px) rotateX(20deg) rotateZ(30deg);
    animation-duration: 2s;
    animation-delay: 0.2;
}
.light_line:nth-child(7) {
    width: 2px;
    height: 200px;
    left: 30%;
    transform:  perspective(100px) rotateX(20deg) rotateZ(56deg);
    animation-duration: 1.5s;
    animation-delay: 0.1;
}
.light_line:nth-child(8) {
    width: 2px;
    height: 200px;
    left: 25%;
    transform:  perspective(100px) rotateX(20deg) rotateZ(66deg);
    animation-duration: 3s;
    animation-delay: 0.2;
}
.light_line:nth-child(9) {
    width: 3px;
    height: 200px;
    left: 33%;
    transform:  perspective(100px) rotateX(27deg) rotateZ(48deg);
    animation-duration: 2.5s;
    animation-delay: 0.3;
}
.light_line:nth-child(10) {
    width: 3px;
    height: 200px;
    left: 23%;
    transform:  perspective(100px) rotateX(27deg) rotateZ(68deg);
    animation-duration: 2.5s;
    animation-delay: 0.3;
}
.light_line:nth-child(11) {
    width: 3px;
    height: 200px;
    left: 83%;
    transform:  perspective(100px) rotateX(27deg) rotateZ(-78deg);
    animation-duration: 2.5s;
    animation-delay: 0.3;
}

@keyframes gradient-liner {
	0% {
		background-position: 50% 0% ;
	}
	50% {
		background-position:  50% 50% ;
	}
	100% {
		background-position: 50% 100% ;
	}
}

</style>
