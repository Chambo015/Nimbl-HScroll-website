<script setup lang="ts">
import {useParallax} from "@vueuse/core";
import {computed, reactive, ref, onMounted} from "vue";
import prevImgMobile from "@/assets/preview/mobile-intro-transperent.png";
import prevImgMobileWebp from "@/assets/preview/mobile-intro-transperent.webp";
import rightImg from "@/assets/preview/rightImg.png";
import rightImgWebp from "@/assets/preview/rightImg.webp";
import imgPlayLeft from "@/assets/preview/imgPlayLeft.png";
import imgPlayLeftWebp from "@/assets/preview/imgPlayLeft.webp";
import leftMiddleImg from "@/assets/preview/leftMiddleImg.png";
import leftMiddleImgWebp from "@/assets/preview/leftMiddleImg.webp";
import rightMiddleImg from "@/assets/preview/rightMiddleImg.png";
import rightMiddleImgWebp from "@/assets/preview/rightMiddleImg.webp";
import nearLeftImg from "@/assets/preview/near-left.png";
import nearLeftImgWebp from "@/assets/preview/near-left.webp";
import nearRight from "@/assets/preview/near-right.png";
import nearRightWebp from "@/assets/preview/near-right.webp";
import centerSmoke from "@/assets/preview/smokeCenter.png";
import centerSmokeWebp from "@/assets/preview/smokeCenter.webp";
import peopleImg from "@/assets/preview/people.png";
import peopleImgWebp from "@/assets/preview/people.webp";
import smoke1 from "@/assets/preview/smoke1.png";
import smoke1Webp from "@/assets/preview/smoke1.webp";
import smoke2 from "@/assets/preview/smoke2.png";
import smoke2Webp from "@/assets/preview/smoke2.webp";
import smoke3 from "@/assets/preview/smoke3.png";
import smoke3Webp from "@/assets/preview/smoke3.webp";
import {IconPlay} from "@/components/icons";
import useStupidBrowser from "@/composables/useStupidBrowser";

const sectionEl = ref();
const parallax = reactive(useParallax(sectionEl));
const {isSafari} = useStupidBrowser();
const layer0 = computed(() => {
    if (isSafari.value) return undefined;
    return {
        transition: ".3s ease-out transform",
        transform: `translateX(${parallax.tilt * 40}px) translateY(${parallax.roll * 40}px)`,
    };
});
const layer1 = computed(() => {
    if (isSafari.value) return undefined;
    return {
        transition: ".3s ease-out transform",
        transform: `translateX(${parallax.tilt * 30}px) translateY(${parallax.roll * 30}px)`,
    };
});
const layer2 = computed(() => isSafari.value ? undefined : ({
    transition: ".3s ease-out transform",
    transform: `translateX(${parallax.tilt * 20}px) translateY(${parallax.roll * 20}px)`,
}));
const layerPeople = computed(() => isSafari.value ? undefined : ({
    transition: ".3s ease-out transform",
    transform: `translateX(${parallax.tilt * 20}px)`,
}));

const imgUploaded = ref(false);
onMounted(() => {
    setTimeout(() => {
        imgUploaded.value = true;
    }, 1500);
});
</script>

