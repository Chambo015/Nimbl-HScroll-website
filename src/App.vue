<script setup lang="ts">
import {onMounted, ref} from "vue";
import NavigationApp from "./components/NavigationApp.vue";
import PreviewView from "./views/PreviewView.vue";
import {onLeavePreviewPage} from "@/leaveHooks";
import {useRoute, useRouter} from "vue-router";
import TransitionLeavePage from "./components/TransitionLeavePage.vue";
import AppJoystick from "./components/Joystick/AppJoystick.vue";
import {useMediaQuery, onKeyStroke} from "@vueuse/core";
import PreviewViewMobile from "./views/PreviewViewMobile.vue";
import ModalContacts from "./components/ModalContacts.vue";

const ready = ref(false);
const mainEl = ref();
const isModalOpen = ref(false);
const router = useRouter();
const route = useRoute();
const imgUploaded = ref(false);
const isXS = useMediaQuery("(max-width: 700px)");

const handlePreviewClick = () => {
    ready.value = true;
    document.body.requestFullscreen();
    router.replace({name: "nimbltv"});
};

onKeyStroke("Enter", (e) => {
    if (ready.value) return;
    e.preventDefault();
    handlePreviewClick();
});

onMounted(async () => {
    await router.isReady();
    if (route.name !== "nimbltv") {
        ready.value = true;
        return;
    }
    router.replace({name: "nimbltv"});
    setTimeout(() => {
        imgUploaded.value = true;
    }, 1500);
});
</script>

<template>
    <button
        v-if="!ready"
        type="button"
        class="left-0 right-0 top-0 bottom-0 z-[9999] absolute block"
        @click="handlePreviewClick"></button>
    <main ref="mainEl" class="absolute inset-0 overflow-hidden bg-[#0F0722]">
        <div class="absolute left-0 top-0 right-0 bottom-0 overflow-hidden">
            <router-view v-slot="{Component, route}">
                <TransitionLeavePage :to-meta="route.meta">
                    <component :ready="ready" :is="Component" />
                </TransitionLeavePage>
            </router-view>
        </div>
        <AppJoystick v-if="ready" @click-bottom="isModalOpen = !isModalOpen" />
        <NavigationApp />
        <!-- Preview for Desktop  -->
        <template v-if="!isXS">
            <Transition @leave="onLeavePreviewPage" :css="false" mode="in-out">
                <PreviewView v-if="!ready" />
            </Transition>
        </template>
        <!-- Preview for Mobile -->
        <template v-if="isXS">
            <Transition name="prev-mob" mode="in-out">
                <PreviewViewMobile v-if="!ready" />
            </Transition>
        </template>
        <!-- Modal Contact -->
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
