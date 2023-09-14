<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import NavigationApp from "./components/NavigationApp.vue";
import PreviewView from "./views/PreviewView.vue";
import gsap from "gsap";
import {useRouter} from "vue-router";

const ready = ref(false);
const router = useRouter();

// called when the leave transition starts.
// use this to start the leaving animation.
function onLeave(el: any, done: any) {
    const clouds = el.querySelector(".smoke-clouds");
    const leftCubs = el.querySelectorAll("&>.left_cube");
    const rightCubs = el.querySelectorAll("&>.right_cube");

    const tl = gsap.timeline({onComplete: done});

    tl.to(
        clouds,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            position: "absolute",
        },
        "",
    );
    tl.to(
        leftCubs,
        {
            duration: 0.6,
            xPercent: -100,
            scale: 1.5,
            filter: "blur(20px)",
            opacity: 0,
            stagger: 0,
            position: "absolute",
        },
        "+0.4",
    );
    tl.to(
        rightCubs,
        {
            duration: 0.6,
            xPercent: 100,
            scale: 1.5,
            filter: "blur(20px)",
            opacity: 0,
            stagger: 0,
            position: "absolute",
        },
        "+0.4",
    );
    tl.to(
        el,
        {
            keyframes: {
                "0%": {scale: 1, opacity: 1},
                "75%": {scale: 1.8, opacity: 0.9}, // finetune with individual eases
                "100%": {scale: 2, opacity: 0},
                easeEach: "expo.inOut", // ease between keyframes
            },
            duration: 2,
            position: "absolute",
        },
        "0",
    );
}

const handlePreviewClick = () => {
    ready.value = true;
    router.replace({name: "nimbltv"});
};

/* Test */
const onLeaveTest = (el: any, done: any) => {
    const tl = gsap.timeline({onComplete: done});
    const sliderEl = el.querySelector('[data="slider_h_El"]');
    const buttonsEl = el.querySelector('[data="buttonsEl"]');
    const titleEl = el.querySelector('[data="titleEl"]');
    const lightEl = el.querySelector('[data="lightEl"]');

    tl.to(sliderEl, {
        autoAlpha: 0.0,
        duration: .5,
        scale: 0.0,
        ease: "expo.inOut"
    })
    tl.to(
        buttonsEl,
        {
            autoAlpha: 0.0,
            duration: 1,
            yPercent: 100,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.to(
        titleEl,
        {
            autoAlpha: 0.0,
            duration: 1,
            yPercent: -100,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.to(
        lightEl,
        {
            autoAlpha: 0.0,
            duration: 1,
        },
        "0",
    );
};
</script>

<template>
    <button
        v-if="!ready"
        type="button"
        class="w-screen h-screen z-[100] fixed block"
        @click="handlePreviewClick"></button>
    <main class="h-[calc(100vh-35px)]">
        <Transition @leave="onLeave" mode="in-out">
            <PreviewView v-if="!ready" />
        </Transition>
        <router-view v-slot="{Component}">
            <Transition @leave="onLeaveTest" name="slide" mode="in-out"><component :is="Component" /></Transition>
        </router-view>
    </main>
    <NavigationApp />
</template>

<style scoped>
main {
    background: url("./assets/background-stars.png") 100px;
}
/* .fade-leave-active {
    transition: all 1.5s ease 0.1s;
    position: absolute;
}

.fade-leave-to {
    opacity: 0;
    transform: scale(1.5);
    position: absolute;
    z-index: 99999;
} */

.slide-enter-active,
.slide-leave-active {
    transition: all 0s ease-out;
    position: absolute;
}
</style>
