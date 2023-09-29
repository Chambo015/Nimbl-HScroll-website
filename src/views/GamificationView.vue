<template>
    <section ref="sectionEl" @wheel="onWheel" class="relative flex flex-col justify-center h-full">
        <div ref="levelEl" data="levelEl"
            class="bg-[linear-gradient(135deg,#C031FA_0%,#6529E0_100%)] mx-auto w-[181px] relative z-10 -mb-20 h-[324px] max-sm:h-[220px] max-sm:w-[123px] max-2xl:h-[260px] max-2xl:w-[135px] rounded-[175px] border-2 border-[#7351C8] overflow-hidden flex justify-center items-center flex-col gap-2 py-3">
            <div class="w-[85px] max-2xl:w-[70px] max-sm:w-[57px]">
                <div
                    class="bg-[rgba(217,217,217,.2)] font-tt-octosquares text-2xl max-2xl:text-lg leading-none py-1 text-center max-sm:text-base">
                    level
                </div>
                <div
                    class="bg-[rgba(51,51,51,.5)] font-TTOctos text-[28px] max-2xl:text-lg leading-none text-center max-2xl:py-1 py-2 max-sm:text-lg">
                    10
                </div>
            </div>
            <picture
                ><source :srcset="levelXPWebp" type="image/webp" />
                <img loading="lazy" :src="levelXP" alt="levelXP" class="max-sm:h-[95px] max-2xl:h-[120px]"
            /></picture>
        </div>
        <div
            ref="contentEl" data="contentEl"
            class="[clip-path:polygon(25%_0,75%_0,100%_50%,100%_100%,0_100%,0%_50%)] max-sm:[clip-path:polygon(40%_0,60%_0,100%_20%,100%_100%,0_100%,0%_20%)] flex flex-col items-center pt-[120px] bg-[#20133E] w-full h-[600px] relative overflow-visible max-sm:h-[500px]">
            <h2
                class="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-center mx-auto w-[590px] text-5xl font-rfdewi font-black uppercase max-sm:text-2xl max-sm:w-[80%]">
                Create/Engage and Earn
            </h2>
            <p class="text-center font-gilroy text-2xl mt-6 text-white max-sm:text-base max-sm:w-[90%]">
                No complex crypto ponzienomics, simply <span class="text-[#6529E0]">rewarding</span> our early creators
                and users
            </p>
            <picture class=" mt-auto  max-sm:w-[90%]"> <source :srcset="imgGroupWebp" type="image/webp" /><img loading="lazy" :src="imgGroup" alt="imgGroup" width="400" height="248" class="w-[500px] max-2xl:w-[450px] " /></picture>
            <picture>
                <source :srcset="creater1Webp" type="image/webp" />
                <img :style="layer0"
                    loading="lazy"
                    :src="creater1"
                    alt="creator1"
                    class="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute left-[20%] top-[10%] z-20" />
            </picture>
            <picture>
                <source :srcset="creater2Webp" type="image/webp" />
                <img :style="layer1"
                    loading="lazy"
                    :src="creater2"
                    alt="creator2"
                    class="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute left-[13%] top-[20%] z-20 max-sm:left-[5%] max-sm:top-[18%]" />
            </picture>
            <picture>
                <source :srcset="creater3Webp" type="image/webp" />
                <img :style="layer0"
                    loading="lazy"
                    :src="creater3"
                    alt="creator3"
                    class="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute left-[30%] top-[8%] z-20" />
            </picture>
            <picture>
                <source :srcset="creater4Webp" type="image/webp" />
                <img :style="layer1"
                    loading="lazy"
                    :src="creater4"
                    alt="creator4"
                    class="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute left-[10%] top-[38%] z-20 max-sm:left-[25%] max-sm:top-[15%]" />
            </picture>
            <picture>
                <source :srcset="creater5Webp" type="image/webp" />
                <img :style="layer0"
                    loading="lazy"
                    :src="creater5"
                    alt="creator5"
                    class="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute left-[17%] top-[40%] z-20 max-sm:left-[15%] max-sm:top-[16%]" />
            </picture>
            <picture>
                <source :srcset="creater6Webp" type="image/webp" />
                <img :style="layer1"
                    loading="lazy"
                    :src="creater6"
                    alt="creator6"
                    class="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute left-[22%] top-[50%] z-20 max-sm:hidden" />
            </picture>
            <picture>
                <source :srcset="creater7Webp" type="image/webp" />
                <img :style="layer0"
                    loading="lazy"
                    :src="creater7"
                    alt="creator7"
                    class="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute left-[10%] top-[60%] z-20 max-sm:hidden" />
            </picture>
            <picture>
                <source :srcset="creater8Webp" type="image/webp" />
                <img :style="layer1"
                    loading="lazy"
                    :src="creater8"
                    alt="creator8"
                    class="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute left-[16%] top-[65%] z-20 max-sm:hidden" />
            </picture>
            <picture>
                <source :srcset="creater9Webp" type="image/webp" />
                <img :style="layer1"
                    loading="lazy"
                    :src="creater9"
                    alt="creator9"
                    class="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute left-[25%] top-[72%] z-20 max-sm:hidden" />
            </picture>
            <picture>
                <source :srcset="creater10Webp" type="image/webp" />
                <img :style="layer0"
                    loading="lazy"
                    :src="creater10"
                    alt="creator10"
                    class="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute right-[25%] top-[72%] z-20 max-sm:right-[15%] max-sm:top-[15%]" />
            </picture>
            <picture>
                <source :srcset="creater11Webp" type="image/webp" />
                <img :style="layer1"
                    loading="lazy"
                    :src="creater11"
                    alt="creator11"
                    class="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute right-[15%] top-[60%] z-20 max-sm:right-[5%] max-sm:top-[18%]" />
            </picture>
            <picture>
                <source :srcset="creater12Webp" type="image/webp" />
                <img :style="layer0"
                    loading="lazy"
                    :src="creater12"
                    alt="creator12"
                    class="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute right-[22%] top-[56%] z-20 max-sm:right-[35%] max-sm:top-[16%]" />
            </picture>
            <picture>
                <source :srcset="creater13Webp" type="image/webp" />
                <img :style="layer1"
                    loading="lazy"
                    :src="creater13"
                    alt="creator13"
                    class="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute right-[8%] top-[50%] z-20 max-sm:right-[23%] max-sm:top-[18%]" />
            </picture>
           <picture>
            <source :srcset="creater14Webp" type="image/webp" />
                <img :style="layer0"
                    loading="lazy"
                    :src="creater14"
                    alt="creator14"
                    class="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute right-[25%] top-[10%] z-20" />
           </picture>
            <picture>
                <source :srcset="creater15Webp" type="image/webp" />
                <img :style="layer1"
                    loading="lazy"
                    :src="creater15"
                    alt="creator15"
                    class="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute right-[17%] top-[22%] z-20 max-sm:hidden" />
            </picture>
            <picture>
                <source :srcset="creater16Webp" type="image/webp" />
                <img :style="layer0"
                    loading="lazy"
                    :src="creater16"
                    alt="creator16"
                    class="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute right-[18%] top-[40%] z-20 max-sm:hidden" />
            </picture>
            <picture>
                <source :srcset="creater17Webp" type="image/webp" />
                <img :style="layer1"
                    loading="lazy"
                    :src="creater17"
                    alt="creator17"
                    class="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute right-[18%] top-[80%] z-20 max-sm:hidden" />
            </picture>
           <picture>
            <source :srcset="creater18Webp" type="image/webp" />
                <img :style="layer0"
                    loading="lazy"
                    :src="creater18"
                    alt="creator18"
                    class="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] absolute right-[10%] top-[83%] z-20 max-sm:hidden" />
           </picture>
        </div>
        <picture   ref="imgCoinRightEl" data="imgCoinRightEl" class=" absolute right-[20px] top-[40%] z-20 max-sm:-right-[10px] max-sm:top-[520px] ">
            <source :srcset="imgCoinWebp" type="image/webp" />
            <img :style="layer3"
              
                loading="lazy"
                :src="imgCoin"
                alt="imgCoin"
                class="w-[136px] h-[136px] object-contain  max-sm:w-[72px] max-sm:h-[72px]" />
        </picture>
       <picture ref="imgGlassRightEl" data="imgGlassRightEl" class="absolute right-[20px] bottom-[44px] z-20 max-sm:right-0 max-sm:-left-[20px] max-sm:top-[620px]">
        <source :srcset="imgGlassWebp" type="image/webp" />
            <img
            :style="layer3"
                loading="lazy"
                :src="imgGlass"
                alt="imgGlass"
                class="w-[129px] h-[129px] object-contain  max-sm:w-[72px] max-sm:h-[72px] " />
       </picture>
       <picture ref="imgCoinLeftEl" data="imgCoinLeftEl" class="absolute left-[30px] bottom-[40px] z-20">
        <source :srcset="imgCoinWebp" type="image/webp" />
            <img
            :style="layer2"
                
                loading="lazy"
                :src="imgCoin"
                alt="imgCoin"
                class="w-[112px] h-[112px] object-contain  max-sm:hidden" />
       </picture>
       <picture ref="imgGlassLeftEl" data="imgGlassLeftEl" class="absolute left-[50px] top-[42%] z-20">
        <source :srcset="imgCircleWebp" type="image/webp" />
            <img :style="layer2"
                
                loading="lazy"
                :src="imgCircle"
                alt="imgCircle"
                class="w-[75px] h-[75px] object-contain  max-sm:hidden" />
       </picture>
    </section>
