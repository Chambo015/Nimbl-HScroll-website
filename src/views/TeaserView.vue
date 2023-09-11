<script setup lang="ts">
import handImg from "@/assets/hand.png";
import handImgWebp from "@/assets/hand.webp";
import HeroButton from "@/components/HeroButton.vue";
import IconFiveDots from '@/components/icons/IconFiveDots.vue';
</script>

<template>
    <section class="pt-40">
        <div class="container flex items-center max-sm:flex-col">
            <div class="shrink-0">
                <h2
                    class="bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text font-rfdewi font-black uppercase text-5xl max-sm:text-2xl max-sm:text-center">
                    clips<span class="text-2xl font-univers lowercase mx-1 max-sm:text-sm">to</span>Longs
                </h2>
                <p
                    class="w-[540px] font-gilroy text-2xl text-white mt-14 max-sm:text-base max-sm:w-full max-sm:text-center max-sm:mt-3">
                    Post a short-form teaser leading to a long-form video, get the outreach of bite-sized content into
                    your longer piece of content.
                </p>
                <div class="mt-14 max-sm:flex max-sm:justify-center">
                    <HeroButton class="w-[500px] h-[95px]">
                        <p class="font-rfdewi text-2xl max-sm:text-sm font-bold">DOWNLOAD APP</p><template #icon><IconFiveDots class="w-[37px] h-[37px]" /></template>
                    </HeroButton>
                </div>
            </div>
            <div class="shrink-0 max-sm:mt-5 relative">
                <picture>
                    <source :srcset="handImgWebp" type="image/webp" />
                    <img
                        loading="lazy"
                        :src="handImg"
                        alt="handImg"
                        class="w-[1045px] h-[833px] object-contain max-sm:max-w-[170%] max-sm:h-auto" />
                </picture>
                <div
                    class="absolute w-[32%] z-20 h-[85%] top-[7%] left-[12%] rounded-3xl overflow-hidden max-sm:w-[54%] max-sm:left-[20%]">
                    <video width="360" height="640" muted loop autoplay >
                        <source src="https://d2n3zca7e0phmo.cloudfront.net/lv_0_20230824191446.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
