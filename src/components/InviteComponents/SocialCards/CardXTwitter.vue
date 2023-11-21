<template>
    <div @click="linkTwitter"
        class="bg_card max-md:rounded-none max-md:!bg-[70%_100%] ring-1 ring-blue-500/50  font-Rollbox text-xl max-md:text-sm leading-tight max-2xl:text-lg max-w-[250px] min-h-[100px] max-md:min-h-[75px] p-3 font-bold rounded-md">
        <p class="uppercase relative z-10 text_arrow">x/twitter <br class="hidden max-md:inline" /></p>
        <IconTwitterBlue class="absolute right-3 bottom-2 max-md:w-[33px] max-md:h-[33px]" />
    </div>
</template>

<script setup lang="ts">
import IconTwitterBlue from "@/components/icons/IconTwitterBlue.vue";

const linkTwitter = () => {
  let link = "https://twitter.com/nimbltv";
window.open(link, "_blank");
}

</script>

<style scoped>
.bg_card {
  position: relative;
  cursor: pointer;
  background: linear-gradient(271deg, #0D0C11 2.43%, #46387A 97.57%);
  background-size: 200% 600%;
  transition: background-position .5s ease;
}
.bg_card:hover {
  background-position: 70% 100%
}
.text_arrow::after {
    content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='15' fill='none' viewBox='0 0 21 15'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='url(%23b)' d='M19.31 8.376c.51-.488.51-1.28 0-1.768L12.782.365a1.35 1.35 0 0 0-1.848 0c-.51.488-.51 1.28 0 1.768l4.304 4.112H2.722c-.722 0-1.305.558-1.305 1.249 0 .69.583 1.249 1.305 1.249h12.516l-4.3 4.112c-.51.488-.51 1.28 0 1.768a1.35 1.35 0 0 0 1.848 0l6.528-6.243-.005-.004Z'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='b' x1='19.692' x2='1.417' y1='7.494' y2='7.494' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23BCBCBC'/%3e%3cstop offset='1' stop-color='%23BCBCBC' stop-opacity='0'/%3e%3c/linearGradient%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h14.983v20.887H0z' transform='rotate(90 10.5 10.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    width: 15px;
    height: 20px;
    @apply ml-[10px] max-md:ml-0;
    transition: transform .5s ease;
  display: inline-block;

}
.bg_card:hover .text_arrow::after{
  transform: translateX(10px);
}

</style>
