<script setup lang="ts">
import lightImg from "@/assets/light.png";
import lightImgWebp from "@/assets/light.webp";
import right_lg_planet from "@/assets/right_lg_planet.png";
import right_lg_planetWebp from "@/assets/right_lg_planet.webp";
import podium from "@/assets/podium.png";
import podiumWebp from "@/assets/podium.webp";
import HeroSliderApp from "@/components/HeroSliderApp.vue";
import gsap from "gsap";
import {computed, onMounted, reactive, ref, watchEffect} from "vue";
import useMouseWheel from "@/composables/mouseWheel";
import {useMediaQuery, useParallax, useWindowSize} from "@vueuse/core";

const props = defineProps({
    ready: Boolean,
});

const isXS = useMediaQuery("(max-width: 700px)");
const {height} = useWindowSize();

const sectionEl = ref();
const sectionInnerEl = ref();
const sliderEl = ref();
const buttonsEl = ref();
const titleEl = ref();
const lightEl = ref();
const planetsEl = ref();

const {onWheel} = useMouseWheel({toDownRoute: "stakes", target: sectionEl});

const parallax = reactive(useParallax(sectionEl));
const layer0 = computed(() => ({
    transition: ".3s ease-out all",
    transform: `translateX(${parallax.tilt * 10}px) translateY(${parallax.roll * 10}px)`,
}));
const layer1 = computed(() => ({
    transition: ".3s ease-out all",
    transform: `translateX(${parallax.tilt * 20}px) translateY(${parallax.roll * 20}px) rotate(140deg)`,
}));
const layer2 = computed(() => ({
    transition: ".3s ease-out all",
    transform: `translateX(${parallax.tilt * 30}px) translateY(${parallax.roll * 30}px) rotate(120deg)`,
}));
const layer3 = computed(() => ({
    transition: ".3s ease-out all",
    transform: `translateX(${parallax.tilt * 40}px) translateY(${parallax.roll * 40}px) rotate(140deg)`,
}));
const layer4 = computed(() => ({
    transition: ".3s ease-out all",
    transform: `translateX(${parallax.tilt * 40}px) translateY(${parallax.roll * 40}px) rotate(-20deg)`,
}));

watchEffect(() => {
    if (props.ready) {
        const tl = gsap.timeline();

        tl.to(sectionInnerEl.value, {
            scale: 1,
            yPercent: -60,
            top: "50%",
            duration: 1,
            delay: 0.3,
        });
        tl.to(
            lightEl.value,
            {
                autoAlpha: 1,
                duration: 1,
            },
            "+=0",
        );
        tl.to(
            planetsEl.value,
            {
                autoAlpha: 1,
                duration: 1.5,
                ease: "expo.inOut",
            },
            "-=1",
        );
    }
});

onMounted(() => {
    if (isXS.value) return;
    const tl = gsap.timeline();

    tl.from(sliderEl.value, {
        autoAlpha: 0.0,
        duration: 1.5,
        scale: 0.0,
        ease: "expo.inOut",
    });
    tl.from(
        buttonsEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            yPercent: 100,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.from(
        titleEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            yPercent: -100,
            ease: "expo.inOut",
        },
        "0",
    );
});

onMounted(() => {
    if (props.ready) return;
    // Состояние во время preview
    if (isXS.value) {
        // for mobile
        if (height.value < 700) {
            // for Iphone SE
            gsap.set(sectionInnerEl.value, {
                scale: 1.5,
                yPercent: -70,
                top: "50%",
            });
        } else {
            gsap.set(sectionInnerEl.value, {
                scale: 1.8,
                yPercent: -75,
                top: "50%",
            });
        }
    } else {
        // For Desktop
        gsap.set(sectionInnerEl.value, {
            scale: 0.45,
            yPercent: -50,
            top: "50%",
        });
    }
});
</script>

