<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useStorage} from "@vueuse/core";
import axios, {AxiosError} from "axios";
import gsap from "gsap";

import {useAnimationDigits} from "@/composables/useAnimationDigits";
import HeroButton from "@/components/HeroButton.vue";
import IconsWinnerDone from "@/components/icons/IconsWinnerDone.vue";
import IconsWinnerFail from "@/components/icons/IconsWinnerFail.vue";
import {DEFAULT_USER_STORAGE, STORAGE_USER_KEY} from "@/constants";
import {ISessionTwitter} from "@/types";

const emit = defineEmits(["clickClose"]);

const userStorage = useStorage<ISessionTwitter>(STORAGE_USER_KEY, DEFAULT_USER_STORAGE, sessionStorage);

const containerEl = ref();
const seasonWrapEl = ref();
const buttonEl = ref();
const seasonTitleEl = ref();

const isLoading = ref(false);
const isEligible = ref(false);
const nimbles = ref(0);
const {tweened} = useAnimationDigits(() => nimbles.value);
const currentSeason = ref(0);
const passedSeason = ref(0);
const errorText = ref<string | undefined>("");

const clickHandle = async () => {
    try {
        isLoading.value = true;
        const res = await axios.get<{
            username: string;
            wallet_address: string;
            token_quantity: number;
            position: number;
            season: number;
            season_name: string;
        }>("https://api.nimbl.tv/en/api/main/airdrop/0/season/", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${userStorage.value.token}`,
            },
        });
        if (res.status === 200) {
            isEligible.value = true;
            nimbles.value = res.data.token_quantity;
        }
        if (res.status === 404) {
            errorText.value = 'You are not eligible'
        }
    } catch (error) {
        errorText.value = (error as AxiosError<{error: string}>).response?.data.error;
        errorText.value = 'You are not eligible'
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    const tl = gsap.timeline();
    tl.from(containerEl.value, {
        keyframes: {
            "25%": {
                autoAlpha: 0.0,
            },
            "45%": {
                autoAlpha: 1.0,
            },
            "60%": {
                autoAlpha: 0.0,
            },
            "100%": {
                autoAlpha: 1.0,
            },
        },

        duration: 0.6,
    });
    tl.from(
        containerEl.value,
        {
            height: 200,
            duration: 0.7,
            delay: 0.3,
        },
        "=-0",
    );
    tl.from(
        seasonWrapEl.value.children,
        {
            autoAlpha: 0.0,
            duration: 0.8,
            yPercent: 100,
            delay: 0.3,
            stagger: 0.2,
            clearProps: true,
        },
        "=-0.6",
    );
    tl.from(
        seasonTitleEl.value,
        {
            autoAlpha: 0.0,
            scale: 0.8,
            yPercent: -100,
            duration: 0.7,
            filter: "drop-shadow(0px -9px 2px #FFCD00)",
        },
        "=-0.3",
    );
    tl.from(
        buttonEl.value,
        {
            autoAlpha: 0.0,
            yPercent: 100,
            duration: 0.5,
        },
        "=-0",
    );
});
</script>

<template>
    <div
        @click.self="$emit('clickClose')"
        class="fixed bg-black/50 w-screen h-screen isolate z-[99999] inset-x-0 inset-y-0 backdrop-blur-sm">
        <div
            ref="containerEl"
            class="w_container will-change-[height] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[800px] h-[450px] max-md:h-[400px] max-sm:w-full max-sm:h-auto">
            <button class="w-12 h-12 absolute md:-right-12 md:-top-12 -right-3 -top-4 cursor-pointer z-20" @click="$emit('clickClose')">
                <div class="md:w-9 w-6 bg-[#6842a4] h-1 rounded-md origin-center rotate-45 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md shadow-[#6842a4]" />
                <div class="md:w-9 w-6 bg-[#6842a4] h-1 rounded-md origin-center -rotate-45 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md shadow-[#6842a4]" />
            </button>
            <h3 class="text-[#CBAAFF] font-Rollbox font-black text-2xl text-center drop-shadow-[0px_3px_1px_#6842a4]">
                RESULTS
            </h3>

            <div ref="seasonWrapEl" class="mt-10 flex justify-center">
                <div class="wrap_season" :class="{active: currentSeason === 0}" @click="currentSeason = 0">
                    <div class="season season_one"><span>SEASON 1</span></div>
                </div>
                <div class="wrap_season" :class="{active: currentSeason === 1}" @click="currentSeason = 1">
                    <div class="season season_two"><span>SEASON 2</span></div>
                </div>
                <div class="wrap_season" :class="{active: currentSeason === 2}" @click="currentSeason = 2">
                    <div class="season season_three"><span>SEASON 3</span></div>
                </div>
                <div class="wrap_season" :class="{active: currentSeason === 3}" @click="currentSeason = 3">
                    <div class="season season_four"><span>SEASON 4</span></div>
                </div>
            </div>

            <h2
                ref="seasonTitleEl"
                class="mt-20 text-center font-Rollbox text-3xl font-black text-[#FFCD00] drop-shadow-[0px_-0px_2px_#FFCD00] max-md:text-2xl max-md:mt-14">
                <span v-if="currentSeason === 0">SEASON ONE</span>
                <span v-if="currentSeason === 1">SEASON TWO</span>
                <span v-if="currentSeason === 2">SEASON THREE</span>
                <span v-if="currentSeason === 3">SEASON FOUR</span>
            </h2>

            <Transition mode="out-in" name="slide-up"  ref="buttonEl">
                <div v-if="!userStorage.user" class="text-center mt-7 text-2xl font-TTOctos font-bold text-blue-400">
                    PLEASE LOG IN
                </div>
                <div v-else-if="passedSeason !== currentSeason" class="text-center mt-7 text-2xl font-TTOctos font-bold text-white/50">
                    COMING SOON
                </div>
                <div
                    v-else-if="errorText"
                    class="font-TTOctos text-2xl max-md:text-xl text-center flex flex-col items-center mt-7 lg:mt-12 font-medium">
                    <p class="text-red-600">
                        <IconsWinnerFail class="w-6 h-6 inline max-md:w-4 max-md:h-4" /> {{ errorText }}
                    </p>
                </div>
                <div
                    v-else-if="isEligible"
                    class="font-TTOctos text-2xl max-md:text-xl text-center flex flex-col items-center mt-7 lg:mt-12 font-medium">
                    <p class="text-[#DEFFA1]">
                        <IconsWinnerDone class="w-6 h-6 inline max-md:w-4 max-md:h-4" /> You are eligible
                    </p>
                    <p
                        class="relative text-[#6D7CFF] after:bg-[url('/currency-Nimbl.png')] after:w-[16px] after:h-[16px] lg:after:w-[28px] lg:after:h-[26px] mt-2 after:inline-block after:bg-contain after:bg-no-repeat after:bg-center text-3xl max-md:text-2xl max-md:mt-0 font-bold">
                        {{ tweened.number.toFixed(0) }}
                    </p>
                </div>
                <div v-else class="flex justify-center">
                    <div
                        class="hover:drop-shadow-[0px_4px_12px_#7030e8] transition-all mt-7 lg:mt-14 max-md:!w-[90%]"
                        :class="[isLoading && 'drop-shadow-[0px_4px_12px_#7030e8]']">
                        <HeroButton class="!w-[400px] max-md:!w-[100%] !h-[60px]" @click="clickHandle">
                            <p v-if="!isLoading" class="font-Rollbox text-xl max-sm:text-sm font-bold tracking-widest">
                                CHECK ELIGILIBILITY
                            </p>
                            <p
                                v-else
                                class="text-shimmer font-Rollbox text-xl bg-clip-text text-transparent bg-[linear-gradient(110deg,#e2e8f0,45%,#1e293b,55%,#e2e8f0)] bg-[length:250%_100%] max-sm:text-sm font-bold tracking-widest">
                                LOADING
                            </p>
                        </HeroButton>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
div.inner-border {
    --rb: 20px;
    --wb: 2px;
    clip-path: polygon(
        0% var(--rb),
        var(--rb) 0%,
        100% 0%,
        100% calc(100% - var(--rb)),
        calc(100% - var(--rb)) 100%,
        0% 100%,
        var(--wb) calc(100% - var(--wb)),
        calc(100% - var(--rb)) calc(100% - var(--wb)),
        calc(100% - var(--wb)) calc(100% - var(--rb)),
        calc(100% - var(--wb)) var(--wb),
        calc(var(--rb)) var(--wb),
        var(--wb) calc(var(--rb)),
        var(--wb) calc(100% - var(--wb)),
        0% 100%
    );
    background-color: rgba(255, 255, 255, 0.4);
}

.w_container {
    position: relative;
    border-image-source: url(/winners/container.svg);
    border-image-repeat: stretch;
    border-image-slice: 45% 40% !important;
    border-image-outset: 1;
    border-width: 15px !important;
    border-image-width: 170px 60%;
    border-style: solid !important;
    border-width: 17px !important;
}

.w_container::before {
    --offset: 2px;
    content: "";
    position: absolute;
    width: calc(100% + 34px + var(--offset) * 2);
    height: calc(100% + 34px + var(--offset) * 2);
    left: calc(-17px - var(--offset));
    top: calc(-17px - var(--offset));
    right: 0;
    bottom: 0;
    border-image-source: url(/winners/borders-container.svg);
    border-image-repeat: stretch;
    border-image-slice: 45% 40% !important;
    border-image-outset: 1;
    border-width: 15px !important;
    border-image-width: 170px 60%;
    border-style: solid !important;
    border-width: 17px !important;
    filter: blur(16px);
}
.wrap_season {
    position: relative;
    height: 50px;
    clip-path: polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%);
    background-color: #6438ab;
    padding: 1px;
    opacity: 0.5;
    cursor: pointer;
    @apply max-md:w-[140px] w-[150px];
}
.wrap_season.active {
    background-color: yellow;
    opacity: 1;
}
.active.wrap_season::before {
    opacity: 1;
}
.wrap_season::before {
    content: "";
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    display: block;
    opacity: 0;
    box-shadow: inset 0px 0px 22px 14px #9cfd00ad;
}

.wrap_season .season {
    --b: 1px;
    clip-path: polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    @apply m-[var(--b)] w-[calc(100%_-_2*var(--b))] h-[calc(100%_-_2*var(--b))] bg-gradient-header-secondary font-Rollbox font-bold max-md:text-[10px] max-md:font-medium;
}

.wrap_season:nth-child(2),
.wrap_season:nth-child(4) {
    @apply translate-y-1/2;
}

.text-shimmer {
    animation: shimmer 1s ease-out infinite alternate;
}

@keyframes shimmer {
    from {
        background-position: 0 0;
    }
    to {
        background-position: -200% 0;
    }
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.25s ease-out;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>
