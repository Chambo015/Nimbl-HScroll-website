<script setup lang="ts">
import { leaveHooks} from '@/leaveHooks'
import { useMediaQuery } from '@vueuse/core';
import type { PropType} from 'vue'
import  { computed} from 'vue'

const props = defineProps({
  prevPageName: Object as PropType<any>
})

const isXS = useMediaQuery("(max-width: 640px)");

const onLeaveHook = computed(() => {
    if(isXS.value) return undefined
   return leaveHooks[(props.prevPageName.previousPage as string)]
})
</script>

<template>
    <Transition @leave="onLeaveHook" :name="isXS ?'slide':'fade'" :mode="isXS ? 'in-out':'in-out'">
        <slot />
    </Transition>
</template>

<style scoped>
:global(.fade-enter-active) {
    transition: all 0s ease-out;
    position: absolute !important;
} 
:global(.fade-leave-active ){
    transition: all 0s ease-out;
    position: absolute !important;
} 

:global(.slide-enter-active) {
  transition: all .25s ease-out;
}
:global(.slide-leave-active) {
  transition: all .25s ease-out;
}

:global(.slide-enter-from) {
  opacity: 0;
  transform: translateY(30px);
}

:global(.slide-leave-to) {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
