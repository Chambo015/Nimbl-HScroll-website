
<script setup lang="ts">
import {HeroButton} from '../HeroButton';
import lightImg from '@/assets/light.png';
import lightImgWebp from '@/assets/light.webp';
</script>

<template>
  <section class="mt-20 max-sm:mt-[50px] relative">
      <picture>
      <source :srcset="lightImgWebp" type="image/webp" />
        <img
          :src="lightImg"
          alt="lightImg"
          loading="lazy"
          class="absolute top-0 left-1/2 -translate-x-1/2 z-40 select-none pointer-events-none"
        />
      </picture>
      <div class="container justify-center flex pt-[50px] max-sm:pt-[40px]">
        <div  class="inline-flex flex-col">
          <p  class="text-justify font-gilroy leading-none after:inline-block after:w-full text-white text-2xl max-sm:text-xs font-normal uppercase tracking-[.6em] max-sm:tracking-[.3em]">
            Flagship Social Media Platform
          </p>
          <h1 class='main-title'>
            NIMBL.TV
            <h1 class='main-text-layer'>NIMBL.TV</h1>
          </h1>
        </div>
      </div>
      <div >
       <!--  <SliderAppMobile /> -->
      </div>
      <div  class="flex justify-center mt-11 gap-8 max-sm:flex-col items-center">
        <HeroButton class="max-sm:!w-[85%]">
          <p class="font-rfdewi text-xl max-sm:text-sm font-bold">APPLY FOR CLOSED BETA</p>
        </HeroButton>
        <HeroButton regular class="max-sm:!w-[85%]">
          <p class="font-rfdewi text-xl max-sm:text-sm font-bold uppercase">Launch Desktop Demo App</p>
        </HeroButton>
      </div>
    </section>
</template>


<style scoped>
.fulljustify {
  text-align: justify;
}
.fulljustify:after {
  content: '';
  display: inline-block;
  width: 100%;
}
#tagline {
  height: 80px;
  overflow: hidden;
  line-height: 80px; /* vert-center */
}

.main-title {
  background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.30) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  @apply text-center font-rfdewi inline-block bg-clip-text text-white text-[145px] max-sm:text-[50px] leading-none font-black uppercase -translate-x-2 -translate-y-7 max-sm:-translate-x-0 max-sm:-translate-y-6
}
.main-text-layer {
  background-image: url('../../assets/image1895.png');
  background-size:  contain;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  mix-blend-mode: overlay;
  z-index: 1;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
}
</style>