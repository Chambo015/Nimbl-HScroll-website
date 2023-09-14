<template>
    <div ref="container" class="keen-slider !w-[80%] max-sm:!w-full items-center relative mx-auto">
        <div
            :class="[
                'keen-slider__slide !w-auto items-center flex shrink-0 justify-center ',
                currentSlide === 0 ? styles.activeWrap : styles.unActiveWrap,
            ]">
            <picture class="w-full">
                <source :srcset="screen1Webp" type="image/webp"  />
                <img
                    :src="screen1"
                    alt="screen1"
                    :class="[currentSlide === 0 ? styles.activeImg : styles.unActiveImg]" />
            </picture>
        </div>
        <div
            :class="[
                'keen-slider__slide !w-auto items-center flex shrink-0 justify-center',
                currentSlide === 1 ? styles.activeWrap : styles.unActiveWrap,
            ]">
            <picture class="w-full">
                <source :srcset="screen2Webp" type="image/webp" />
                <img
                    :src="screen2"
                    alt="screen2"
                    :class="[currentSlide === 1 ? styles.activeImg : styles.unActiveImg]" />
            </picture>
        </div>
        <div
            :class="[
                'keen-slider__slide !w-auto items-center flex shrink-0 justify-center',
                currentSlide === 2 ? styles.activeWrap : styles.unActiveWrap,
            ]">
            <picture class="w-full">
                <source :srcset="screen3Webp" type="image/webp" />
                <img
                    :src="screen3"
                    alt="screen3"
                    :class="[currentSlide === 2 ? styles.activeImg : styles.unActiveImg]" />
            </picture>
        </div>
        <div
            :class="[
                'keen-slider__slide !w-auto items-center flex shrink-0 justify-center',
                currentSlide === 3 ? styles.activeWrap : styles.unActiveWrap,
            ]">
            <picture class="w-full">
                <source :srcset="screen4Webp" type="image/webp" />
                <img
                    :src="screen4"
                    alt="screen4"
                    :class="[currentSlide === 3 ? styles.activeImg : styles.unActiveImg]" />
            </picture>
        </div>
        <div
            :class="[
                'keen-slider__slide !w-auto items-center flex shrink-0 justify-center',
                currentSlide === 4 ? styles.activeWrap : styles.unActiveWrap,
            ]">
            <picture class="w-full">
                <source :srcset="screen5Webp" type="image/webp" />
                <img
                    :src="screen5"
                    alt="screen5"
                    :class="[currentSlide === 4 ? styles.activeImg : styles.unActiveImg]" />
            </picture>
        </div>
        <div
            class="absolute left-0 top-0 w-full h-full flex-grow"
            :style="{
                background:
                    'linear-gradient(90deg, #0F0722 0%, rgba(15, 7, 34, 0.09) 44.40%, rgba(15, 7, 34, 0.00) 57.81%, #0F0722 100%)',
            }"></div>
    </div>
</template>

<script setup lang="ts">
import {useKeenSlider} from "keen-slider/vue";
import {ref} from "vue";
import {useMediaQuery} from "@vueuse/core";
import screen1 from "@/assets/app-screens/screen-1.png";
import screen2 from "@/assets/app-screens/screen-2.png";
import screen3 from "@/assets/app-screens/screen-3.png";
import screen4 from "@/assets/app-screens/screen-4.png";
import screen5 from "@/assets/app-screens/screen-5.png";
import screen1Webp from "@/assets/app-screens/screen-1-lg.webp";
import screen2Webp from "@/assets/app-screens/screen-2-lg.webp";
import screen3Webp from "@/assets/app-screens/screen-3-lg.webp";
import screen4Webp from "@/assets/app-screens/screen-4-lg.webp";
import screen5Webp from "@/assets/app-screens/screen-5-lg.webp";

const styles = {
    activeWrap: "aspect-[0.53] items-center px-0 max-sm:w-[225px] max-sm:h-[400px]",
    unActiveWrap: "aspect-[0.53] max-sm:w-[172px] max-sm:h-[320px] ",
    activeImg: "w-[100%] mx-auto  max-sm:w-[204px]",
    unActiveImg: "w-[90%] mx-auto ",
};

const currentSlide = ref(0);
const isLargerXS = useMediaQuery("(min-width: 640px)");

const [container] = useKeenSlider<HTMLDivElement>(
    {
        slides: {
            perView: isLargerXS.value ? 5 : 2,
            spacing: 15,
            origin: "center",
        },
        loop: true,
        slideChanged(slider) {
            currentSlide.value = slider.track.details.rel;
        },
    },
    [
        (slider) => {
            let timeout: ReturnType<typeof setTimeout>;
            let mouseOver = false;
            function clearNextTimeout() {
                clearTimeout(timeout);
            }
            function nextTimeout() {
                clearTimeout(timeout);
                if (mouseOver) return;
                timeout = setTimeout(() => {
                    slider.next();
                }, 2000);
            }
            slider.on("created", () => {
                nextTimeout();
            });
            slider.on("dragStarted", clearNextTimeout);
            slider.on("animationEnded", nextTimeout);
            slider.on("updated", nextTimeout);
        },
    ],
);
</script>

<style scoped>
@import url("keen-slider/keen-slider.css");

[class^="number-slide"],
[class*=" number-slide"] {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 492px;
  width: 264px;
  max-height: 100vh;
}
</style>
