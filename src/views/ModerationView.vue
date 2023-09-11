<template>
   <section  class="py-[50px] h-full">
      <div class="container relative flex flex-col justify-between h-full">
        
       <div >
          <h2 class="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-center mt-7 text-5xl font-rfdewi font-black uppercase max-sm:text-2xl max-sm:mt-2">
            Redefining Moderation with Transparent AI
          </h2>
          <p class="font-gilroy mt-6 text-center text-white text-2xl font-normal max-sm:text-base">
            Embrace a new era of community governance with our AI-powered moderation system.
          </p>
          <div class="flex justify-between mt-16 max-sm:flex-col max-sm:items-center max-sm:gap-7">
            <div class="w-[280px] flex flex-col  items-center gap-4">
              <IconBlock />
              <p class=" text-center text-white text-2xl font-normal font-gilroy max-sm:text-base ">
                Decisions are guided by clear, open-source guidelines
              </p>
            </div>
            <div class="w-[315px] flex flex-col items-center gap-4">
              <IconSearch />
              <p class=" text-center text-white text-2xl font-normal font-gilroy max-sm:text-base">
                Every instance is committed on-chain, with explanation and post links
              </p>
            </div>
            <div class="w-[250px] flex flex-col items-center gap-4">
              <IconUserSearch />
              <p class=" text-center text-white text-2xl font-normal font-gilroy max-sm:text-base">
                Moderation Guidelines developed by Nimbl Collective DAO
              </p>
            </div>
          </div>
       </div>
       <div>
           <div  class="relative overflow-hidden rounded-tl-[1000px] rounded-tr-[1000px] mt-9">
              <picture >
                <source :srcset="radarImgWebp" type="image/webp" />
                <img  :src="radarImg" alt="radarImg" class="w-full object-contain mix-blend-lighten" />
              </picture>
              <div></div>
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
            <picture>
              <source :srcset="radarIconWebp" type="image/webp" />
              <img
                :src="radarIcon"
                alt="radarIcon"
                class="w-[112px] h-[112px] max-sm:w-[54px] max-sm:h-[54px] max-sm:-mt-[30px] mx-auto -mt-[56px] z-10 relative"
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