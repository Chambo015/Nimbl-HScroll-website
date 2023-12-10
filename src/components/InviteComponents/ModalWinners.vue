<script setup lang="ts">
import {onMounted, ref, PropType} from "vue";
import axios, {AxiosError} from "axios";
import gsap from "gsap";
import {useAnimationDigits} from "@/composables/useAnimationDigits";
import HeroButton from "@/components/HeroButton.vue";
import IconsWinnerDone from "@/components/icons/IconsWinnerDone.vue";

const emit = defineEmits(["clickClose"]);

const containerEl = ref();
const seasonWrapEl = ref();
const buttonEl = ref();
const activeSeasonEl = ref();
const seasonTitleEl = ref();

const isLoading = ref(false);
const isEligible = ref(false);
const nimbles = ref(0);
const {tweened} = useAnimationDigits(() => nimbles.value);
const errorText = ref<string | undefined>("");

const clickHandle = async () => {
    isLoading.value = true;

    await new Promise((res): void => {
        setTimeout(() => {
            isEligible.value = true;
            nimbles.value = 10043
            return res(null);
        }, 1500);
    });

    isLoading.value = false;
};

/* const onSubmit = async () => {
    if (!sendCode.value.trim()) return;
    if (!props.sessionToken) return;
    try {
        const res = await axios.post(
            "https://api.nimbl.tv/ru/api/hunter/ama/session/",
            {
                session_code: sendCode.value,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${props.sessionToken}`,
                },
            },
        );
        if (res.status === 200) {
            emit('clickClose')
        };
    } catch (error) {
        errorText.value = (error as AxiosError<{error: string}>).response?.data.error
    }

    
}; */

onMounted(() => {
    const tl = gsap.timeline();
    tl.from(containerEl.value, {
        keyframes: {
            "25%": {
                autoAlpha: 0.0,
            },
            "50%": {
                autoAlpha: 1.0,
            },
            "75%": {
                autoAlpha: 0.0,
            },
            "100%": {
                autoAlpha: 1.0,
            },
        },

        duration: 0.5,
    });
    tl.from(
        containerEl.value,
        {
            height: 200,
            duration: 1,
            delay: 0.3,
        },
        "=-0",
    );
    tl.from(
        seasonWrapEl.value.children,
        {
            autoAlpha: 0.0,
            duration: 1,
            yPercent: 100,
            delay: 0.3,
            stagger: 0.3,
        },
        "=-0.7",
    );
    tl.to(
        activeSeasonEl.value,
        {
            autoAlpha: 1,
            scale: 1.05,
            duration: 0.5,
            backgroundColor: 'yellow',
            "--shadow": 1,
        },
        "=-0.4",
    );
    tl.from(
        seasonTitleEl.value,
        {
            autoAlpha: 0.0,
            scale: 0.8,
            yPercent: -100,
            duration: 0.7,
            filter: "drop-shadow(0px -9px 2px #FFCD00)"
        },
        "=-0.4",
    );
    tl.from(
        buttonEl.value,
        {
            autoAlpha: 0.0,
            yPercent: 100,
            duration: 0.6,
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
            class="w_container absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[800px] h-[450px] max-md:h-[400px] max-sm:w-full max-sm:h-auto">
            <h3 class="text-[#CBAAFF] font-Rollbox font-black text-2xl text-center drop-shadow-[0px_3px_1px_#6842a4]">
                RESULTS
            </h3>

            <div ref="seasonWrapEl" class="mt-10 flex justify-center">
                <div class="wrap_season" ref="activeSeasonEl">
                    <div class="season season_one active"><span>SEASON 1</span></div>
                </div>
                <div class="wrap_season">
                    <div class="season season_two "><span>SEASON 2</span></div>
                </div>
                <div class="wrap_season">
                    <div class="season season_three "><span>SEASON 3</span></div>
                </div>
                <div class="wrap_season">
                    <div class="season season_four "><span>SEASON 4</span></div>
                </div>
            </div>

            <h2 ref="seasonTitleEl" class="mt-20 text-center font-Rollbox text-3xl font-black text-[#FFCD00] drop-shadow-[0px_-0px_2px_#FFCD00] max-md:text-2xl max-md:mt-14">SEASON ONE</h2>

            <Transition mode="out-in" name="slide-up">
                <div
                    v-if="isEligible"
                    class="font-TTOctos text-2xl max-md:text-xl text-center flex flex-col items-center mt-7 lg:mt-12 font-medium">
                    <p class="text-[#DEFFA1]"><IconsWinnerDone class="w-6 h-6 inline max-md:w-4 max-md:h-4" /> You are eligibile</p>
                    <p
                        class="relative text-[#6D7CFF] after:bg-[url('/currency-Nimbl.png')] after:w-[16px] after:h-[16px] lg:after:w-[28px] lg:after:h-[26px] mt-2 after:inline-block after:bg-contain after:bg-no-repeat after:bg-center font-medium text-3xl max-md:text-2xl max-md:mt-0">
                        {{ tweened.number.toFixed(0) }}
                    </p>
                </div>
                <div v-else class="flex justify-center" ref="buttonEl">
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
    --shadow: 0;
    position: relative;
    height: 50px;
    clip-path: polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%);
    background-color: #6438ab;
    padding: 1px;
    opacity: 0.5;

    @apply max-md:w-[140px] w-[150px]
}

.wrap_season::before {
    content: '';
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    display: block;
    opacity: var(--shadow);
    box-shadow: inset 0px 0px 22px 14px #9cfd00ad;
}

.wrap_season .season {
    --b: 1px;
    clip-path: polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    @apply m-[var(--b)] w-[calc(100%_-_2*var(--b))] h-[calc(100%_-_2*var(--b))] bg-gradient-header-secondary font-Rollbox font-bold max-md:text-[10px] max-md:font-medium
    ;
}
.season_one.season {
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
