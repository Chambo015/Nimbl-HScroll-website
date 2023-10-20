<script setup lang="ts">
import { leaveHooks } from '@/leaveHooks'
import { useMediaQuery } from '@vueuse/core';
import type { PropType} from 'vue'
import  { computed} from 'vue'

const props = defineProps({
  toMeta: Object as PropType<any>
})

const isXS = useMediaQuery("(max-width: 640px)");

const onLeaveHook = computed(() => {
    if(isXS.value) return undefined
   return leaveHooks[(props.toMeta.previousPage as string)]
})
</script>

<template>
    <Transition @leave="onLeaveHook" :name="isXS ? toMeta.transition :'fade'" :mode="isXS ? 'out-in':'in-out'">
        <slot />
    </Transition>
</template>

<style scoped>
:global(.fade-enter-active) {
    position: absolute !important;
} 
:global(.fade-leave-active ){
    position: absolute !important;
} 

:global(.slide-up-enter-active) {
  transition: all .3s ease-out;
}
:global(.slide-up-leave-active) {
  transition: all .3s ease-out;
}
:global(.slide-down-leave-active) {
  transition: all .3s ease-out;
 position: absolute;
}

:global(.slide-down-enter-active){
  transition: all .3s ease-out;
 position: absolute;
}


:global(.slide-up-enter-from) {
  opacity: 0;
  transform: translateY(300px);
}

:global(.slide-up-leave-to) {
  opacity: 0;
  transform: translateY(-300px);
}

:global(.slide-down-enter-from) {
  opacity: 0;
  transform: translateY(-300px);
}

:global(.slide-down-leave-to) {
  opacity: 0;
  transform: translateY(300px);
}
</style>
