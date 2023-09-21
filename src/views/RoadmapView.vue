<template>
    <section ref="sectionEl" @wheel="onWheel" class="h-full flex items-center py-[50px] max-sm:py-1 max-sm:items-center">
      <div class="container 2xl:max-w-[1600px] relative ">
        <h2 class="bg-gradient-to-b from-white to-white/50 text-transparent hidden max-sm:block bg-clip-text font-rfdewi font-black uppercase text-2xl text-center">
          ROADMAP
        </h2>
        <div ref="topListEl" data="topListEl" class="flex justify-between gap-8 max-sm:flex-col max-sm:w-full max-sm:mt-5 relative max-sm:gap-3 ">
          <div>
            <p class="bg-gradient-to-b from-[#9B6AFF] to-[#6529E0] text-transparent bg-clip-text font-rfdewi text-2xl uppercase font-black max-sm:text-sm">
              phase 1
            </p>
            <ul class="font-gilroy text-2xl text-white mt-4 max-sm:text-sm max-2xl:text-xl max-sm:mt-1">
              <li>- Assembling the team</li>
              <li class="max-sm:hidden">- Team role assignment</li>
              <li class="max-sm:hidden">- Set up sprints and systems for building</li>
              <li class="max-sm:inline-block hidden">- Systems building</li>
            </ul>
          </div>
          <div>
            <p class="bg-gradient-to-b from-[#9B6AFF] to-[#6529E0] text-transparent bg-clip-text font-rfdewi text-2xl uppercase font-black max-sm:text-sm">
              phase 2
            </p>
            <ul class="font-gilroy text-2xl text-white mt-4 max-sm:text-sm max-2xl:text-xl max-sm:mt-1">
              <li>- Web demo release</li>
              <li class="max-sm:hidden">- Building Software Architecture</li>
              <li class="max-sm:hidden">- Initiate Mobile App development</li>
              <li class="max-sm:inline-block hidden">- Mobile App</li>
            </ul>
          </div>
          <div>
            <p class="bg-gradient-to-b from-[#9B6AFF] to-[#6529E0] text-transparent bg-clip-text font-rfdewi text-2xl uppercase font-black max-sm:text-sm">
              phase 3
            </p>
            <ul class="font-gilroy text-2xl text-white mt-4 max-sm:text-sm max-2xl:text-xl max-sm:mt-1">
              <li>- App V1 Prototype closed testing</li>
              <li>- Finalize Nimbl Genesis UI</li>
              <li class="max-sm:hidden">- AppWorks Acceleration program</li>
              <li class="max-sm:hidden">- Integrate AI into Nimbl</li>
            </ul>
          </div>
        </div>
         <picture>
         <source :srcset="rocketWebp" type="image/webp" />
           <img
           ref="rocketImgEl"   data="rocketImgEl"
            :src="rocket"
            alt="rocket"
            class="mix-blend-screen w-[1000px] max-2xl:w-[687px] max-2xl:h-[237px] object-contain mx-auto max-sm:absolute max-sm:-rotate-90 max-sm:top-[150px]  max-sm:-right-[100px] max-sm:w-[350px] max-sm:block"
          /> 
         </picture>
        <div ref="bottomListEl" data="bottomListEl" class="flex justify-between gap-8 max-sm:flex-col max-sm:w-full max-sm:mt-3 max-sm:gap-3 ">
          <div>
            <p class="bg-gradient-to-b from-[#9B6AFF] to-[#6529E0] text-transparent bg-clip-text font-rfdewi text-2xl uppercase font-black max-sm:text-sm">
              phase 4
            </p>
            <ul class="font-gilroy text-2xl text-white mt-4 max-sm:text-sm max-2xl:text-xl max-sm:mt-1">
              <li class="max-sm:inline-block hidden">- Token Fair launch</li>
              <li class="max-sm:hidden">- Assembling the team</li>
              <li class="max-sm:hidden">- Nimbl Genesis Open Alpha</li>
              <li class="max-sm:hidden">- Bounty Program</li>
              <li>- Partnerships</li>
            </ul>
          </div>
          <div>
            <p class="bg-gradient-to-b from-[#9B6AFF] to-[#6529E0] text-transparent bg-clip-text font-rfdewi text-2xl uppercase font-black max-sm:text-sm">
              phase 5
            </p>
            <ul class="font-gilroy text-2xl max-2xl:text-xl text-white mt-4 max-sm:text-sm max-sm:mt-1">
              <li>- Bounty Campaign Snapshot</li>
              <li class="max-sm:hidden">- V2 release</li>
              <li class="max-sm:hidden">- Nimbl AR development</li>
              <li>- Activate Gamification</li>
            </ul>
          </div>
          <div>
            <p class="bg-gradient-to-b from-[#9B6AFF] to-[#6529E0] text-transparent bg-clip-text font-rfdewi text-2xl uppercase font-black max-sm:text-sm">
              phase 6
            </p>
            <ul class="font-gilroy text-2xl text-white mt-4 max-sm:text-sm max-2xl:text-xl max-sm:mt-1">
              <li class="max-sm:hidden">- List on tier 1/2 CEX</li>
              <li class="max-sm:hidden">- User Data Decentralization</li>
              <li class="max-sm:hidden">- In-chat Crypto transfers</li>
              <li class="max-sm:hidden">- Live-streaming</li>
              <li>- Enable social trading features</li>
              <li class="max-sm:inline-block hidden">- Open Creator’s fund </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import rocket from '@/assets/NIMBL-rocket.png';
import rocketWebp from '@/assets/NIMBL-rocket.webp';
import gsap from "gsap";
import useMouseWheel from "@/composables/mouseWheel";
import { onMounted, ref } from 'vue';
import { useMediaQuery } from '@vueuse/core';

const isXS = useMediaQuery("(max-width: 640px)");

const sectionEl = ref();
const topListEl = ref();
const bottomListEl = ref();
const rocketImgEl = ref();

const {onWheel} = useMouseWheel({ toUpRoute: "token", target: sectionEl});

onMounted(() => {
  if(isXS.value) return
    const tl = gsap.timeline();
    
    tl.from(topListEl.value.children, {
        yPercent: -100,
        autoAlpha: 0.0,
        duration: 1.5,
        stagger: 0.2,
        ease: "expo.inOut",
    });
    tl.from(
      bottomListEl.value.children,
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
      rocketImgEl.value,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            xPercent: -150,
            ease: "expo.inOut",
        },
        "0",
    );
   
    
});
</script>

<style scoped>

</style>