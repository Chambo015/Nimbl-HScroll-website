<script setup lang="ts">
import {onMounted, ref, PropType} from "vue";
import gsap from "gsap";
import HeroButton from "@/components/HeroButton.vue";
import {IconCloseBtn, IconChevronRight} from "@/components/icons";
import axios, { AxiosError } from "axios";

const props = defineProps({
    sessionToken: String as PropType<string | null>,
});
const emit = defineEmits(["clickClose"]);

const btnWrapEl = ref();
const titleEl = ref();

const sendCode = ref("");
const errorText = ref<string | undefined>("");

const onSubmit = async () => {
    if (!sendCode.value.trim()) return;
    if (!props.sessionToken) return;
    try {
        const res = await axios.post(
            "https://api.nimbl.tv/ru/api/hunter/ama/session/",
            {
                session_code: sendCode.value,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${props.sessionToken}`,
                },
            },
        );
        if (res.status === 200) {
            emit('clickClose')
        };
    } catch (error) {
        errorText.value = (error as AxiosError<{error: string}>).response?.data.error
    }

    
};

onMounted(() => {
    const tl = gsap.timeline();
    tl.from(btnWrapEl.value.children, {
        autoAlpha: 0,
        yPercent: 50,
        duration: 0.5,
        stagger: 0.2,
        ease: "expo.inOut",
    });
    tl.from(
        titleEl.value,
        {
            autoAlpha: 0.0,
            duration: 1,
            yPercent: -100,
            ease: "expo.inOut",
        },
        "0",
    );
});
</script>

<template>
    <div
        @click.self="$emit('clickClose')"
        class="fixed bg-black/50 w-screen h-screen z-50 inset-x-0 inset-y-0 backdrop-blur-sm">
        <div
            class="absolute overflow-hidden bg-[#21193D] w-[770px] h-[383px] max-sm:w-full max-sm:h-full flex max-sm:flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-[50px] px-[40px] max-sm:px-5">
            <button @click="$emit('clickClose')" class="absolute top-0 right-0 z-20"><IconCloseBtn /></button>
            <div>
                <h2
                    ref="titleEl"
                    class="bg-gradient-to-b from-white max-sm:text-3xl to-white/50 text-transparent bg-clip-text font-rfdewi font-black uppercase text-5xl w-full max-sm:w-fit">
                    Participate in Nimbl AMA session
                </h2>
                <div ref="btnWrapEl" class="flex flex-col gap-5 mt-11">
                    <div class="relative">
                        <input
                            @input="errorText = undefined"
                            @keyup.enter="onSubmit"
                            type="text"
                            v-model="sendCode"
                            class="bg-transparent font-gilroy py-4 px-6  outline-none w-full"
                            :class="[ errorText ? 'text-red-500' : 'text-white']"
                            placeholder="session code" />
                        <div class="inner-border absolute inset-0"></div>
                        <span class="absolute left-1/2 -translate-x-1/2 top-0 translate-y-[-100%] text-red-500" v-if="errorText">{{ errorText }}</span>
                    </div>
                    <HeroButton @click="onSubmit" regular class="max-sm:!w-full group w-auto">
                        <span class="!text-2xl">SUBMIT</span>
                        <div
                            class="absolute right-[10%] inline top-1/2 -translate-y-1/2 group-hover:translate-x-1/2 transition-transform">
                            <IconChevronRight /></div
                    ></HeroButton>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
div.inner-border {
    --rb: 20px;
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
    background-color: rgba(255, 255, 255, 0.4);
}
</style>
