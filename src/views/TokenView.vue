<script setup lang="ts">
import tokenCoins from "@/assets/token-coins.png";
import tokenCoinsWebp from "@/assets/token-coins.webp";
import podium from "@/assets/podium.png";
import podiumWebp from "@/assets/podium.webp";
import tokenCard from "@/assets/token-card.png";
import tokenCardWebp from "@/assets/token-card.webp";
import lightImg from "@/assets/light.png";
import lightImgWebp from "@/assets/light.webp";
import smoke1 from "@/assets/preview/smoke1.png";
import smoke1Webp from "@/assets/preview/smoke1.webp";
import smoke2 from "@/assets/preview/smoke2.png";
import smoke2Webp from "@/assets/preview/smoke2.webp";
import smoke3 from "@/assets/preview/smoke3.png";
import smoke3Webp from "@/assets/preview/smoke3.webp";
import centerSmoke from "@/assets/preview/smokeCenter.png";
import centerSmokeWebp from "@/assets/preview/smokeCenter.webp";
import gsap from "gsap";
import useMouseWheel from "@/composables/mouseWheel";
import {computed, onMounted, ref} from "vue";
import {useMediaQuery} from "@vueuse/core";

const list = [
    [{msg: "Stake"}, {msg: "$Nimbl"}, {msg: "to gain governance"}],
    [{msg: "Transfer"}, {msg: "$Nimbl"}, {msg: "to a username"}],
    [{msg: "Use"}, {msg: "$Nimbl"}, {msg: "to Tip creators"}],
    [{msg: "Access token-gated content"}],
    [{msg: "Subscribe to Nimbl Ultra"}],
];
const currentIdxList = ref(0);
onMounted(() => {
    setInterval(() => {
        currentIdxList.value = (currentIdxList.value + 1) % 5;
    }, 1500);
});
const computedList = computed(() => {
    return list[currentIdxList.value];
});

const isXS = useMediaQuery("(max-width: 640px)");

const sectionEl = ref();
const titleEl = ref();
const contentEl = ref();
const light1El = ref();
const light2El = ref();
const smokeEl = ref();

const {onWheel} = useMouseWheel({toDownRoute: "roadmap", toUpRoute: "handle", target: sectionEl});

