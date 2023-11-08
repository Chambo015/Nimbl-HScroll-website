<template>
    <section
        ref="sectionEl"
        @wheel="onWheel"
        class="h-full flex items-center pt-5 pb-10 max-md:pt-0 max-sm:py-1 max-sm:items-center">
        <div ref="containerEl" data="containerEl" class="relative w-full h-full p-5 max-md:p-2 grid grid-cols-7 auto-rows-[minmax(0px,_1fr)] gap-5 max-md:gap-3 max-md:grid-cols-2">
            <div class="item__ceil col-span-2 max-md:col-span-1">
                <div class="w-full h-[70%] absolute left-0 top-0 right-0 bg-center max-md:bg-center bg-repeat-x" :style="{backgroundImage: `url(${imgCex})`}"></div>
                <div class="flex items-center justify-between absolute bottom-5 left-5 right-5 max-md:left-2 max-md:right-2 max-md:bottom-2">
                    <span class="item__title">CEX listings</span>
                    <span class="item__percent">6%</span>
                </div>
            </div>
            <div class="item__ceil col-span-2 max-md:col-span-1">
                <div class="w-full h-[70%] absolute left-0 top-0 right-0 bg-no-repeat bg-top bg-cover mix-blend-lighten " :style="{backgroundImage: `url(${imgDex})`}"></div>
                <div class="flex items-center justify-between absolute bottom-5 left-5 right-5 max-md:left-2 max-md:right-2 max-md:bottom-2">
                    <span class="item__title">DEX liquidity</span>
                    <span class="item__percent">6%</span>
                </div>
            </div>
            <div class="item__ceil col-span-3 max-md:col-span-2">
                <div class="w-[35%] aspect-[2.6] absolute bottom-0 right-0 bg-no-repeat bg-center bg-contain" :style="{backgroundImage: `url(${imgChart})`}"></div>
                <div class="w-[90%] h-full absolute top-4 right-0 bg-no-repeat bg-center bg-contain" :style="{backgroundImage: `url(${imgGraph})`}"></div>
                <div class="flex flex-col-reverse justify-between absolute bottom-5 left-10 max-md:left-5 max-md:bottom-3">
                    <span class="item__title">Private Sale</span>
                    <span class="item__percent">18%</span>
                </div>
            </div>
            <!--  -->
            <div class="item__ceil col-span-3  max-md:col-span-2">
                <div class="w-1/2 h-full absolute bottom-0 top-0 right-0 bg-no-repeat bg-center bg-contain mix-blend-lighten" :style="{backgroundImage: `url(${imgMarketing})`}"></div>
                <div class="flex items-center gap-5 justify-between absolute top-1/2 left-10 -translate-y-1/2 max-md:left-5">
                    <span class="item__title">Marketing</span>
                    <span class="item__percent ">13%</span>
                </div>
            </div>
            <div class="item__ceil col-span-1 up-radial-gradient max-md:hidden">
                <div class="w-[74px] h-[74px] absolute left-1/2 bg-no-repeat bg-center bg-contain -translate-x-1/2 bottom-1/2" :style="{backgroundImage: `url(${imgPercent})`}"></div>
                <div class="flex items-center absolute bottom-10 max-2xl:bottom-5 left-1/2 -translate-x-1/2">
                    <span class="item__percent !text-[40px] max-2xl:!text-[30px]">RATIO</span>
                </div>
            </div>
            <div class="item__ceil col-span-3 max-md:col-span-2">
                <div class="w-[70%] rounded-l-xl absolute bottom-5 top-5 max-md:top-2 max-md:bottom-2 right-0 bg-no-repeat bg-top bg-cover shadow-[0px_0px_57px_0px_rgba(225,_139,_255,_0.60)_inset]" :style="{backgroundImage: `url(${imgTeam})`}"></div>
                <div class="flex flex-col-reverse justify-between absolute top-1/2 -translate-y-1/2 left-10 max-md:left-5">
                    <span class="item__title">Team</span>
                    <span class="item__percent">17%</span>
                </div>
            </div>
            <!--  -->
            <div class="item__ceil col-span-3 max-md:col-span-2">
                <div class="aspect-[0.64] h-full absolute bottom-0 left-[15%] max-md:left-[10%] bg-no-repeat bg-bottom bg-contain " :style="{backgroundImage: `url(${imgPhone})`}"></div>
                <div class="flex flex-col-reverse max-md:flex-row max-md:items-center max-md:gap-5 max-md:left-[45%] justify-between absolute top-1/2 -translate-y-1/2 left-1/2">
                    <span class="item__title">Development</span>
                    <span class="item__percent">8%</span>
                </div>
            </div>
            <div class="item__ceil col-span-4 max-md:col-span-2">
                <div class="w-1/2 h-full absolute bottom-0 top-0 right-0 bg-no-repeat bg-center mix-blend-lighten max-md:bg-cover" :style="{backgroundImage: `url(${imgTreasury})`}"></div>
                <div class="flex items-center gap-10 justify-between absolute top-1/2 left-10 -translate-y-1/2 max-md:left-5 max-md:gap-5">
                    <span class="item__title">Treasury</span>
                    <span class="item__percent ">25%</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import gsap from "gsap";
import useMouseWheel from "@/composables/mouseWheel";
import {onMounted, ref} from "vue";
import {useMediaQuery} from "@vueuse/core";

import imgCex from '@/assets/tokenomics/cex.webp'
import imgDex from '@/assets/tokenomics/dex.webp'
import imgChart from '@/assets/tokenomics/chart.webp'
import imgGraph from '@/assets/tokenomics/graph.webp'
import imgMarketing from '@/assets/tokenomics/marketing.webp'
import imgPercent from '@/assets/tokenomics/percent.webp'
import imgTeam from '@/assets/tokenomics/team.webp'
import imgPhone from '@/assets/tokenomics/phone.webp'
import imgTreasury from '@/assets/tokenomics/treasury.webp'

const isXS = useMediaQuery("(max-width: 700px)");

const sectionEl = ref();
const containerEl = ref();

const {onWheel} = useMouseWheel({toDownRoute: "token", toUpRoute: "ai", target: sectionEl});

onMounted(() => {
  if(isXS.value) return;

  const tl = gsap.timeline();

  tl.from(containerEl.value.children, {
      yPercent: 50,
      autoAlpha: 0.0,
      duration: 1.5,
      stagger: 0.1,
      ease: "expo.inOut",
  });

});
</script>

<style scoped>
.item__ceil {
    border-radius: 10px;
    box-shadow: inset 0px 4px 3px 0px #403162d2, 0px 2px 2px -1px #403162d2;
    @apply bg-[#1c152e] bg-gradient-header-secondary px-[3%] relative overflow-hidden;
}

.item__title {
    @apply font-rfdewi font-bold !leading-tight text-[30px] gradient-tokemomic-text max-2xl:text-[24px] max-md:text-sm
}
.item__percent {
    @apply font-rfdewi font-black !leading-tight text-[60px] uppercase gradient-tokemomic-text max-2xl:text-[40px] max-md:text-xl
}
.up-radial-gradient::before {
    content: '';
    position: absolute;
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(52.76% 26.95% at 50.92% -1.64%, rgba(138, 110, 199, 0.50) 0%, transparent 100%), transparent;
}
</style>
