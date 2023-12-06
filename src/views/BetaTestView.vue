<template>
    <section class="relative w-full h-full flex flex-col max-sm:items-center">
        <div ref="titleEl" data="titleEl" class="container justify-center flex pt-[50px] max-sm:pt-[40px]">
            <div class="inline-flex flex-col items-center">
                <div
                    class="py-3 px-4 border-[#6E7DFE] border bg-[#1C0048] inline-block lg:py-4 lg:px-6 font-gilroy font-medium tracking-[0.17em] lg:text-2xl mb-5 lg:mb-6 !leading-none">
                    BETA TESTING
                </div>
                <h1 class="main-title">
                    NIMBL.TV
                    <span class="main-text-layer">NIMBL.TV</span>
                </h1>
            </div>
        </div>

        <div class="container flex grow pb-[35px] gap-24 mt-10 overflow-y-clip">
            <div class="lg:w-[500px] w-full self-start shrink-0 pt-5">
                <form @submit.prevent="">
                    <div class="relative flex items-center gap-0 px-5 py-3 lg:py-5 lg:px-8">
                        <svg
                            class="mr-5 lg:w-8 lg:h-8 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Z" />
                        </svg>
                        <input
                            @input="errorText = null"
                            type="text"
                            v-model="userName"
                            class="bg-transparent font-gilroy outline-none w-full text-sm lg:text-2xl"
                            :class="[errorText ? 'text-red-500' : 'text-white']"
                            placeholder="Name/Pseudonym" />
                        <div class="inner-border absolute inset-0"></div>
                    </div>
                    <div class="relative flex items-center gap-0 px-5 py-3 lg:py-5 lg:px-8 mt-5 lg:mt-8">
                        <svg
                            class="mr-5 lg:w-8 lg:h-8 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20H4Zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037Z" />
                        </svg>
                        <input
                            @input="errorText = null"
                            type="text"
                            v-model="userEmail"
                            class="bg-transparent font-gilroy outline-none w-full text-sm lg:text-2xl"
                            :class="[errorText ? 'text-red-500' : 'text-white']"
                            placeholder="Email address" />
                        <div class="inner-border absolute inset-0"></div>
                    </div>
                    <div class="relative flex items-center gap-0 px-5 py-3 lg:py-5 lg:px-8 mt-5 lg:mt-8">
                        <svg
                            class="mr-5 lg:w-8 lg:h-8 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5h-8q-1.775 0-2.887 1.113T9 9v6q0 1.775 1.113 2.888T13 19h8q0 .825-.587 1.413T19 21H5Zm8-4q-.825 0-1.412-.587T11 15V9q0-.825.588-1.412T13 7h7q.825 0 1.413.588T22 9v6q0 .825-.587 1.413T20 17h-7Zm3-3.5q.65 0 1.075-.425T17.5 12q0-.65-.425-1.075T16 10.5q-.65 0-1.075.425T14.5 12q0 .65.425 1.075T16 13.5Z" />
                        </svg>
                        <input
                            @input="errorText = null"
                            type="text"
                            v-model="userWallet"
                            class="bg-transparent font-gilroy outline-none w-full text-sm lg:text-2xl"
                            :class="[errorText ? 'text-red-500' : 'text-white']"
                            placeholder="Wallet address" />
                        <div class="inner-border absolute inset-0"></div>
                    </div>

                    <HeroButton class="w-full h-[55px] mt-8 lg:mt-14" title="coming soon">
                        <p class="font-rfdewi text-2xl max-sm:text-sm font-bold">APPLY</p>
                        <template #icon><IconFiveDots class="w-[30px] h-[30px]" /></template>
                    </HeroButton>

                    <div class="flex justify-center items-center mt-5">
                        <input type="checkbox" id="Terms" />
                        <label for="Terms" class="text-white/50 select-none"
                            >I agree to the <a href="">Terms of Use</a></label
                        >
                    </div>
                </form>
            </div>
            <div class="flex grow h-full relative">
                <img
                    :src="imgPhone"
                    alt="imgPhone"
                    loading="lazy"
                    class="h-[125%] !w-auto !max-w-[auto] object-contain shrink-0 relative z-20" />
                <div
                    class="relative grow w-[50vw] z-10 before:absolute before:bottom-0 before:top-10 before:right-0 before:-left-[10%] before:bg-[#20133E]"></div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import {ref} from "vue";

import HeroButton from "@/components/HeroButton.vue";
import IconFiveDots from "@/components/icons/IconFiveDots.vue";
import imgPhone from "@/assets/beta/nimbl-left.webp";

const userName = ref("");
const userEmail = ref("");
const userWallet = ref("");
const errorText = ref(null);
</script>

<style scoped>
.main-title {
    background-image: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background: -webkit-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image: -webkit-linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image: -moz-linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image: -ms-linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image: -o-linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    position: relative;
    @apply text-center font-rfdewi inline-block bg-clip-text  text-[125px] max-sm:text-[55px] !leading-none font-black uppercase -translate-x-2 -translate-y-7 max-sm:-translate-x-0 max-sm:-translate-y-6;
    -webkit-font-smoothing: antialiased;
    text-shadow: none;
    color: transparent;
}

.main-text-layer {
    background-size: contain;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    -webkit-font-smoothing: antialiased;
    background-color: rgb(56, 123, 255);
    text-shadow: none;
    color: transparent;
}
@supports (background-clip: text) and (-webkit-text-fill-color: transparent) {
    .main-title {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
    }
}

@supports (mix-blend-mode: overlay) and (background-clip: text) and (-webkit-text-fill-color: transparent) {
    .main-text-layer {
        background-image: url("../assets/image1895.webp");
        mix-blend-mode: overlay;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}

div.inner-border {
    --rb: 20px;
    --wb: 2px;
    clip-path: polygon(
        0% var(--rb),
        var(--rb) 0%,
        100% 0%,
        100% calc(100% - var(--rb)),
        calc(100% - var(--rb)) 100%,
        0% 100%,
        var(--wb) calc(100% - var(--wb)),
        calc(100% - var(--rb)) calc(100% - var(--wb)),
        calc(100% - var(--wb)) calc(100% - var(--rb)),
        calc(100% - var(--wb)) var(--wb),
        calc(var(--rb)) var(--wb),
        var(--wb) calc(var(--rb)),
        var(--wb) calc(100% - var(--wb)),
        0% 100%
    );
    background-color: rgba(255, 255, 255, 0.4);
}

input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border: 1px solid #9b9ca7;
    vertical-align: middle;
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
    transition: 0.25s;
    background-size: 0;
    background-position: center;
}
input[type="checkbox"]:checked {
    background:
        no-repeat center/80% 100%
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' stroke='%23fff' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E"),
        no-repeat center/100%
            linear-gradient(
                270deg,
                rgba(234, 0, 213, 0.8) -75%,
                rgba(61, 94, 255, 0.8) 48.86%,
                rgba(0, 234, 242, 0.8) 158.33%
            );
    border: none;
}
</style>
