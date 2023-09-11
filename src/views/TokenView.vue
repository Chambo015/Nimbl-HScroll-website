<script setup lang="ts">
import imgEarth from '@/assets/planet-nimbl.png';
import imgEarthSm from '@/assets/planet-nimbl-sm.png';
import imgEarthWebp from '@/assets/planet-nimbl.webp';
import imgEarthSmWebp from '@/assets/planet-nimbl-sm.webp';
import stake from '@/assets/stake.png';
import transfer from '@/assets/transfer.png';
import cursor from '@/assets/cursor.png';
import network from '@/assets/network.png';
import pc from '@/assets/pc.png';
import starShips from '@/assets/star-ships.png';
</script>

<template>
    <section class="pt-[200px]">
      <h2 class="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-[88px] leading-none font-rfdewi font-black text-center max-sm:text-3xl">
        NIMBL TOKEN
      </h2>
      <p class="text-center text-white font-gilroy text-3xl mt-3 max-sm:text-base">
        $NIMBL is a utility token that acts as the platform currency
      </p>
      <div class="flex h-[1000px] relative max-sm:h-auto max-sm:flex-col">
       <picture class="pointer-events-none"><source :srcset="imgEarthWebp" type="image/webp" /><img :src="imgEarth" alt="imgEarth" class="ml-auto absolute right-0 -top-[100px] max-sm:hidden" /></picture>
        <img :src="starShips" alt="starShips" class='w-[380px] absolute left-1/2 top-[30%] -translate-x-1/2 max-sm:hidden pointer-events-none' />
        <div class='container 2xl:max-w-[1600px] mx-auto'>
            <div class='mt-28 max-sm:mt-8'>
              <div class="flex items-center gap-5">
                <img :src="stake" alt="stake" class='w-[30px] h-[30px]' />
                <p class="text-3xl leading-none text-white font-gilroy max-sm:text-base">Stake $Nimbl to gain governance</p>
              </div>
              <div class="flex items-center gap-5 mt-20 max-sm:mt-4">
                <img :src="transfer" alt="transfer" class='w-[30px] h-[30px]'/>
                <p class="text-3xl leading-none text-white font-gilroy max-sm:text-base">Transfer $Nimbl to a username</p>
              </div>
              <div class="flex items-center gap-5 mt-20 max-sm:mt-4">
                <img :src="cursor" alt="cursor" class='w-[30px] h-[30px]'/>
                <p class="text-3xl leading-none text-white font-gilroy max-sm:text-base">Access token-gated content</p>
              </div>
              <div class="flex items-center gap-5 mt-20 max-sm:mt-4">
                <img :src="network" alt="network" class='w-[30px] h-[30px]'/>
                <p class="text-3xl leading-none text-white font-gilroy max-sm:text-base">Use $Nimbl to Tip creators</p>
              </div>
              <div class="flex items-center gap-5 mt-20 max-sm:mt-4">
                <img :src="pc" alt="pc" class='w-[30px] h-[30px]'/>
                <p class="text-3xl leading-none text-white font-gilroy max-sm:text-base">Subscribe to Nimbl Ultra</p>
              </div>
            </div>
        </div>
        <div class='hidden max-sm:block'>
         <picture class="pointer-events-none"><source :srcset="imgEarthSmWebp" type="image/webp" /><img :src="imgEarthSm" alt="imgEarthSm" class='w-full' /></picture>
        </div>
      </div>
    </section>
</template>


<style scoped>

</style>