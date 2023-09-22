<template>
    <button
        @click="buttonClick"
        class="wrap w-[353px] h-[67px] max-sm:w-[266px] max-sm:h-[50px] relative cursor-pointer"
        :class="[bgBtn]">
        <img
            v-if="!regular"
            :src="imgBg"
            alt="imgBg"
            class="absolute left-0 top-0 w-full object-cover mix-blend-color-burn h-full" />
        <div v-if="!regular" class="inner-border  absolute inset-1"></div>
        <div :class="['flex justify-center items-center relative', {'gap-5 max-sm:gap-2': $slots.icon}]">
            <span class="font-rfdewi text-sm font-bold"><slot></slot></span>
            <slot name="icon"></slot>
        </div>
    </button>
</template>

<script setup lang="ts">
import imgBg from "@/assets/btn-texture.webp";
import {computed} from "vue";

const props = defineProps<{regular?: boolean}>();

const emit = defineEmits(['click'])

function buttonClick() {
  emit('click')
}

const rb = computed(() => {
    return "20px";
});

const bgBtn = computed(() => {
    return props.regular
        ? "!bg-[#584598] hover:!bg-[#584598aa]"
        : "bg-[radial-gradient(119.98%_176.69%_at_84%_-4.95%,_rgba(170,_214,_255,_0.81)_0%,_rgba(170,_214,_255,_0.81)_0.01%,_#0066fe_100%)]";
});
</script>

<style scoped>
button.wrap {
    --rb: v-bind(rb);
    clip-path: polygon(
        var(--rb) 0,
        100% 0,
        100% calc(100% - var(--rb)),
        calc(100% - var(--rb)) 100%,
        0 100%,
        0 var(--rb)
    );
  
}
div.inner-border {
    --rb: v-bind(rb);
    --wb: 2px;
    clip-path: polygon(
        0% var(--rb),
        var(--rb) 0%,
        100% 0%,
        100% calc(100% - var(--rb)),
        calc(100% - var(--rb)) 100%,
        0% 100%,
        var(--wb) calc(100% - var(--wb)),
        calc(100% - var(--rb)) calc(100% - var(--wb)),
        calc(100% - var(--wb)) calc(100% - var(--rb)),
        calc(100% - var(--wb)) var(--wb),
        calc(var(--rb)) var(--wb),
        var(--wb) calc(var(--rb)),
        var(--wb) calc(100% - var(--wb)),
        0% 100%
    );
    background-color: #7379ff;
}
</style>
