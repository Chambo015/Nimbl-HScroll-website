<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import NavigationApp from "./components/NavigationApp.vue";
import PreviewView from "./views/PreviewView.vue";
import gsap from "gsap";

const ready = ref(false);

// called when the leave transition starts.
// use this to start the leaving animation.
function onLeave(el: any, done: any) {
    const clouds = el.querySelector(".smoke-clouds");
    const cubs = el.querySelectorAll("&>img");

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
        cubs,
        {
            duration: 0.6,
            translateY: -500,
            opacity: 0,
            stagger: 0.1,
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
        "+0.7",
    );
}
</script>

<template>
    <button v-if="!ready" type="button" class="w-screen h-screen z-[100] fixed block" @click="ready = true"></button>
    <main class="h-[calc(100vh-35px)]">
        <Transition @leave="onLeave" mode="in-out">
            <PreviewView v-if="!ready" />
            <router-view v-else></router-view>
        </Transition>
    </main>
    <NavigationApp />
</template>

<style scoped>
main {
    background: url("./assets/background-stars.png") 100px;
}
.fade-leave-active {
    transition: all 1.5s ease 0.1s;
    position: absolute;
}

.fade-leave-to {
    opacity: 0;
    transform: scale(1.5);
    position: absolute;
    z-index: 99999;
}
</style>
