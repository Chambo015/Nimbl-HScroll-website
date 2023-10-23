<template>
  <div class="h-full w-full overflow-y-auto pr-5 max-md:px-3">
    <div class="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:gap-5">
      <CardTask />
      <CardTask />
      <CardTask />
      <CardTask />
      <CardTask />
      <CardTask />
      <CardTask />
      <CardTask />
      <CardTask />
      <CardTask />
      <CardTask />
      <CardTask />
      <CardTask />
      <CardTask />
      <CardTask />
      <CardTask />
      <CardTask />
      <CardTask />
      <CardTask />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardTask from './CardTask.vue';


</script>

<style scoped>
::-webkit-scrollbar {
    width: 3px;
}
/* Track */
::-webkit-scrollbar-track {
    background: transparent;
}
/* Handle */
::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #60e2ff 0%, #8c98ff 50%, #cc61ff 100%);
}
</style>