<script setup lang="ts">
import {ref} from 'vue'
import BottomJoystick from './BottomJoystick.vue';
import CenterJoystick from './CenterJoystick.vue';
import LeftJoystick from './LeftJoystick.vue';
import TopJoystick from './TopJoystick.vue';

defineEmits(['clickBottom'])

const isOpenMenu = ref(false)
const toggleOpenMenu = () => {
    isOpenMenu.value = !isOpenMenu.value
}

</script>


<template>
    <div @mouseleave="isOpenMenu = false" class="absolute right-[50px] max-sm:right-5 bottom-[160px] max-sm:bottom-[100px] opacity-50 hover:opacity-100 transition-opacity z-20">
        <button @click="toggleOpenMenu" class="w-[145px] h-[81px] max-sm:w-[82px] max-sm:h-[46px] relative z-50">
            <CenterJoystick class="w-[145px] h-[81px] max-sm:w-[82px] max-sm:h-[46px]" />
        </button>
        <button @click="$emit('clickBottom')" class="absolute top-[81px] max-sm:top-[46px] max-sm:w-[81px] max-sm:h-[72px] left-0 w-[144px] h-[127px] transition-all" :class="[isOpenMenu ? 'max-sm:opacity-100 opacity-50 translate-y-0 hover:opacity-100 hover:[&>svg]:fill-[#0F0722]' : 'opacity-0 -translate-y-1/2 hidden']">
            <BottomJoystick class="w-[144px] h-[127px] max-sm:w-[81px] max-sm:h-[72px]" />
        </button>
        <button class="absolute bottom-full left-0 w-[144px] h-[127px] max-sm:w-[81px] max-sm:h-[72px] transition-all cursor-wait" :class="[isOpenMenu ? ' opacity-20 translate-y-0 hover:opacity-20 hover:[&>svg]:fill-[#0F0722]' : 'opacity-0 translate-y-1/2 hidden']">
            <TopJoystick class=" w-[144px] h-[127px] max-sm:w-[81px] max-sm:h-[72px]" />
        </button>
        <button @click="$router.push({name: 'token'})" class="max-sm:w-[81px] max-sm:h-[72px] absolute top-1/2 -translate-y-[calc(50%+3px)] right-[120px] max-sm:right-[69px] w-[144px] h-[146px] transition-all" :class="[isOpenMenu ? ' max-sm:opacity-100 opacity-50 translate-x-0 hover:opacity-100 hover:[&>svg]:fill-[#0F0722]' : 'opacity-0 translate-x-1/2 hidden']">
            <LeftJoystick class="w-[144px] h-[146px] max-sm:w-[81px] max-sm:h-[72px]" />
        </button>
    </div>
</template>



<style scoped>

</style>