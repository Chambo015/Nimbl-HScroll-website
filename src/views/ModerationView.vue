<template>
   <section @wheel="onWheel" class="py-[20px] h-full">
      <div class="px-10 relative flex flex-col justify-center h-full">
       <div>
          <div ref="titleEl" data="titleEl">
            <h2 class="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-center mt-7 text-5xl max-2xl:text-4xl font-rfdewi font-black uppercase max-sm:text-2xl max-sm:mt-2">
              Redefining Moderation with Transparent AI
            </h2>
            <!-- <p class="font-gilroy mt-6 text-center text-white text-2xl font-normal max-sm:text-base">
              Embrace a new era of community governance with our AI-powered moderation system.
            </p> -->
          </div>
          <div ref="colsEl" data="colsEl" class="container flex justify-between mt-10 max-sm:flex-col max-sm:items-center max-sm:gap-7">
            <div class=" flex flex-col  items-center gap-4">
              <IconBlock class="max-2xl:w-[45px] max-2xl:h-[45px]" />
              <p class=" text-center text-white text-2xl max-2xl:text-lg font-normal font-gilroy max-sm:text-base ">
                Decisions are guided by clear, open-source guidelines
              </p>
            </div>
            <div class=" flex flex-col items-center gap-4">
              <IconSearch class="max-2xl:w-[45px] max-2xl:h-[45px]" />
              <p class=" text-center text-white text-2xl max-2xl:text-lg font-normal font-gilroy max-sm:text-base">
                Every instance is committed on-chain, with explanation and post links
              </p>
            </div>
            <div class=" flex flex-col items-center gap-4">
              <IconUserSearch class="max-2xl:w-[45px] max-2xl:h-[45px]" />
              <p class=" text-center text-white text-2xl max-2xl:text-lg font-normal font-gilroy max-sm:text-base">
                Moderation Guidelines developed by Nimbl Collective DAO
              </p>
            </div>
          </div>
       </div>
       <div ref="radarEl" data="radarEl" class="max-3xl:max-w-[1000px] max-2xl:w-[800px] container mx-auto mix-blend-lighten mt-5 h-[500px]">
           <div class="relative overflow-hidden rounded-tl-[1000px] rounded-tr-[1000px] ">
              <picture >
                <source :srcset="radarImgWebp" type="image/webp" />
                <img   :src="radarImg" alt="radarImg" class="w-full object-contain mix-blend-lighten" />
              </picture>
              <div >
                <div class="scanner"></div>
                <ul class="scanner_points">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <picture>
              <source :srcset="radarIconWebp" type="image/webp" />
              <img
                :src="radarIcon"
                alt="radarIcon"
                class="w-[112px] h-[112px]  max-2xl:w-[54px] max-2xl:h-[54px] max-2xl:-mt-[30px] mx-auto -mt-[56px] z-10 relative"
              />
            </picture>
       </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import radarImg from '@/assets/bg-radar.png';
import radarImgWebp from '@/assets/bg-radar.webp';
import radarIcon from '@/assets/radar-icon.png';
import radarIconWebp from '@/assets/radar-icon.webp';
import IconBlock from '@/components/icons/IconBlock.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconUserSearch from '@/components/icons/IconUserSearch.vue';
import gsap from "gsap";
import useMouseWheel from "@/composables/mouseWheel";
import { onMounted, ref } from 'vue';

const {onWheel} = useMouseWheel({toDownRoute: "swipe", toUpRoute: "data"});

const radarEl = ref();
const colsEl = ref();
const titleEl = ref();

onMounted(() => {
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

/* onBeforeRouteLeave((__, _, next) => {
    const tl = gsap.timeline({onComplete: next});

    tl.to(
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
    tl.to(
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
    tl.to(
      radarEl.value,
        {
            autoAlpha: 0.0,
            duration: 1,
            ease: "expo.inOut",
        },
        "0"
    )
}); */
</script>

<style scoped lang="scss">
div.scanner {
  background-image: linear-gradient(to top right, rgb(99,42,227) 0%, transparent 50%);
  transform-origin: top left;
  position: absolute;
  top: 100%;
  left: 50%;
  width: 600px;
  height: 600px;
  border-left: 1px solid rgba(rgb(99,42,227), 0.1);
  will-change: transform;
  animation: scan 4s linear infinite;
}

@keyframes scan {
  from {
    transform: rotate(80deg);
  }
  to {
    transform: rotate(310deg);
  }
}

.scanner_points {
  list-style: none;
  li {
    animation: target 4s infinite linear;
    border-radius: 50%;
    box-shadow: 0 0 10px #7351C8;
    opacity: 0;
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    background: #50429e;
    
    &:nth-child(1) {
      animation-delay: 1500ms;
      top: 30%;
      left: 30%;
    }
    
    &:nth-child(2) {
      animation-delay: 2300ms;
      top: 15%;
      left: 60%;
    }
    
    &:nth-child(3) {
      animation-delay: 3250ms;
      top: 75%;
      left: 80%;
    }
    
    &:nth-child(4) {
      animation-delay: 1100ms;
      top: 60%;
      left: 20%;
    }
    
    &:nth-child(5) {
      animation-delay: 2000ms;
      top: 30%;
      left: 50%;
    }

    &:nth-child(6) {
      animation-delay: 500ms;
      top: 80%;
      left: 20%;
    }
  }
}

@keyframes target {
  1% {
    opacity: .5;
    transform:  scale(2.5) ;
    
  }
  3% {
    opacity: 1;
    transform:  scale(1.5) ;
  }
  60% {
    opacity: 0;
    transform:  scale(0.6) ;
    
  }
}
</style>