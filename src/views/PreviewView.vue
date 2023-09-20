<template>
    <div  class="bg-transparent fixed left-0 top-0 w-screen h-screen z-20">
        <!-- <div class="bg-black/30 fixed inset-0 backdrop-blur-2xl z-[555] transition-all"></div> -->
        <div class="absolute left-0 inset-y-0 bg-black w-[30%]"></div>
        <div class="absolute right-0 inset-y-0 bg-black w-[30%]"></div>
        <div class="w-screen monitor_wrap h-screen left-0 top-0 absolute z-[1]">
            <picture><source :srcset="monitorWebp" type="image/webp" /><img :src="monitor" alt="monitor" class="w-full h-full object-contain" /></picture>
        </div>
        <picture>
            <source :srcset="peopleImgWebp" type="image/webp" />
            <img
                :src="peopleImg"
                alt="peopleImg"
                class="absolute left-[30%] bottom-0 z-[2]" />
        </picture>
        <picture>
            <source :srcset="rightImgWebp" type="image/webp" />
            <img
                :src="rightImg"
                alt="rightImg"
                :style="{transform: `translate(${coordsMiddle.x},${coordsMiddle.y})`}"
                class="w-[195px] h-[130px] absolute right-[3%] top-[40%] z-[2] right_cube opacity-30" />
        </picture>
        <picture>
            <source :srcset="imgPlayLeftWebp" type="image/webp" />
            <img
                :src="imgPlayLeft"
                alt="imgPlayLeft"
                :style="{transform: `translate(${coordsMiddle.x},${coordsMiddle.y})`}"
                class="w-[162px] h-[111px] absolute left-[3%] top-[35%] z-[2] left_cube opacity-30" />
        </picture>
      <picture>
        <source :srcset="leftMiddleImgWebp" type="image/webp" />
            <img
                :src="leftMiddleImg"
                alt="leftMiddleImg"
                :style="{transform: `translate(${coords.x},${coords.y})`}"
                class="w-[103px] h-[97px] absolute left-[20%] top-1/2 z-[2] left_cube" />
      </picture>
       <picture>
        <source :srcset="leftTopImgWebp" type="image/webp" />
            <img
                :src="leftTopImg"
                alt="leftTopImg"
                :style="{transform: `translate(${coords.x},${coords.y})`}"
                class="w-[93px] h-[67px] absolute left-[20%] top-[5%] z-[2]  left_cube" />
       </picture>
      <picture>
        <source :srcset="rightMiddleImgWebp" type="image/webp" />
            <img
                :src="rightMiddleImg"
                alt="rightMiddleImg"
                :style="{transform: `translate(${coords.x},${coords.y})`}"
                class="w-[95px] h-[101px] absolute right-[20%] top-1/2 z-[2] right_cube" />
      </picture>
       <picture>
        <source :srcset="topRightImgWebp" type="image/webp" />
            <img
                :src="topRightImg"
                alt="topRightImg"
                :style="{transform: `translate(${coords.x},${coords.y})`}"
                class="w-[104px] h-[108px] absolute right-[20%] top-[5%] z-[2] right_cube" />
       </picture>
       <picture>
        <source :srcset="nearLeftImgWebp" type="image/webp" />
            <img
            ref="container"
                :src="nearLeftImg"
                alt="nearLeftImg"
                :style="{transform: `translate(${coordsNear.x},${coordsNear.y})`}"
                class="w-[279px] h-[298px] absolute left-[5%] bottom-[5%] z-[4]  left_cube" />
       </picture>
      <picture>
        <source :srcset="nearRightWebp" type="image/webp" />
            <img
                :src="nearRight"
                alt="nearRight"
                :style="{transform: `translate(${coordsNear.x},${coordsNear.y})`}"
                class="w-[293px] h-[283px] absolute right-[6%] bottom-[4%] z-[4] right_cube" />
      </picture>
        <div
            class="absolute smoke-clouds w-full h-[110%] top-0 z-[3] bg-[url('@/assets/preview/fullWidthSmoke.png')] bg-no-repeat bg-[length:110%_auto] bg-bottom opacity-60 transition-opacity">
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
    </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, onUnmounted} from "vue";
import monitor from "@/assets/preview/first-block-nimbl-landing.png";
import monitorWebp from "@/assets/preview/first-block-nimbl-landing.webp";
import rightImg from "@/assets/preview/rightImg.png";
import rightImgWebp from "@/assets/preview/rightImg.webp";
import imgPlayLeft from "@/assets/preview/imgPlayLeft.png";
import imgPlayLeftWebp from "@/assets/preview/imgPlayLeft.webp";
import leftMiddleImg from "@/assets/preview/leftMiddleImg.png";
import leftMiddleImgWebp from "@/assets/preview/leftMiddleImg.webp";
import leftTopImg from "@/assets/preview/leftTopImg.png";
import leftTopImgWebp from "@/assets/preview/leftTopImg.webp";
import rightMiddleImg from "@/assets/preview/rightMiddleImg.png";
import rightMiddleImgWebp from "@/assets/preview/rightMiddleImg.webp";
import topRightImg from "@/assets/preview/topRightImg.png";
import topRightImgWebp from "@/assets/preview/topRightImg.webp";
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
import gsap from 'gsap'

const X = ref();
const Y = ref();

const coords = computed(() => ({x: `${X.value * 40}px`, y: `${Y.value * 40}px`}));
const coordsNear = computed(() => ({x: `${X.value * 150}px`, y: `${Y.value * 150}px`}));
const coordsMiddle = computed(() => ({x: `${X.value * 85}px`, y: `${Y.value * 85}px`}));
const coordsPeople = computed(() => ({x: `${X.value * 50}px`, y: `${Y.value * 0}px`}));

const mouseEventHandle = (e: any) => {
    X.value = (e.clientX - window.innerWidth / 2) / window.innerWidth;
    Y.value = (e.clientY - window.innerHeight /2) / window.innerHeight;
}
onMounted(() => {
    window.addEventListener("mousemove", mouseEventHandle);
});
onUnmounted(() => {
    window.removeEventListener("mousemove", mouseEventHandle)
})

// Animation container
const container = ref()
const control = ref()
onMounted(() => {
    control.value = gsap.to(container.value, {
        duration: .2,
        scale: 2,
        opacity: 0.1
    })
    control.value.pause()
})
onUnmounted(() => {
    gsap.to(container.value, {
        duration: 3,
        scale: 1.8,
        opacity: 0,
        onComplete: () => {
            
        }
    })
})
</script>

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
