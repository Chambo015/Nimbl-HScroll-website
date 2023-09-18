<script setup lang="ts">
import prevImgMobile from '@/assets/mobile-intro-transperent.png'
import leftMiddleImg from "@/assets/preview/leftMiddleImg.png";
</script>


<template>
  <div class="fixed left-0 top-0 w-screen h-screen z-[99]">
    <img :src="prevImgMobile" alt="prevImgMobile" class="w-full h-full object-cover">
    <img
            :src="leftMiddleImg"
            alt="leftMiddleImg"
            class="w-[90px] h-[87px] absolute left-[2%] top-1/2 z-[2] left_cube" />
    <div
            class="absolute smoke-clouds w-full bottom-0 h-1/2 z-[3] bg-[url('@/assets/preview/fullWidthSmoke.png')] bg-no-repeat bg-[length:110%_auto] bg-bottom opacity-60 transition-opacity mix-blend-screen">
            <img
                class="smoke-cloud1 absolute mix-blend-overlay pointer-events-none"
                alt="smoke-image1"
                src="https://oleksandrpavlyshch.github.io/mouse-move-parallax_demo/img/smoke1.png" />
            <img
                class="smoke-cloud2 absolute mix-blend-overlay pointer-events-none"
                alt="smoke-image2"
                src="https://oleksandrpavlyshch.github.io/mouse-move-parallax_demo/img/smoke2.png" />
            <img
                class="smoke-cloud4 absolute mix-blend-overlay pointer-events-none"
                alt="smoke-image4"
                src="https://oleksandrpavlyshch.github.io/mouse-move-parallax_demo/img/smoke2.png" />
            <img
                class="smoke-cloud3 absolute mix-blend-overlay pointer-events-none"
                alt="smoke-image3"
                src="https://oleksandrpavlyshch.github.io/mouse-move-parallax_demo/img/smoke3.png" />
            
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
}
.smoke-cloud2 {
    left: -4%;
    bottom: -6%;
    opacity: 0.3;
    -webkit-animation: wave 9s 0.1s infinite linear;
    animation: wave 9s 0.1s infinite linear;
}
.smoke-cloud4 {
    right: -5%;
    bottom: -2%;
    opacity: 0.3;
    -webkit-animation: wave 7s 0.1s infinite linear;
    animation: wave 7s 0.1s infinite linear;
}
.smoke-cloud3 {
    right: -4%;
    bottom: -7%;
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
    left: 3%;
    bottom: 5%;
    opacity: 0.5;
    -webkit-animation: wave 8s 0.1s infinite linear;
    animation: wave 8s 0.1s infinite linear;
}
</style>