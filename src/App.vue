<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import NavigationApp from "./components/NavigationApp.vue";
import PreviewView from "./views/PreviewView.vue";
import gsap from "gsap";
import {useRouter} from "vue-router";
import TransitionLeavePage from "./components/TransitionLeavePage.vue";
import AppJoystick from "./components/Joystick/AppJoystick.vue";
import {useMediaQuery, onKeyStroke} from "@vueuse/core";
import PreviewViewMobile from './views/PreviewViewMobile.vue';

const ready = ref(false);
const router = useRouter();
const isXS = useMediaQuery("(max-width: 640px)");

function onLeavePreviewPage(el: any, done: any) {
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
            scale: 2,
            opacity: 0,
            ease: "expo.inOut",
            duration: 1,
            position: "absolute",
        },
        "0",
    );
}

const handlePreviewClick = () => {
    ready.value = true;
    router.replace({name: "nimbltv"});
};

onKeyStroke('Enter', (e) => {
  e.preventDefault()
  handlePreviewClick()
})

onMounted(() => {
    router.replace({name: "nimbltv"});
});
</script>

<template>
    <button
        v-if="!ready"
        type="button"
        class="w-screen h-screen z-[100] fixed block"
        @click="handlePreviewClick"></button>
    <main class="h-screen w-screen relative bg-[#0F0722]">
        <template v-if="!isXS">
            <Transition @leave="onLeavePreviewPage" mode="in-out">
                <PreviewView v-if="!ready" />
            </Transition>
        </template>
        <template v-if="isXS">
            <Transition @leave="onLeavePreviewPage" mode="in-out">
                <PreviewViewMobile v-if="!ready" />
            </Transition>
        </template>
        <router-view v-slot="{Component, route}">
            <TransitionLeavePage :to-meta="route.meta">
                <component :ready="ready" :is="Component" />
            </TransitionLeavePage>
        </router-view>
        <AppJoystick v-if="!isXS" />
        <NavigationApp />
    </main>
</template>

<style scoped>
main {
    background: url("./assets/background-stars.png") 100px;
}
</style>
