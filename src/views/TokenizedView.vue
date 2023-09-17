<script setup lang="ts">
import monitorImgLarge from '@/assets/monitor-large.png';
import monitorImgLargeWebp from '@/assets/monitor-large.webp';
import IconAlphaCalls from '@/components/icons/IconAlphaCalls.vue';
import IconAlphaContent from '@/components/icons/IconAlphaContent.vue';
import IconChannelGrowth from '@/components/icons/IconChannelGrowth.vue';
import IconGiveaways from '@/components/icons/IconGiveaways.vue';
import IconTheContent from '@/components/icons/IconTheContent.vue';
import IconTokengated from '@/components/icons/IconTokengated.vue';
import {onMounted, ref} from 'vue'
import gsap from 'gsap';
import useMouseWheel from '@/composables/mouseWheel';

const sectionEl = ref()
const monitorEl = ref()
const contentEl = ref()

const {onWheel} = useMouseWheel({toDownRoute: "data", toUpRoute: "stakes", target: sectionEl});

onMounted(() => {
    const tl = gsap.timeline();

    tl.from(monitorEl.value, {
        autoAlpha: 0.0,
        duration: 1.5,
        yPercent: 100,
        ease: "expo.inOut",
    });
    tl.from(
      contentEl.value.children,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            xPercent: -100,
            ease: "expo.inOut",
            stagger: 0.2,
        },
        "0",
    );
});
</script>

<template>
     <section ref="sectionEl" @wheel="onWheel" class=' h-full flex items-end justify-center '>
      <div class="flex justify-center px-4 gap-9 max-sm:flex-col w-full h-full">
        <div ref="contentEl" data="contentEl" class=' flex flex-col items-start justify-center max-sm:items-center max-sm:mt-auto'>
          <span class="text-[#0061F0] text-2xl font-medium font-gilroy py-1 px-2 max-sm:text-sm bg-[#001D48] border border-[#1017B9] max-sm:mx-auto max-sm:table ">
            Stake’s Utility
          </span>
          <h2 class="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] leading-none font-black uppercase font-rfdewi max-sm:text-2xl mt-6 max-sm:text-center">
            Nimbl Channels <br/>Tokenized
          </h2>
          <div >
            <div class='mt-28 max-2xl:mt-10 max-sm:mt-8 flex gap-11 max-sm:gap-5 max-sm:justify-between'>
              <div>
                  <div class="flex items-center gap-5  max-sm:gap-1 ">
                    <IconGiveaways class="max-sm:w-[20px] max-sm:h-[20px]" />
                    <p class="text-3xl max-2xl:text-2xl leading-none text-white font-gilroy max-sm:text-sm">Giveaways</p>
                  </div>
                  <div class="flex items-center gap-5 mt-7 max-sm:mt-4  max-sm:gap-1 ">
                    <IconAlphaContent class="max-sm:w-[23px] max-sm:h-[23px]" />
                    <p class="text-3xl max-2xl:text-2xl leading-none text-white font-gilroy max-sm:text-sm">Alpha Content</p>
                  </div>
                  <div class="flex items-center gap-5 mt-7 max-sm:mt-4  max-sm:gap-1 ">
                    <IconChannelGrowth class="max-sm:w-[23px] max-sm:h-[23px]" />
                    <p class="text-3xl max-2xl:text-2xl leading-none text-white font-gilroy max-sm:text-sm">Channel Growth</p>
                  </div>
              </div>
             <div>
                  <div class="flex items-center gap-5   max-sm:gap-1 ">
                    <IconTokengated class="max-sm:w-[25px] max-sm:h-[25px] " />
                    <p class="text-3xl max-2xl:text-2xl leading-none text-white font-gilroy max-sm:text-sm">Tokengated Communities</p>
                  </div>
                  <div class="flex items-center gap-5 mt-7 max-sm:mt-4  max-sm:gap-1 ">
                    <IconAlphaCalls class="max-sm:w-[23px] max-sm:h-[23px]" />
                    <p class="text-3xl max-2xl:text-2xl leading-none text-white font-gilroy max-sm:text-sm">Alpha Calls/Private content</p>
                  </div>
                  <div class="flex items-center gap-5 mt-7 max-sm:mt-4  max-sm:gap-1 ">
                    <IconTheContent class="max-sm:w-[25px] max-sm:h-[25px]" />
                    <p class="text-3xl max-2xl:text-2xl leading-none text-white font-gilroy max-sm:text-sm">The Content</p>
                  </div>
             </div>
            </div>
          </div>
        </div>
        <div ref="monitorEl" data="monitorEl" class="flex items-end max-sm:justify-center max-sm:mt-auto">
          <picture><source :srcset="monitorImgLargeWebp" type="image/webp" /><img :src="monitorImgLarge" alt="monitorImgLarge" class='h-[85vh] object-bottom object-contain max-sm:h-[300px]' /></picture>
        </div>
      </div>
    </section>
</template>


<style scoped>

</style>