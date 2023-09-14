<script setup lang="ts">
import { leaveHooks} from '@/leaveHooks'
import type { PropType} from 'vue'
import  { computed} from 'vue'

const props = defineProps({
  prevPageName: Object as PropType<any>
})

const onLeaveHook = computed(() => {
   return leaveHooks[(props.prevPageName.previousPage as string)]
})
</script>

<template>
    <Transition @leave="onLeaveHook" name="slide" mode="in-out">
        <slot />
    </Transition>
</template>

<style scoped>
:global(.slide-enter-active) {
    transition: all 0s ease-out;
    position: absolute !important;
} 
:global(.slide-leave-active ){
    transition: all 0s ease-out;
    position: absolute !important;
} 

</style>
