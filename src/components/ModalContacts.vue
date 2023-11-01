<script setup lang="ts">
import HeroButton from "./HeroButton.vue";
import imgMobile from "@/assets/nimbl-screens-modal.png";
import imgMobileWebp from "@/assets/nimbl-screens-modal.webp";
import {IconCloseBtn, IconChevronRight} from "./icons";
import gsap from "gsap";
import { onMounted, ref } from 'vue';
import IconTwitter from './icons/IconTwitter.vue';
import IconTelegram from './icons/IconTelegram.vue';
import IconCopyLink from './icons/IconCopyLink.vue';
import { useClipboard } from '@vueuse/core';

const props = defineProps({
    shareMode: Boolean,
    inviteLink: {
        type: String,
        required: false
    }
})
const emit = defineEmits(["clickClose"]);
const { copy } = useClipboard();

const btnsEl = ref()
const titleEl = ref()
const imgEl = ref()

const textInvite = 
    'Connect to Nimbl and unlock a world of Social-fi gamified experiences!'


const linkTwitter = () => {
    let link  = 'https://twitter.com/nimbltv'; 
    if(props.shareMode && props.inviteLink) {
         link = 'https://twitter.com/intent/tweet?text=' + textInvite  + '&url=' + encodeURIComponent(props.inviteLink) +'&hashtags=nimbl';
    }
    window.open(link, '_blank');
    emit('clickClose')
}
const linkTelegram = () => {
    let link  = 'https://t.me/nimbltv'; 
    if(props.shareMode && props.inviteLink) {
         link = 'https://t.me/share/url?url=' + encodeURIComponent(props.inviteLink)  + '&text=' + textInvite;
    }
    window.open(link, '_blank');
    emit('clickClose')
}

const copyLink = async () => {
    if(!props.inviteLink) return
  await copy(props.inviteLink)
  emit('clickClose')
}

onMounted(() => {
  const tl = gsap.timeline();
  tl.from(btnsEl.value.children , {
    autoAlpha: 0,
    yPercent: 50,
    duration: 0.5,
    stagger: 0.2,
    ease: "expo.inOut",
  })
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
    tl.from(
      imgEl.value,
        {
            autoAlpha: 0.0,
            duration: 1,
            yPercent: 100,
            ease: "expo.inOut",
        },
        "0",
    );
})
</script>

<template>
    <div
        @click.self="$emit('clickClose')"
        class="fixed bg-black/50 w-screen h-screen z-50 inset-x-0 inset-y-0 backdrop-blur-sm">
        <div
            class="absolute overflow-hidden bg-[#21193D] w-[885px] h-[583px] max-sm:w-full max-sm:h-full flex max-sm:flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pt-[50px] pl-[40px] max-sm:px-5">
            <button @click="$emit('clickClose')" class="absolute top-0 right-0 z-20"><IconCloseBtn /></button>
            <div>
                <h2 ref="titleEl"
                    class="bg-gradient-to-b from-white max-sm:text-3xl to-white/50 text-transparent bg-clip-text font-rfdewi font-black uppercase text-5xl w-1/2 max-sm:w-fit">
                    {{ shareMode ? 'Share invite link' :'join our community'}}
                </h2>
                <div ref="btnsEl" class="flex flex-col gap-5 mt-11">
                    <!-- <HeroButton regular class="max-sm:!w-full group "
                        ><img :src="imgDiscord" alt="imgDiscord" width="35" height="27" class="absolute left-[10%]" />
                        <p class="font-gilroy text-2xl leading-none font-medium">Discord</p>
                        <div class="absolute right-[10%] inline top-1/2 -translate-y-1/2 group-hover:translate-x-1/2 transition-transform"><IconChevronRight /></div
                    ></HeroButton> -->
                    <HeroButton @click="linkTwitter" regular class="max-sm:!w-full group"
                        ><IconTwitter class="absolute left-[10%] w-[30px] h-[30px]" />
                        <p class="font-gilroy text-2xl leading-none font-medium">X/Twitter</p>
                        <div class="absolute right-[10%] inline top-1/2 -translate-y-1/2 group-hover:translate-x-1/2 transition-transform"><IconChevronRight /></div
                    ></HeroButton>
                    <HeroButton @click="linkTelegram" regular class="max-sm:!w-full group"
                        ><IconTelegram class="absolute left-[10%] w-[30px] h-[30px]" />
                        <p class="font-gilroy text-2xl leading-none font-medium">Telegram</p>
                        <div class="absolute right-[10%] inline top-1/2 -translate-y-1/2 group-hover:translate-x-1/2 transition-transform"><IconChevronRight /></div
                    ></HeroButton>
                    <HeroButton @click="copyLink" regular class="max-sm:!w-full group" v-if="shareMode"
                        ><IconCopyLink class="absolute left-[10%] w-[30px] h-[30px]" />
                        <p class="font-gilroy text-2xl leading-none font-medium">Copy Link</p>
                        <div class="absolute right-[10%] inline top-1/2 -translate-y-1/2 group-hover:translate-x-1/2 transition-transform"><IconChevronRight /></div
                    ></HeroButton>
                </div>
            </div>
            <picture
                ><source :srcset="imgMobileWebp" type="image/webp" />
                <img ref="imgEl"
                    width="358"
                    height="583"
                    loading="lazy"
                    :src="imgMobile"
                    alt="imgMobile"
                    class="absolute max-sm:static bottom-0 right-[17px] max-sm:right-0 h-full z-10 max-sm:h-auto select-none pointer-events-none"
            /></picture>
        </div>
    </div>
</template>

<style scoped></style>

