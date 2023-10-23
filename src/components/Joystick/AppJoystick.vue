<script setup lang="ts">
import {ref, computed} from 'vue'
import BottomJoystick from './BottomJoystick.vue';
import CenterJoystick from './CenterJoystick.vue';
import LeftJoystick from './LeftJoystick.vue';
import TopJoystick from './TopJoystick.vue';
import CenterJoystickTwitter from './CenterJoystickTwitter.vue';
import { useRoute } from 'vue-router';
import TweetContainer from './TweetContainer.vue';
import { onClickOutside } from '@vueuse/core'


defineEmits(['clickBottom'])
const route = useRoute()

const target = ref(null)
const isInvitePage = computed(() => route.name === 'invite')
const isOpenMenu = ref(false)
const showTwitterPost = ref(false)
const toggleOpenMenu = () => {
    isOpenMenu.value = !isOpenMenu.value
};
const closeMenu = () => {
    isOpenMenu.value = false;
}
onClickOutside(target, () => {
    isOpenMenu.value = false;
    showTwitterPost.value = false;
})

</script>

<template>
    <div
        ref="target"
        @mouseleave="closeMenu"
        class="absolute right-[50px] max-sm:right-5 bottom-[160px] max-sm:bottom-[100px] opacity-50 hover:opacity-100 transition-opacity z-20" :class="{'!opacity-100': showTwitterPost}">
        <button @click="toggleOpenMenu" class="w-[145px] h-[81px] max-sm:w-[82px] max-sm:h-[46px] relative z-50">
            <CenterJoystick v-if="!isInvitePage" class="w-[145px] h-[81px] max-sm:w-[82px] max-sm:h-[46px]" />
            <CenterJoystickTwitter
                @click="showTwitterPost = !showTwitterPost"
                class="w-[145px] h-[81px] max-sm:w-[82px] max-sm:h-[46px]"
                v-else />
        </button>
        <!-- Bottom -->
        <button
            v-if="!isInvitePage"
            @click="$emit('clickBottom')"
            class="absolute top-[81px] max-sm:top-[46px] max-sm:w-[81px] max-sm:h-[72px] left-0 w-[144px] h-[127px] transition-all"
            :class="[isOpenMenu ? ' translate-y-0 hover:[&>svg]:fill-[#0F0722]' : 'opacity-0 -translate-y-1/2 hidden']">
            <BottomJoystick class="w-[144px] h-[127px] max-sm:w-[81px] max-sm:h-[72px]" />
        </button>
        <!-- Top -->
        <button
            v-if="!isInvitePage"
            @click="$router.push({name: 'invite'})"
            class="absolute bottom-full left-0 w-[144px] h-[127px] max-sm:w-[81px] max-sm:h-[72px] transition-all"
            :class="[isOpenMenu ? ' translate-y-0 hover:[&>svg]:fill-[#0F0722]' : 'opacity-0 translate-y-1/2 hidden']">
            <TopJoystick class="w-[144px] h-[127px] max-sm:w-[81px] max-sm:h-[72px]" />
        </button>
        <!-- Left -->
        <button
            v-if="!isInvitePage"
            @click="$router.push({name: 'token'})"
            class="max-sm:w-[81px] max-sm:h-[72px] absolute top-1/2 -translate-y-[calc(50%+3px)] right-[120px] max-sm:right-[69px] w-[144px] h-[146px] transition-all"
            :class="[isOpenMenu ? ' translate-x-0  hover:[&>svg]:fill-[#0F0722]' : 'opacity-0 translate-x-1/2 hidden']">
            <LeftJoystick class="w-[144px] h-[146px] max-sm:w-[81px] max-sm:h-[72px]" />
        </button>
        <div v-if="showTwitterPost" class="absolute top-0 right-0 -translate-y-full  z-[9999]"><TweetContainer /></div>
    </div>
</template>

<style scoped></style>