<template>
    <section ref="sectionEl" @wheel="onWheel" class="relative w-full h-full max-sm:flex max-sm:items-center">
        <picture ref="lightEl" data="lightEl" class="opacity-0">
            <source :srcset="lightImgWebp" type="image/webp" />
            <img
                :src="lightImg"
                alt="lightImg"
                loading="lazy"
                class="absolute top-[-1%] left-1/2 -translate-x-1/2 z-40 select-none pointer-events-none" />
        </picture>
        <div ref="sectionInnerEl" class="w-full left-0 absolute will-change-transform">
            <div ref="titleEl" data="titleEl" class="container justify-center flex pt-[50px] max-sm:pt-[40px]">
                <div class="inline-flex flex-col">
                    <p
                        class="text-justify font-gilroy leading-none after:inline-block after:w-full text-white text-2xl max-sm:text-xs font-normal uppercase tracking-[.6em] max-sm:tracking-[.3em]">
                        Flagship Social Media Platform
                    </p>
                    <h1 class="main-title">
                        NIMBL.TV
                        <span class="main-text-layer">NIMBL.TV</span>
                    </h1>
                </div>
            </div>
            <div ref="sliderEl" class="relative">
                <HeroSliderApp data="slider_h_El" />
                <div
                    class="hidden max-sm:block after:absolute after:w-full after:h-[20%] after:bg-gradient-to-b after:to-[#0F0722] after:z-20 after:bottom-0 after:translate-y-full after:from-[#0f07221f]">
                    <picture
                        ><source :srcset="podiumWebp" type="image/webp" />
                        <img
                            :src="podium"
                            alt="podium"
                            width="820"
                            height="170"
                            class="w-full z-10 mx-auto absolute bottom-0 translate-y-[90%] -translate-x-1/2 left-1/2"
                    /></picture>
                </div>
            </div>
            <!--  <div
                ref="buttonsEl"
                data="buttonsEl"
                class="max-sm:hidden opacity-0 absolute left-1/2 p-6 gap-4 bottom-16 z-10 -translate-x-1/2 flex justify-center mt-11 max-sm:flex-col items-center bg-btn-bg-liner border-[#7351C8] border-[2px] shadow-[0px_2px_5px_6px_rgba(101,41,225,0.35)]">
                <HeroButton
                    >APPLY FOR CLOSED BETA<template #icon><IconFiveDots /></template
                ></HeroButton>
                <HeroButton @click="$router.push({name: 'ai'})" regular>LAUNCH DESKTOP DEMO APP</HeroButton>
            </div>
            <div class="w-[266px] h-[55px] mx-auto mt-5 hidden max-sm:hidden opacity-0">
                <HeroButton @click="$router.push({name: 'ai'})"
                    >DOWNLOAD APP<template #icon><IconFiveDots /></template
                ></HeroButton>
            </div> -->
        </div>
        <div ref="planetsEl" data="planetsEl" class="opacity-0">
            <div
                :style="layer1"
                class="w-16 h-16 rounded-full bg-bg-planet-liner blur-[1px] absolute left-48 top-16 rotate-[140deg] drop-shadow-[6px_-1px_26px_rgba(255,255,255,0.16)] max-2xl:left-36 max-2xl:top-10 max-sm:w-7 max-sm:h-7 max-sm:-left-1"></div>
            <div
                :style="layer3"
                class="w-6 h-6 rounded-full bg-bg-planet-liner blur-[1px] absolute left-48 top-16 rotate-[140deg] drop-shadow-[6px_-1px_26px_rgba(255,255,255,0.16)] max-2xl:left-36 max-2xl:top-10 max-sm:left-5 max-sm:top-20"></div>
            <div
                :style="layer3"
                class="w-8 h-8 rounded-full bg-bg-planet-liner blur-[2px] absolute left-36 top-40 rotate-[145deg] drop-shadow-[6px_-1px_26px_rgba(255,255,255,0.1)] max-2xl:left-16 max-2xl:top-36 max-sm:hidden"></div>
            <picture>
                <source :srcset="right_lg_planetWebp" type="image/webp" />
                <img
                    :style="layer0"
                    :src="right_lg_planet"
                    alt="right_lg_planet"
                    width="298"
                    height="146"
                    class="absolute right-10 top-16 blur-[1px] max-2xl:right-5 max-2xl:w-[230px] max-sm:w-28 max-sm:top-20 max-sm:-right-5"
            /></picture>
            <div
                :style="layer4"
                class="w-8 h-8 rounded-full bg-bg-planet-liner blur-[2px] absolute right-60 top-10 rotate-[-20deg] drop-shadow-[6px_-1px_26px_rgba(255,255,255,0.1)] max-2xl:right-44 max-2xl:top-7 max-sm:right-1"></div>
            <div
                :style="layer2"
                class="w-24 h-24 rounded-full bg-[radial-gradient(71.22%_69.08%_at_68.95%_56.86%,#29353E_0%,#101417_80.6%,#AB78FE_92.89%,#FFF_100%)] blur-[2px] absolute left-20 bottom-10 rotate-[120deg] drop-shadow-[6px_-1px_26px_rgba(255,255,255,0.1)] max-2xl:left-14 max-2xl:w-16 max-2xl:h-16 max-sm:hidden"></div>
        </div>
    </section>
</template>

<style scoped>
.main-title {
    background-image: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background: -webkit-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image: -webkit-linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image:    -moz-linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image:     -ms-linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image:      -o-linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image:         linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    position: relative;
    @apply text-center font-rfdewi inline-block bg-clip-text  text-[145px] max-sm:text-[55px] !leading-none font-black uppercase -translate-x-2 -translate-y-7 max-sm:-translate-x-0 max-sm:-translate-y-6;
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
        -moz-background-clip: text
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
</style>
