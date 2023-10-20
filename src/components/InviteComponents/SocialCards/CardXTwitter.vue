<template>
  <div class="bg_card relative font-rfdewi text-xl leading-tight max-w-[250px] p-3 font-bold cursor-pointer rounded-md hover:rounded-none transition-all">
    <p class="uppercase relative z-10 text_arrow">x/twitter</p>
    <IconTwitterBlue class="absolute right-3 bottom-2" />
  </div>
</template>

<script setup lang="ts">
import IconTwitterBlue from '@/components/icons/IconTwitterBlue.vue';
</script>

<style scoped>
.bg_card {
  border: 1px solid #7351C8;
  background: linear-gradient(271deg, #0D0C11 2.43%, #46387A 97.57%);
}
.text_arrow::after {
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='15' fill='none' viewBox='0 0 21 15'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='%23BCBCBC' d='M19.326 8.376a1.22 1.22 0 0 0 0-1.767L12.856.366a1.33 1.33 0 0 0-1.83 0 1.22 1.22 0 0 0 0 1.767l4.265 4.113H2.886c-.715 0-1.294.558-1.294 1.248s.579 1.249 1.294 1.249h12.405l-4.262 4.112a1.22 1.22 0 0 0 0 1.768 1.33 1.33 0 0 0 1.832 0L19.33 8.38l-.004-.004Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h14.983v20.701H0z' transform='rotate(90 10.5 10.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  margin-left: 10px;
  width: 15px;
  height: 20px;
}
</style>