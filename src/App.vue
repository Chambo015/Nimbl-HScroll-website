<script setup lang="ts">
import {watchEffect, onMounted, ref} from "vue";
import NavigationApp from "./components/NavigationApp.vue";
import PreviewView from "./views/PreviewView.vue";
import gsap from "gsap";
import {useRouter} from "vue-router";
import TransitionLeavePage from "./components/TransitionLeavePage.vue";
import AppJoystick from "./components/Joystick/AppJoystick.vue";
import {useMediaQuery, onKeyStroke} from "@vueuse/core";
import PreviewViewMobile from "./views/PreviewViewMobile.vue";
import ModalContacts from "./components/ModalContacts.vue";

const ready = ref(false);
const isModalOpen = ref(false);
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
            duration: 1,
        },
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
        },
        "0",
    );
}

const handlePreviewClick = () => {
    ready.value = true;
    router.replace({name: "nimbltv"});
};

onKeyStroke("Enter", (e) => {
    e.preventDefault();
    handlePreviewClick();
});

const changeZIndex = ref(false);
watchEffect(() => {
    if (ready.value) {
        setTimeout(() => (changeZIndex.value = true), 1000);
    }
});

onMounted(() => {
    router.replace({name: "nimbltv"});
});
</script>

<template>
    <button
        v-if="!ready"
        type="button"
        class="left-0 right-0 top-0 bottom-0 z-30 absolute block"
        @click="handlePreviewClick"
        ></button>
    <main class="absolute inset-0 overflow-hidden bg-[#0F0722]">
        <!-- :class="{'z-30': changeZIndex}" -->
        <div class="absolute left-0 top-0 right-0 bottom-0 overflow-hidden">
            <router-view v-slot="{Component, route}">
                <TransitionLeavePage :to-meta="route.meta">
                    <component :ready="ready" :is="Component" />
                </TransitionLeavePage>
            </router-view>
        </div>
        <AppJoystick @click-bottom="isModalOpen = !isModalOpen" />
        <NavigationApp />

        <template v-if="!isXS">
            <Transition @leave="onLeavePreviewPage" :css="false" mode="in-out">
                <PreviewView v-if="!ready" />
            </Transition>
        </template>
        <template v-if="isXS">
            <Transition name="prev-mob" mode="in-out">
                <PreviewViewMobile v-if="!ready" />
            </Transition>
        </template>
        <Transition
            enter-active-class="transition-all"
            leave-active-class="transition-all"
            leave-to-class="opacity-0 translate-y-1/2"
            enter-from-class="opacity-0 translate-y-1/2"
            ><ModalContacts @click-close="isModalOpen = !isModalOpen" v-if="isModalOpen"
        /></Transition>
    </main>
</template>

<style scoped>
main {
    background: url("./assets/background-stars.png") 100px;
}
.prev-mob-enter-active,
.prev-mob-leave-active {
    transition:
        opacity 1s ease 0.2s,
        transform 1s ease 0.2s;
}

.prev-mob-enter-from,
.prev-mob-leave-to {
    opacity: 0;
    transform: scale(1.5);
}
</style>