<template>
    <div
        ref="sectionEl"
        class="absolute left-0 top-0 right-0 bottom-0 z-20 duration-1000"
        :class="{'blur-2xl backdrop-blur-lg': !imgUploaded}">
        <picture
            ><source :srcset="prevImgMobileWebp" type="image/webp" />
            <img :src="prevImgMobile" alt="prevImgMobile" class="w-full h-full object-cover select-none"
        /></picture>
        <picture>
            <source :srcset="leftMiddleImgWebp" type="image/webp" />
            <img
                :style="layer1"
                :src="leftMiddleImg"
                alt="leftMiddleImg"
                class="w-[90px] h-[87px] absolute -left-[2%] top-1/2 z-[2] left_cube" />
        </picture>
        <picture>
            <source :srcset="peopleImgWebp" type="image/webp" />
            <img
                :style="layerPeople"
                width="247"
                height="176"
                :src="peopleImg"
                alt="peopleImg"
                class="absolute left-[10%] bottom-0 z-[2] h-[200px] object-contain object-bottom" />
        </picture>
        <picture>
            <source :srcset="rightImgWebp" type="image/webp" />
            <img
                :style="layer2"
                :src="rightImg"
                alt="rightImg"
                class="w-[97px] h-[64px] absolute right-[2%] top-[1%] z-[2] right_cube opacity-50" />
        </picture>
        <picture>
            <source :srcset="imgPlayLeftWebp" type="image/webp" />
            <img
                :style="layer2"
                :src="imgPlayLeft"
                alt="imgPlayLeft"
                class="w-[90px] h-[60px] absolute -left-[2%] top-[8%] z-[2] left_cube opacity-50" />
        </picture>
        <picture>
            <source :srcset="rightMiddleImgWebp" type="image/webp" />
            <img
                :style="layer1"
                :src="rightMiddleImg"
                alt="rightMiddleImg"
                class="w-[70px] h-[75px] absolute -right-[3%] top-1/2 z-[2] right_cube" />
        </picture>
        <picture>
            <source :srcset="nearLeftImgWebp" type="image/webp" />
            <img
                :style="layer0"
                ref="container"
                :src="nearLeftImg"
                alt="nearLeftImg"
                class="w-[126px] h-[134px] absolute -left-[5%] bottom-[5%] z-[2] left_cube" />
        </picture>
        <picture>
            <source :srcset="nearRightWebp" type="image/webp" />
            <img
                :style="layer0"
                :src="nearRight"
                alt="nearRight"
                class="w-[132px] h-[128px] absolute -right-[6%] bottom-[4%] z-[2] right_cube" />
        </picture>
        <div
            class="absolute smoke-clouds w-[150%] bottom-0 h-1/2 z-[3] bg-[url('@/assets/preview/mobile_smoke.webp')] bg-no-repeat bg-[length:150%_auto] bg-bottom opacity-60 transition-opacity mix-blend-screen">
            <picture>
                <source :srcset="smoke1Webp" type="image/webp" />
                <img
                    width="1600"
                    height="850"
                    class="smoke-cloud1 absolute mix-blend-overlay pointer-events-none"
                    alt="smoke-image1"
                    :src="smoke1" />
            </picture>
            <picture>
                <source :srcset="smoke2Webp" type="image/webp" />
                <img
                    width="1600"
                    height="850"
                    class="smoke-cloud2 absolute mix-blend-overlay pointer-events-none"
                    alt="smoke-image2"
                    :src="smoke2" />
            </picture>
            <picture>
                <source :srcset="smoke2Webp" type="image/webp" />
                <img
                    width="1600"
                    height="850"
                    class="smoke-cloud4 absolute mix-blend-overlay pointer-events-none"
                    alt="smoke-image4"
                    :src="smoke2" />
            </picture>
            <picture>
                <source :srcset="smoke3Webp" type="image/webp" />
                <img
                    width="1600"
                    height="850"
                    class="smoke-cloud3 absolute mix-blend-overlay pointer-events-none"
                    alt="smoke-image3"
                    :src="smoke3" />
            </picture>
            <picture>
                <source :srcset="centerSmokeWebp" type="image/webp" />
                <img
                    width="950"
                    height="444"
                    class="smoke-cloud7 absolute mix-blend-overlay pointer-events-none"
                    alt="smoke-image7"
                    :src="centerSmoke"
            /></picture>
        </div>
        <div
            class="flex w-[170px] h-[170px] absolute z-10 rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-bg-play-liner opacity-75"></span>
            <div class="bg-bg-play-liner h-full w-full z-10 rounded-full">
                <IconPlay class="w-[50%] h-[50%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
        </div>
    </div>
</template>

<style scoped>
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
    left: -2%;
    bottom: 0;
    opacity: 0.2;
    width: 60%;
}
.smoke-cloud2 {
    left: -0%;
    bottom: -6%;
    opacity: 0.3;
    -webkit-animation: wave 9s 0.1s infinite linear;
    animation: wave 9s 0.1s infinite linear;
    width: 60%;
}
.smoke-cloud4 {
    right: -5%;
    bottom: -2%;
    opacity: 0.3;
    -webkit-animation: wave 7s 0.1s infinite linear;
    animation: wave 7s 0.1s infinite linear;
    width: 60%;
}
.smoke-cloud3 {
    left: -2%;
    bottom: -7%;
    opacity: 0.3;
    -webkit-animation: wave 7s 0.2s infinite linear;
    animation: wave 7s 0.2s infinite linear;
    width: 60%;
}
.smoke-cloud5 {
    right: -4%;
    bottom: -1%;
    opacity: 0.9;
    -webkit-animation: wave 6s 0.3s infinite linear;
    animation: wave 6s 0.3s infinite linear;
    width: 60%;
}
.smoke-cloud6 {
    left: -3%;
    bottom: -1%;
    opacity: 1;
    -webkit-animation: wave 7s 0.1s infinite linear;
    animation: wave 7s 0.1s infinite linear;
    width: 60%;
}
.smoke-cloud7 {
    left: -22%;
    bottom: 5%;
    opacity: 0.5;
    -webkit-animation: wave 8s 0.1s infinite linear;
    animation: wave 8s 0.1s infinite linear;
    width: 60%;
}
</style>