</template>

<script setup lang="ts">
import levelXP from "@/assets/levelXP.png";
import levelXPWebp from "@/assets/levelXP.webp";
import imgGroup from "@/assets/GroupCreators.png";
import imgGroupWebp from "@/assets/GroupCreators.webp";
import {
    creater1,
    creater10,
    creater10Webp,
    creater11,
    creater11Webp,
    creater12,
    creater12Webp,
    creater13,
    creater13Webp,
    creater14,
    creater14Webp,
    creater15,
    creater15Webp,
    creater16,
    creater16Webp,
    creater17,
    creater17Webp,
    creater18,
    creater18Webp,
    creater1Webp,
    creater2,
    creater2Webp,
    creater3,
    creater3Webp,
    creater4,
    creater4Webp,
    creater5,
    creater5Webp,
    creater6,
    creater6Webp,
    creater7,
    creater7Webp,
    creater8,
    creater8Webp,
    creater9,
creater9Webp,
} from "@/assets/creaters";
import imgCoin from "@/assets/coin.png";
import imgCoinWebp from "@/assets/coin.webp";
import imgGlass from "@/assets/glass.png";
import imgGlassWebp from "@/assets/glass.webp";
import imgCircle from "@/assets/circle.png";
import imgCircleWebp from "@/assets/circle.webp";
import gsap from "gsap";
import useMouseWheel from "@/composables/mouseWheel";
import {onMounted, ref, reactive, computed} from "vue";
import { useMediaQuery, useParallax } from '@vueuse/core';

