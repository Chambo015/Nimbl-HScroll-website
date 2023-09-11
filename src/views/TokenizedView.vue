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
import { onBeforeRouteLeave, useRoute } from 'vue-router';

const route = useRoute();

const monitorEl = ref()
const contentEl = ref()
const dotsChartEl = ref()

onMounted(() => {
    const tl = gsap.timeline();

    tl.from(monitorEl.value, {
        autoAlpha: 0.0,
        duration: 1.5,
        yPercent: 100,
        ease: "expo.inOut",
        delay: route.meta.firstPage ? 2 : 0,
    });
    tl.from(
      contentEl.value.children,
        {
            autoAlpha: 0.0,
            duration: 1.5,
            xPercent: -100,
            ease: "expo.inOut",
            stagger: 0.2,
            delay: route.meta.firstPage ? 2 : 0,
        },
        "0",
    );
});

onBeforeRouteLeave((__, _, next) => {
  const tl = gsap.timeline({onComplete: next});

  tl.to(monitorEl.value, {
        autoAlpha: 0.0,
        duration: 1,
        yPercent: 100,
        ease: "expo.inOut",
    });
    tl.to(
      contentEl.value,
        {
            autoAlpha: 0.0,
            duration: 1,
            xPercent: -100,
            ease: "expo.inOut",
        },
        "0",
    );
})
</script>

<template>
     <section  class='pt-[200px] max-sm:pt-[50px] h-full flex items-end justify-center'>
      <div class="flex justify-center px-4 gap-9 max-sm:flex-col">
        <div ref="contentEl" class=' flex flex-col items-start justify-center max-sm:items-center'>
          <span class="text-[#0061F0] text-2xl font-medium font-gilroy py-1 px-2 max-sm:text-sm bg-[#001D48] border border-[#1017B9] max-sm:mx-auto max-sm:table ">
            Stake’s Utility
          </span>
          <h2 class="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[50px] leading-none font-black uppercase font-rfdewi max-sm:text-2xl mt-6 max-sm:text-center">
            Nimbl Channels <br/>Tokenized
          </h2>
          <div >
            <div class='mt-28 max-sm:mt-8 flex gap-11'>
              <div>
                  <div class="flex items-center gap-5">
                    <IconGiveaways />
                    <p class="text-3xl leading-none text-white font-gilroy max-sm:text-base">Giveaways</p>
                  </div>
                  <div class="flex items-center gap-5 mt-7 max-sm:mt-4">
                    <IconAlphaContent />
                    <p class="text-3xl leading-none text-white font-gilroy max-sm:text-base">Alpha Content</p>
                  </div>
                  <div class="flex items-center gap-5 mt-7 max-sm:mt-4">
                    <IconChannelGrowth />
                    <p class="text-3xl leading-none text-white font-gilroy max-sm:text-base">Channel Growth</p>
                  </div>
              </div>
             <div>
                  <div class="flex items-center gap-5 ">
                    <IconTokengated />
                    <p class="text-3xl leading-none text-white font-gilroy max-sm:text-base">Tokengated Communities</p>
                  </div>
                  <div class="flex items-center gap-5 mt-7 max-sm:mt-4">
                    <IconAlphaCalls />
                    <p class="text-3xl leading-none text-white font-gilroy max-sm:text-base">Alpha Calls/Private content</p>
                  </div>
                  <div class="flex items-center gap-5 mt-7 max-sm:mt-4">
                    <IconTheContent />
                    <p class="text-3xl leading-none text-white font-gilroy max-sm:text-base">The Content</p>
                  </div>
             </div>
            </div>
          </div>
        </div>
        <div ref="monitorEl">
          <picture><source :srcset="monitorImgLargeWebp" type="image/webp" /><img :src="monitorImgLarge" alt="monitorImgLarge" class='h-[85vh] object-bottom object-contain' /></picture>
        </div>
      </div>
    </section>
</template>


<style scoped>

</style>