onMounted(() => {
    if (isXS.value) return;
    const tl = gsap.timeline();

    tl.from(contentEl.value, {
        yPercent: 100,
        autoAlpha: 0.0,
        duration: 1.5,
        ease: "expo.inOut",
    });
    
    tl.from(
        titleEl.value.children,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            yPercent: -150,
            stagger: -0.3,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.from(
        light1El.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            delay: 1,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.from(
        light2El.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            delay: 1,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.to(
        smokeEl.value,
        {
            autoAlpha: 0.6,
            duration: 1.5,
            ease: "expo.inOut",
        },
        "0",
    );
});
</script>

<template>
    <section ref="sectionEl" @wheel="onWheel" class="h-full flex flex-col max-3xl:pt-9 relative">
        <div ref="titleEl" data="titleEl" class="text-center">
            <h2 class="main-title">NIMBL TOKEN<span class="main-text-layer">NIMBL TOKEN</span></h2>
            <p class="text-center text-white font-gilroy text-3xl max-sm:text-base max-2xl:text-xl max-sm:w-[80%] mx-auto">
                $NIMBL is a utility token that acts as the platform currency
            </p>
        </div>
        <div ref="contentEl" data="contentEl"
            class="flex flex-col justify-center items-center relative after:absolute after:w-full after:h-[40%] after:bg-gradient-to-b after:to-[#0F0722] after:bottom-0 after:from-[#0f07221f]">
            <div
                class="bg-btn-bg-liner border-[#7351C8] border-[2px] shadow-[0px_2px_5px_6px_rgba(101,41,225,0.35)] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 max-2xl:translate-y-0 max-sm:static max-sm:w-[90%] max-sm:translate-x-0 max-sm:translate-y-0 max-sm:mt-7">
                <div class="flex flex-col items-center -mt-14 w-[665px] pb-6 max-2xl:pb-3 max-2xl:-mt-7 max-2xl:w-[400px] max-sm:w-full max-2xl:h-[130px]">
                    <picture>
                        <source :srcset="tokenCardWebp" type="image/webp" />
                        <img
                            :src="tokenCard"
                            alt="tokenCard"
                            width="134"
                            height="119"
                            class="pointer-events-none select-none mb-5 max-2xl:mb-2 max-2xl:w-[80px]" />
                    </picture>
                    <TransitionGroup tag="ul" class="flex gap-1 font-gilroy text-3xl max-2xl:text-xl" name="fade-list">
                        <li
                            v-for="(item, index) in computedList"
                            :key="item.msg"
                            :data-index="index"
                            :class="[item.msg === '$Nimbl' && 'text-[#CE54FF] font-semibold text-[40px] max-2xl:text-2xl']">
                            {{ item.msg }}
                        </li>
                    </TransitionGroup>
                </div>
            </div>
            <div class="flex w-[1200px] max-2xl:w-[1000px] relative translate-y-full max-sm:translate-y-0 max-sm:w-[90%] max-sm:mb-7 max-sm:mt-14">
                <div class="border-b border-[#675059] relative shrink-0">
                    <span class="token-gradient-text font-rfdewi text-8xl max-2xl:text-6xl font-black max-sm:text-xl">5%</span>
                    <span
                        class="font-gilroy text-white font-normal text-3xl absolute bottom-0 translate-y-[120%] left-0 max-2xl:text-lg whitespace-nowrap max-sm:hidden"
                        >Creator Fund</span
                    >
                    <span
                        class="font-gilroy text-white font-normal text-base whitespace-nowrap max-sm:inline hidden"
                        > Creator Fund</span
                    >
                </div>
                <div class="flex-grow border-b border-[#675059] rotate-[30deg] origin-bottom-left max-sm:rotate-0"></div>
                <div class="flex-grow border-b border-[#675059] -rotate-[30deg] origin-bottom-right max-sm:rotate-0"></div>
                <div class="hidden max-sm:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[#675059] h-[150px] translate-y-full"></div>
                <div class="border-b border-[#675059] relative shrink-0">
                    <span
                        class="font-gilroy text-white font-normal text-base whitespace-nowrap max-sm:inline hidden"
                        >Building </span
                    >
                    <span class="token-gradient-text font-rfdewi text-8xl font-black max-2xl:text-6xl max-sm:text-xl">5%</span>
                    <span
                        class="font-gilroy text-white font-normal text-3xl absolute bottom-0 translate-y-[120%] left-1/2 -translate-x-1/2 max-2xl:text-lg  max-sm:hidden"
                        >Building</span
                    >
                </div>
            </div>
            <picture> <source :srcset="tokenCoinsWebp" type="image/webp" /><img :src="tokenCoins" alt="tokenCoins" width="618" height="392" class="relative z-10 max-2xl:w-[500px] max-sm:w-[250px]" /></picture>
            <picture> <source :srcset="podiumWebp" type="image/webp" /><img :src="podium" alt="podium" width="820" height="170" class="max-2xl:w-[680px] max-sm:w-[320px]" /></picture>
            
        </div>
        <picture>
            <source :srcset="lightImgWebp" type="image/webp" />
            <img ref="light2El" data="light2El"
                :src="lightImg"
                alt="lightImg"
                loading="lazy"
                class="absolute top-0 left-0 -translate-x-1/2 -rotate-45 origin-top z-40 select-none pointer-events-none" />
        </picture>
        <picture>
            <source :srcset="lightImgWebp" type="image/webp" />
            <img ref="light1El" data="light1El"
                :src="lightImg"
                alt="lightImg"
                loading="lazy"
                class="absolute top-0 right-0 translate-x-1/2 rotate-45 origin-top z-40 select-none pointer-events-none" />
        </picture>
        <div ref="smokeEl" data="smokeEl"
            class="absolute max-sm:hidden smoke-clouds w-full h-[110%] top-0 z-[3] bg-[url('@/assets/preview/fullWidthSmoke.webp')] bg-no-repeat bg-[length:110%_auto] bg-bottom opacity-0 transition-opacity">
            <picture>
                <source :srcset="smoke1Webp" type="image/webp" />
                <img
                    class="smoke-cloud1 absolute mix-blend-overlay pointer-events-none"
                    alt="smoke-image1"
                    :src="smoke1" />
            </picture>
            <picture>
                <source :srcset="smoke2Webp" type="image/webp" />
                <img
                    class="smoke-cloud2 absolute mix-blend-overlay pointer-events-none"
                    alt="smoke-image2"
                    :src="smoke2" />
            </picture>
        <picture>
            <source :srcset="smoke2Webp" type="image/webp" />
                <img
                    class="smoke-cloud4 absolute mix-blend-overlay pointer-events-none"
                    alt="smoke-image4"
                    :src="smoke2" />
        </picture>
            <picture>
                <source :srcset="smoke3Webp" type="image/webp" />
                <img
                    class="smoke-cloud3 absolute mix-blend-overlay pointer-events-none"
                    alt="smoke-image3"
                    :src="smoke3"  />
            </picture>
            <picture> <source :srcset="centerSmokeWebp" type="image/webp" /><img class="smoke-cloud7 absolute mix-blend-overlay pointer-events-none" alt="smoke-image7" :src="centerSmoke" /></picture>
        </div>
        <div
            class="absolute hidden max-sm:block smoke-clouds w-[150%] bottom-0 h-1/2 z-[3] bg-[url('@/assets/preview/mobile_smoke.webp')] bg-no-repeat bg-[length:140%_auto] bg-bottom opacity-60 transition-opacity mix-blend-screen">
            <picture>
                <source :srcset="smoke1Webp" type="image/webp" />
                <img
                    class="smoke-cloud1 absolute mix-blend-overlay pointer-events-none"
                    alt="smoke-image1"
                    :src="smoke1" />
            </picture>
            <picture>
                <source :srcset="smoke2Webp" type="image/webp" />
                <img
                    class="smoke-cloud2 absolute mix-blend-overlay pointer-events-none"
                    alt="smoke-image2"
                    :src="smoke2" />
            </picture>
            <picture>
                <source :srcset="smoke2Webp" type="image/webp" />
                <img
                    class="smoke-cloud4 absolute mix-blend-overlay pointer-events-none"
                    alt="smoke-image4"
                    :src="smoke2" />
            </picture>
            <picture>
                <source :srcset="smoke3Webp" type="image/webp" />
                <img
                    class="smoke-cloud3 absolute mix-blend-overlay pointer-events-none"
                    alt="smoke-image3"
                    :src="smoke3" />
            </picture>
            <picture>
                <source :srcset="centerSmokeWebp" type="image/webp" />
                <img
                    class="smoke-cloud7 absolute mix-blend-overlay pointer-events-none"
                    alt="smoke-image7"
                    :src="centerSmoke"
            /></picture>
        </div>
    </section>
</template>

<style scoped>
.main-title {
    background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.3) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    @apply text-center font-rfdewi inline-block bg-clip-text text-white text-[88px] max-2xl:text-[50px] leading-none font-black uppercase -translate-x-2  max-sm:-translate-x-0 max-sm:text-3xl;
}
.main-text-layer {
    background-image: url("../assets/image1895.png");
    background-size: contain;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    mix-blend-mode: overlay;
    z-index: 1;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.fade-list-move,
.fade-list-enter-active,
.fade-list-leave-active {
    transition: all 1s cubic-bezier(0.55, 0, 0.1, 1);
}
.fade-list-enter-from,
.fade-list-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(0, 30px);
}
.fade-list-leave-active {
    position: absolute;
}

@keyframes wave {
    0% {
        transform: rotateZ(0deg) translate3d(0, 10%, 15px) rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg) translate3d(0, 10%, 15px) rotateZ(-360deg);
    }
}
@keyframes wave2 {
    0% {
        transform: rotateZ(0deg) translate3d(0, 1%, 15px) rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg) translate3d(0, 1%, 15px) rotateZ(-360deg);
    }
}
.smoke-cloud1 {
    -webkit-animation: wave 8s 0.1s infinite linear;
    animation: wave 8s 0.1s infinite linear;
    display: block;
    left: -20%;
    bottom: 0;
    opacity: 0.2;
}
.smoke-cloud2 {
    left: -14%;
    bottom: -6%;
    opacity: 0.3;
    -webkit-animation: wave 9s 0.1s infinite linear;
    animation: wave 9s 0.1s infinite linear;
}
.smoke-cloud4 {
    right: -15%;
    bottom: -2%;
    opacity: 0.3;
    -webkit-animation: wave 7s 0.1s infinite linear;
    animation: wave 7s 0.1s infinite linear;
}
.smoke-cloud3 {
    right: -4%;
    bottom: -17%;
    opacity: 0.3;
    -webkit-animation: wave 7s 0.2s infinite linear;
    animation: wave 7s 0.2s infinite linear;
}
.smoke-cloud5 {
    right: -4%;
    bottom: -1%;
    opacity: 0.9;
    -webkit-animation: wave 6s 0.3s infinite linear;
    animation: wave 6s 0.3s infinite linear;
}
.smoke-cloud6 {
    left: -3%;
    bottom: -1%;
    opacity: 1;
    -webkit-animation: wave 7s 0.1s infinite linear;
    animation: wave 7s 0.1s infinite linear;
}
.smoke-cloud7 {
    left: 30%;
    bottom: 5%;
    opacity: 0.5;
    -webkit-animation: wave 8s 0.1s infinite linear;
    animation: wave 8s 0.1s infinite linear;
}
</style>