const isXS = useMediaQuery("(max-width: 700px)");

const sectionEl = ref();
const contentEl = ref();
const levelEl = ref();
const imgCoinRightEl = ref();
const imgGlassRightEl = ref();
const imgCoinLeftEl = ref();
const imgGlassLeftEl = ref();

const {onWheel} = useMouseWheel({toDownRoute: "ai", toUpRoute: "teaser", target: sectionEl});

const parallax = reactive(useParallax(sectionEl));
const layer0 = computed(() => ({
  transition: ".3s ease-out all",
  transform: `translateX(${parallax.tilt * 10}px) translateY(${parallax.roll * 10}px)`,
}))
const layer1 = computed(() => ({
  transition: ".3s ease-out all",
  transform: `translateX(${parallax.tilt * -10}px) translateY(${parallax.roll * -10}px)`,
}))
const layer2 = computed(() => ({
  transition: ".3s ease-out all",
  transform: `translateX(${parallax.tilt * 20}px) translateY(${parallax.roll * 40}px)`,
}))
const layer3 = computed(() => ({
  transition: ".3s ease-out all",
  transform: `translateX(${parallax.tilt * -20}px) translateY(${parallax.roll * -40}px)`,
}))

onMounted(() => {
    if(isXS.value) return
    const tl = gsap.timeline();

    tl.from(contentEl.value, {
        yPercent: 100,
        autoAlpha: 0.0,
        duration: 1.5,
        ease: "expo.inOut",
    });
    tl.from(
        levelEl.value,
        {
            yPercent: -100,
            autoAlpha: 0.0,
            duration: 1.5,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.from(
        imgCoinRightEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            xPercent: 100,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.from(
      imgGlassRightEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.2,
            xPercent: 100,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.from(
      imgCoinLeftEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            xPercent: -100,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.from(
      imgGlassLeftEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.3,
            xPercent: -100,
            ease: "expo.inOut",
        },
        "0",
    );
});
</script>

<style scoped></style>
