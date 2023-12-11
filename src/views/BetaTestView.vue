<template>
    <section class="relative w-full h-full flex flex-col max-sm:items-center">
        <div ref="titleEl" data="titleEl" class="container justify-center flex 2xl:pt-[50px] pt-[20px]">
            <div class="inline-flex flex-col items-center">
                <div ref="secondTitleEl"
                    class="py-2 px-4 border-[#6E7DFE] border bg-[#1C0048] inline-block 2xl:py-4 md:py-3 2xl:px-6  font-gilroy font-medium tracking-[0.17em] 2xl:text-2xl md:text-lg mb-6 !leading-none">
                    BETA TESTING
                </div>
                <h1 class="main-title cursor-pointer"  @click="$router.push({name: 'nimbltv'})">
                    NIMBL.TV
                    <span class="main-text-layer">NIMBL.TV</span>
                </h1>
            </div>
        </div>

        <div class="container flex flex-col lg:flex-row  grow pb-[35px] lg:gap-24 lg:mt-10 mt-0 overflow-y-clip">
            <div class="2xl:w-[500px] md:w-[400px] w-full self-start shrink-0 pt-5 max-md:pt-0">
                <form ref="formEl" data="formEl" @submit.prevent="">
                    <div class="relative flex flex-row-reverse items-center gap-0 px-5 py-3 2xl:py-5 2xl:px-8">
                        <input
                            @input="errorText = null"
                            type="text"
                            v-model="userName"
                            class="bg-transparent font-gilroy outline-none w-full text-sm md:text-lg 2xl:text-2xl"
                            :class="[errorText ? 'text-red-500' : 'text-white']"
                            placeholder="Name/Pseudonym"
                            name="user" />
                        <IconUser class="mr-5 2xl:w-8 2xl:h-8 w-6 h-6 text-white" />
                        <div class="inner-border absolute inset-0"></div>
                    </div>
                    <div
                        class="relative flex flex-row-reverse items-center gap-0 px-5 py-3 2xl:py-5 2xl:px-8 mt-5 lg:mt-8">
                        <input
                            @input="errorText = null"
                            type="email"
                            v-model="userEmail"
                            class="bg-transparent font-gilroy outline-none w-full text-sm md:text-lg 2xl:text-2xl"
                            :class="[errorText ? 'text-red-500' : 'text-white']"
                            placeholder="Email address"
                            name="email" />
                        <IconEmail class="mr-5 2xl:w-8 2xl:h-8 w-5 h-5 text-white" />
                        <div class="inner-border absolute inset-0"></div>
                    </div>
                    <div
                        class="relative flex flex-row-reverse items-center gap-0 px-5 py-3 2xl:py-5 2xl:px-8 mt-5 lg:mt-8">
                        <input
                            @input="errorText = null"
                            type="text"
                            v-model="userWallet"
                            class="bg-transparent font-gilroy outline-none w-full text-sm md:text-lg 2xl:text-2xl"
                            :class="[errorText ? 'text-red-500' : 'text-white']"
                            placeholder="Wallet address"
                            name="wallet" />
                        <IconWallet class="mr-5 2xl:w-8 2xl:h-8 w-5 h-5 fill-white" />
                        <div class="inner-border absolute inset-0"></div>
                    </div>

                    <HeroButton class="!w-full 2xl:!h-[75px] !h-[55px] mt-8 2xl:mt-14" title="coming soon">
                        <p class="font-rfdewi text-2xl max-2xl:text-lg max-sm:text-sm font-bold tracking-widest">APPLY</p>
                        <template #icon><IconFiveDots class="2xl:w-[30px] 2xl:h-[30px] w-[15px] h-[15px]" /></template>
                    </HeroButton>

                    <div class="flex justify-center items-center mt-5">
                        <input type="checkbox" id="Terms" v-model="terms" />
                        <label for="Terms" class="text-white/50 select-none lg:text-base text-xs"
                            >I agree to the
                            <a :href="privacyPolicyURL" target="_blank" class="text-blue-600">Terms of Use</a></label
                        >
                    </div>
                </form>
            </div>
            <div class="flex grow lg:h-full relative mx-[-20px] lg:mx-0 w-full lg:w-auto">
                <img
                    ref="imgPhoneEl"
                    data="imgPhoneEl"
                    :src="imgPhone"
                    alt="imgPhone"
                    loading="lazy"
                    class="md:!h-[min(125%,_650px)] md:!w-auto !max-w-[auto] w-[140px] object-contain shrink-0 relative z-20" />
                <div 
                    ref="descEl"
                    data="descEl"
                    class="relative md:w-[60vw] z-10 self-stretch md:mt-8 before:absolute before:bottom-0 before:top-0 before:right-0 before:-left-[10%] before:bg-[#20133E]/50 before:hidden lg:before:block before:backdrop-blur-sm pt-10 isolate pl-5 flex flex-col justify-stretch">
                    <div class="relative z-10 grow">
                        <p class="font-gilroy font-medium 2xl:text-2xl md:text-xl text-white">
                            To apply for beta testing, you must have at least
                        </p>
                        <p class="font-gilroy font-medium 2xl:text-2xl md:text-xl text-white">
                            <span
                                class="text-xl 2xl:text-3xl md:text-2xl font-bold text-[#6D7CFF] after:bg-[url('/currency-Nimbl.png')] after:w-[16px] after:h-[16px] 2xl:after:w-[24px] 2xl:after:h-[24px] after:inline-block after:bg-contain after:bg-no-repeat after:bg-center"
                                >5000</span
                            >
                            NIMBL tokens
                        </p>
                        <div class="border-b border-[#6D29A3] lg:my-5 my-2" />
                        <p class="font-gilroy font-medium 2xl:text-2xl md:text-xl">in return you get:</p>
                        <div ref="stacksEl" class="flex flex-col lg:flex-row gap-5 lg:mt-16 mt-4 lg:-mb-5 h-full">
                            <div
                                class="relative bg-black/40 border border-[#0037ff]/50 md:h-[280px] 2xl:h-auto h-[45px]  w-[170px] px-6 flex justify-center md:pt-[100px] pt-[12px] items-start">
                                <img
                                    loading="lazy"
                                    src="/beta-username.webp"
                                    alt="beta-username"
                                    class="absolute lg:top-0 top-1/2 lg:left-1/2 right-0 lg:-translate-x-1/2 translate-x-1/2 -translate-y-1/2 [filter:_drop-shadow(-4px_-5px_8px_#f0b903)_drop-shadow(1px_6px_15px_#0037ff)] w-10 h-10 2xl:w-[60%] md:w-[50%] md:h-auto object-contain " />
                                <p class="font-gilroy font-medium text-white 2xl:text-2xl md:text-xl text-sm text-center">Verified username</p>
                            </div>
                            <div
                                class="relative bg-black/40 border border-[#61f924]/40  md:h-[280px] 2xl:h-auto h-[45px] w-[170px] font-gilroy px-6 flex max-md:gap-1 md:flex-col justify-center md:justify-start md:pt-[100px] pt-[6px] items-center">
                                <img
                                    loading="lazy"
                                    src="/beta-ultra.webp"
                                    alt="beta-username"
                                    class="absolute lg:top-0 top-1/2 lg:left-1/2 right-0 lg:-translate-x-1/2 translate-x-1/2  -translate-y-1/2 drop-shadow-[0_4px_15px_#61f924] w-10 h-10 2xl:w-[60%] md:w-[50%] md:h-auto object-contain" />
                                <p class="font-gilroy font-medium text-white 2xl:text-2xl md:text-xl text-sm text-center">Nimbl</p>
                                <img src="/ultra-text.png" aria-hidden="true" class="h-3 lg:h-5 mt-0 lg:mt-2" />
                            </div>
                            <div
                                class="relative bg-black/40 border border-[#9944e6]/40  md:h-[280px] 2xl:h-auto h-[45px] w-[170px] px-6 flex justify-center md:pt-[100px] pt-[13px] items-start">
                                <img
                                    loading="lazy"
                                    src="/beta-rating.webp"
                                    alt="beta-username"
                                    class="absolute lg:top-0 top-1/2 lg:left-1/2 right-0 lg:-translate-x-1/2 translate-x-1/2  -translate-y-1/2 drop-shadow-[0_4px_15px_#9944e6] w-10 h-10 2xl:w-[60%] md:w-[50%] md:h-auto object-contain" />
                                <p class="font-gilroy font-medium text-white 2xl:text-2xl md:text-xl text-sm text-center">Rating level 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import {useMediaQuery} from "@vueuse/core";
