<template>
  <div class="octagon_mask w-[50px] h-[50px] md:w-[35px] md:h-[35px] relative isolate overflow-hidden flex justify-center items-center bg-[#372E50] shrink-0">
        <img
            v-if="url"
            :src="url"
            alt="users"
            class="w-full h-full pointer-events-none select-none object-cover " />
        <IconAccountCircle v-else class="text-[#554778] text-[35px] md:text-[25px]" />
      
  </div>
</template>

<script setup lang="ts">
import IconAccountCircle from "@/components/icons/IconAccountCircle.vue";
defineProps({
  url: String
})
</script>

<style scoped>
.octagon_mask {
  --v: 30%;
  --rV: calc(100% - var(--v));
  clip-path: polygon(
      0% var(--v),
      var(--v) 0%,
      var(--rV) 0%,
      100% var(--v),
      100% var(--rV),
      var(--rV) 100%,
      var(--v) 100%,
      0% var(--rV)
  );
}
</style>
