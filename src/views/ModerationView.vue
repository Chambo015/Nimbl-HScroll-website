<template>
   <section ref="sectionEl" @wheel="onWheel" class="py-[20px] h-full">
      <div class="px-10 relative flex flex-col justify-start max-sm:flex-col-reverse max-sm:justify-end">
       <div>
          <div ref="titleEl" data="titleEl">
            <h2 class="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-center mt-7 text-5xl max-2xl:text-4xl font-rfdewi font-black uppercase max-sm:text-2xl max-sm:mt-3">
              Redefining Moderation with Transparent AI
            </h2>
          </div>
          <div ref="colsEl" data="colsEl" class="container flex justify-between mt-10 max-sm:flex-col max-sm:items-center max-sm:gap-7 max-sm:mt-5">
            <div class=" flex flex-col  items-center gap-4 max-sm:gap-1">
              <IconBlock class="max-2xl:w-[45px] max-2xl:h-[45px] max-sm:w-[40px] max-sm:h-[40px]" />
              <p class=" text-center text-white text-2xl max-2xl:text-lg font-normal font-gilroy max-sm:text-sm ">
                Decisions are guided by clear, open-source guidelines
              </p>
            </div>
            <div class=" flex flex-col items-center gap-4 max-sm:gap-1">
              <IconSearch class="max-2xl:w-[45px] max-2xl:h-[45px] max-sm:w-[40px] max-sm:h-[40px]" />
              <p class=" text-center text-white text-2xl max-2xl:text-lg font-normal font-gilroy max-sm:text-sm">
                Every instance is committed on-chain, with explanation and post links
              </p>
            </div>
            <div class=" flex flex-col items-center gap-4 max-sm:gap-1">
              <IconUserSearch class="max-2xl:w-[45px] max-2xl:h-[45px] max-sm:w-[40px] max-sm:h-[40px]" />
              <p class=" text-center text-white text-2xl max-2xl:text-lg font-normal font-gilroy max-sm:text-sm">
                Moderation Guidelines developed by Nimbl Collective DAO
              </p>
            </div>
          </div>
       </div>
       <div ref="radarEl" data="radarEl" class="mix-blend-lighten max-2xl:h-[350px] h-[500px] max-sm:mt-0 mt-10 max-sm:mb-5 max-2xl:mt-5 max-sm:h-[160px]"><TheScanner  /></div>
      </div>
    </section>
</template>

<script setup lang="ts">
import IconBlock from '@/components/icons/IconBlock.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconUserSearch from '@/components/icons/IconUserSearch.vue';
import gsap from "gsap";
import useMouseWheel from "@/composables/mouseWheel";
import { onMounted, ref } from 'vue';
import { useMediaQuery } from '@vueuse/core';
import TheScanner from '@/components/TheScanner.vue';

const isXS = useMediaQuery("(max-width: 640px)");

const sectionEl = ref();
const radarEl = ref();
const colsEl = ref();
const titleEl = ref();

const {onWheel} = useMouseWheel({toDownRoute: "swipe", toUpRoute: "data", target: sectionEl});

onMounted(() => {
    if(isXS.value) return
    const tl = gsap.timeline();

    tl.from(
        colsEl.value.children,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            yPercent: 100,
            stagger: 0.2,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.from(
      titleEl.value.children,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            yPercent: -100,
            stagger: 0.2,
            ease: "expo.inOut",
        },
        "0",
    );
    tl.from(
      radarEl.value,
        {
            autoAlpha: 0.0,
            duration: 1,
            ease: "expo.inOut",
        }, "0"
    )
});
</script>

<style scoped >

</style>