import gsap from 'gsap'

import HeroButton from "@/components/HeroButton.vue";
import IconFiveDots from "@/components/icons/IconFiveDots.vue";
import imgPhone from "@/assets/beta/nimbl-left.webp";
import IconUser from "@/components/icons/IconUser.vue";
import IconWallet from "@/components/icons/IconWallet.vue";
import IconEmail from "@/components/icons/IconEmail.vue";

const privacyPolicyURL = new URL("/privacy-policy.pdf", import.meta.url).href;
const isXS = useMediaQuery("(max-width: 700px)");

const titleEl = ref();
const secondTitleEl = ref();
const imgPhoneEl = ref();
const descEl = ref();
const stacksEl = ref();
const formEl = ref();

const userName = ref("");
const userEmail = ref("");
const userWallet = ref("");
const terms = ref(false);
const errorText = ref(null);

onMounted(() => {
    if (isXS.value) return;
    const tl = gsap.timeline();

    tl.from(
        titleEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            yPercent: -100,
            ease: "expo.inOut",
        },
    );
    tl.from(
        secondTitleEl.value,
        {
            autoAlpha: 0.0,
            duration: 1,
            yPercent: 100,
            ease: "power1.inOut",
        },
        '=-0.6'
    );
    tl.from(
        imgPhoneEl.value,
        {
            autoAlpha: 0.0,
            duration: 2,
            xPercent: 150,
            ease: "back.inOut(2)",
            transformStyle: 'preserve-3d',
            rotateY: '-60deg',
            rotate: 30,
            transformOrigin: 'left bottom',
            smoothOrigin: true,
            filter: 'blur(15px)'
        },
        '=-1'
    );
    tl.from(
        descEl.value,
        {
            autoAlpha: 0.0,
            duration: 2,
            xPercent: 100,
            ease: "back.inOut(1.5)",
            filter: 'blur(15px)'
        },
        '=-2'
    );
    tl.from(
        stacksEl.value.children,
        {
            autoAlpha: 0.0,
            duration: 2,
            yPercent: 80,
            ease: "back.inOut(1.5)",
            stagger: 0.5,
        },
        "=-1",
    );
    tl.from(
        formEl.value.children,
        {
            autoAlpha: 0.0,
            duration: 1,
            yPercent: 80,
            ease: "back.inOut(1.5)",
            stagger: 0.3,
        },
        "+1",
    );

    /*  tl.from(sliderEl.value, {
        autoAlpha: 0.0,
        duration: 1.5,
        scale: 0.0,
        ease: "expo.inOut",
    });
    tl.from(
        buttonsEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            yPercent: 100,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.from(
        titleEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            yPercent: -100,
            ease: "expo.inOut",
        },
        "0",
    ); */
});
</script>

