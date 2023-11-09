<template>
    <main ref="contentEl" class="w-full h-full flex items-center justify-center pt-5 pl-5 pb-[35px] gap-5">
        <div class="button__wrap">
            <button type="button" class="button__claim">
                <p class="button__text">COMING SOON</p>
            </button>
        </div>
    </main>
</template>

<script setup lang="ts">
import {useMediaQuery} from "@vueuse/core";
import {onMounted, ref} from "vue";
import gsap from "gsap";
const isXS = useMediaQuery("(max-width: 700px)");
const contentEl = ref();

onMounted(() => {
    if (isXS.value) return;
    const tl = gsap.timeline();

    tl.from(contentEl.value, {
        autoAlpha: 0.0,
        duration: 1.5,
        ease: "expo.inOut",
    });
});
</script>

<style scoped>
@property --radius-shadow {
    syntax: "<length>";
    inherits: false;
    initial-value: 5px;
}
@property --color-shadow {
    syntax: "<color>";
    inherits: false;
    initial-value: #331472;
}
.button__wrap {
  filter: drop-shadow(-2px 1px var(--radius-shadow) var(--color-shadow));
  animation: animation-shadow 2s alternate infinite;
}
.button__claim {
    --r: min(3vw, 3vh);
    clip-path: polygon(0% var(--r), var(--r) 0%, calc(100% - var(--r)) 0%, 100% var(--r), 100% calc(100% - var(--r)), calc(100% - var(--r)) 100%, var(--r) 100%, 0% calc(100% - var(--r)));
    background-image: linear-gradient(180deg, #b0731a -9.01%, #d0a530 22.91%, #f2d14e 63.49%);
    @apply opacity-80  flex-shrink-0 flex items-center justify-center px-10 py-5 cursor-pointer active:scale-90 transition-transform will-change-transform;
}
.button__text {
    @apply font-rfdewi font-black text-black text-[min(6vw,_6vh)] text-center  px-1
}

@keyframes animation-shadow {
    0% {
      --radius-shadow: 10px;
      --color-shadow: #331472;
    }
    100% {
      --radius-shadow: 50px;
      --color-shadow: #d0a530;
    }
}
</style>
