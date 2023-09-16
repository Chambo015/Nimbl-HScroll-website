<script setup lang="ts">
import {ref} from 'vue'
import BottomJoystick from './BottomJoystick.vue';
import CenterJoystick from './CenterJoystick.vue';
import RightJoystick from './RightJoystick.vue';
import LeftJoystick from './LeftJoystick.vue';
import TopJoystick from './TopJoystick.vue';

const isOpenMenu = ref(false)
const toggleOpenMenu = () => {
    isOpenMenu.value = !isOpenMenu.value
}

</script>


<template>
    <div @mouseleave="isOpenMenu = false" class="absolute right-[150px] bottom-[160px] opacity-50 hover:opacity-100 transition-opacity">
        <button @click="toggleOpenMenu" class="w-[145px] h-[81px] relative z-50">
            <CenterJoystick />
        </button>
        <button class="absolute top-[81px] left-0 w-[144px] h-[127px] transition-all" :class="[isOpenMenu ? ' opacity-50 translate-y-0 hover:opacity-100' : 'opacity-0 -translate-y-1/2']">
            <BottomJoystick />
        </button>
        <button class="absolute bottom-full left-0 w-[144px] h-[127px] transition-all" :class="[isOpenMenu ? ' opacity-50 translate-y-0 hover:opacity-100' : 'opacity-0 translate-y-1/2']">
            <TopJoystick />
        </button>
        <button class="absolute top-1/2 -translate-y-[calc(50%+3px)] left-[120px] w-[144px] h-[146px] transition-all"  :class="[isOpenMenu ? ' opacity-50 translate-x-0 hover:opacity-100' : 'opacity-0 -translate-x-1/2']">
            <RightJoystick />
        </button>
        <button class="absolute top-1/2 -translate-y-[calc(50%+3px)] right-[120px] w-[144px] h-[146px] transition-all" :class="[isOpenMenu ? ' opacity-50 translate-x-0 hover:opacity-100' : 'opacity-0 translate-x-1/2']">
            <LeftJoystick />
        </button>
    </div>
</template>



<style scoped>

</style>