<style scoped>
.main-title {
    background-image: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background: -webkit-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image: -webkit-linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image: -moz-linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image: -ms-linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image: -o-linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    position: relative;
    @apply text-center font-rfdewi inline-block bg-clip-text  text-[125px] max-2xl:text-[80px] max-sm:text-[55px] !leading-none font-black uppercase -translate-x-2 -translate-y-7 max-sm:-translate-x-0 max-sm:-translate-y-6;
    -webkit-font-smoothing: antialiased;
    text-shadow: none;
    color: transparent;
}

.main-text-layer {
    background-size: contain;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    -webkit-font-smoothing: antialiased;
    background-color: rgb(56, 123, 255);
    text-shadow: none;
    color: transparent;
    font-size: 1em;
}
@supports (background-clip: text) and (-webkit-text-fill-color: transparent) {
    .main-title {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
    }
}

@supports (mix-blend-mode: overlay) and (background-clip: text) and (-webkit-text-fill-color: transparent) {
    .main-text-layer {
        background-image: url("../assets/image1895.webp");
        mix-blend-mode: overlay;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}

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
input:not(:placeholder-shown) ~ div.inner-border {
    background-color: lightgreen;
}

input:not(:placeholder-shown) ~ svg {
    color: lightgreen;
}

input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border: 1px solid #9b9ca7;
    vertical-align: middle;
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
    transition: 0.25s;
    background-size: 0;
    background-position: center;
}
input[type="checkbox"]:checked {
    background:
        no-repeat center/80% 100%
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' stroke='%23fff' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E"),
        no-repeat center/100%
            linear-gradient(
                270deg,
                rgba(234, 0, 213, 0.8) -75%,
                rgba(61, 94, 255, 0.8) 48.86%,
                rgba(0, 234, 242, 0.8) 158.33%
            );
    border: none;
}
</style>
