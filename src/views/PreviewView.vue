<template>
    <div class="bg-black relative w-screen h-screen">
        <div class="w-screen h-screen left-0 top-0 absolute z-[1]">
            <img :src="monitor" alt="monitor" class="w-full h-full object-contain object-bottom" />
        </div>
        <img
            :src="peopleImg"
            alt="peopleImg"
            :style="{transform: `translate(${coordsPeople.x},${coordsPeople.y})`}"
            class="absolute left-[30%] bottom-0 z-[2]" />
        <img
            :src="rightImg"
            alt="rightImg"
            :style="{transform: `translate(${coordsMiddle.x},${coordsMiddle.y})`}"
            class="w-[195px] h-[130px] absolute right-[3%] top-[40%] z-[2]" />
        <img
            :src="imgPlayLeft"
            alt="imgPlayLeft"
            :style="{transform: `translate(${coordsMiddle.x},${coordsMiddle.y})`}"
            class="w-[162px] h-[111px] absolute left-[3%] top-[35%] z-[2]" />
        <img
            :src="leftMiddleImg"
            alt="leftMiddleImg"
            :style="{transform: `translate(${coords.x},${coords.y})`}"
            class="w-[103px] h-[97px] absolute left-[20%] top-1/2 z-[2]" />
        <img
            :src="leftTopImg"
            alt="leftTopImg"
            :style="{transform: `translate(${coords.x},${coords.y})`}"
            class="w-[93px] h-[67px] absolute left-[20%] top-[5%] z-[2]" />
        <img
            :src="rightMiddleImg"
            alt="rightMiddleImg"
            :style="{transform: `translate(${coords.x},${coords.y})`}"
            class="w-[95px] h-[101px] absolute right-[20%] top-1/2 z-[2]" />
        <img
            :src="topRightImg"
            alt="topRightImg"
            :style="{transform: `translate(${coords.x},${coords.y})`}"
            class="w-[104px] h-[108px] absolute right-[20%] top-[5%] z-[2]" />
        <img
            :src="nearLeftImg"
            alt="nearLeftImg"
            :style="{transform: `translate(${coordsNear.x},${coordsNear.y})`}"
            class="w-[279px] h-[298px] absolute left-[5%] bottom-[5%] z-[4]" />
        <img
            :src="nearRight"
            alt="nearRight"
            :style="{transform: `translate(${coordsNear.x},${coordsNear.y})`}"
            class="w-[293px] h-[283px] absolute right-[6%] bottom-[4%] z-[4]" />
        <div
            class="absolute w-full h-[110%] top-0 z-[3] bg-[url('@/assets/preview/fullWidthSmoke.png')] bg-no-repeat bg-[length:110%_auto] bg-bottom opacity-60 transition-opacity">
            <img
                class="smoke-cloud1 absolute mix-blend-overlay pointer-events-none"
                alt="smoke-image1"
                src="https://oleksandrpavlyshch.github.io/mouse-move-parallax_demo/img/smoke1.png" />
            <img
                class="smoke-cloud2 absolute mix-blend-overlay"
                alt="smoke-image2"
                src="https://oleksandrpavlyshch.github.io/mouse-move-parallax_demo/img/smoke2.png" />
            <img
                class="smoke-cloud4 absolute mix-blend-overlay"
                alt="smoke-image4"
                src="https://oleksandrpavlyshch.github.io/mouse-move-parallax_demo/img/smoke2.png" />
            <img
                class="smoke-cloud3 absolute mix-blend-overlay"
                alt="smoke-image3"
                src="https://oleksandrpavlyshch.github.io/mouse-move-parallax_demo/img/smoke3.png" />
            <!--  <img class="smoke-cloud5 absolute mix-blend-screen w-[20%]" alt="smoke-image5" :src="rightSmoke">
      <img class="smoke-cloud6 absolute mix-blend-screen" alt="smoke-image6" :src="leftSmoke"> -->
            <img class="smoke-cloud7 absolute mix-blend-overlay" alt="smoke-image7" :src="centerSmoke" />
        </div>
        <button type="button" class="w-screen  h-screen z-50 fixed block" @click="router.push({name: 'nimbltv'})"></button>
    </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import monitor from "@/assets/preview/first-block-nimbl-landing.png";
import rightImg from "@/assets/preview/rightImg.png";
import imgPlayLeft from "@/assets/preview/imgPlayLeft.png";
import leftMiddleImg from "@/assets/preview/leftMiddleImg.png";
import leftTopImg from "@/assets/preview/leftTopImg.png";
import rightMiddleImg from "@/assets/preview/rightMiddleImg.png";
import topRightImg from "@/assets/preview/topRightImg.png";
import nearLeftImg from "@/assets/preview/near-left.png";
import nearRight from "@/assets/preview/near-right.png";
// import leftSmoke from '@/assets/preview/leftSmoke.png'
// import rightSmoke from '@/assets/preview/rightSmoke.png'
import centerSmoke from "@/assets/preview/smokeCenter.png";
import peopleImg from "@/assets/preview/people.png";
import { useRouter } from 'vue-router';

const router = useRouter()

const X = ref();
const Y = ref();

const coords = computed(() => ({x: `-${X.value * 40}px`, y: `-${Y.value * 40}px`}));
const coordsNear = computed(() => ({x: `-${X.value * 150}px`, y: `-${Y.value * 150}px`}));
const coordsMiddle = computed(() => ({x: `-${X.value * 85}px`, y: `-${Y.value * 85}px`}));
const coordsPeople = computed(() => ({x: `-${X.value * 50}px`, y: `-${Y.value * 0}px`}));

onMounted(() => {
    window.addEventListener("mousemove", function (e) {
        X.value = e.clientX / window.innerWidth;
        Y.value = e.clientY / window.innerHeight;
    });
});
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
