<script setup lang="ts">
import HeroButton from "./HeroButton.vue";
import imgTelegram from "@/assets/telegram.png";
import imgDiscord from "@/assets/discord.png";
import imgTwitter from "@/assets/twitter.png";
import imgMobile from "@/assets/nimbl-screens-modal.png";
import imgMobileWebp from "@/assets/nimbl-screens-modal.webp";
import {IconCloseBtn, IconChevronRight} from "./icons";
import gsap from "gsap";
import { onMounted, ref } from 'vue';

defineEmits(["clickClose"]);

const btnsEl = ref()
const titleEl = ref()
const imgEl = ref()

const linkTwitter = () => window.open('https://twitter.com/nimbltv')
const linkTelegram = () => window.open('https://t.me/nimbltv')

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
                    join our community
                </h2>
                <div ref="btnsEl" class="flex flex-col gap-5 mt-11">
                    <!-- <HeroButton regular class="max-sm:!w-full group "
                        ><img :src="imgDiscord" alt="imgDiscord" width="35" height="27" class="absolute left-[10%]" />
                        <p class="font-gilroy text-2xl leading-none font-medium">Discord</p>
                        <div class="absolute right-[10%] inline top-1/2 -translate-y-1/2 group-hover:translate-x-1/2 transition-transform"><IconChevronRight /></div
                    ></HeroButton> -->
                    <HeroButton @click="linkTwitter" regular class="max-sm:!w-full group"
                        ><img :src="imgTwitter" alt="imgTwitter" width="31" height="27" class="absolute left-[10%]" />
                        <p class="font-gilroy text-2xl leading-none font-medium">X/Twitter</p>
                        <div class="absolute right-[10%] inline top-1/2 -translate-y-1/2 group-hover:translate-x-1/2 transition-transform"><IconChevronRight /></div
                    ></HeroButton>
                    <HeroButton @click="linkTelegram" regular class="max-sm:!w-full group"
                        ><img :src="imgTelegram" alt="imgTelegram" width="30" height="30" class="absolute left-[10%]" />
                        <p class="font-gilroy text-2xl leading-none font-medium">Telegram</p>
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

<!-- import { FC } from 'react'
import { HeroButton } from '../HeroButton'
import { EscapeIcon } from '../icons/EscapeIcon'
import imgMobile from '@/assets/nimbl-screens-modal.png'
import imgMobileWebp from '@/assets/nimbl-screens-modal.webp'

interface Props {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  }

export const ModalCommunity: FC<Props> = ({setIsModalOpen}) => {
  return (
    <div class='fixed bg-black/50 w-screen h-screen z-50 inset-x-0 inset-y-0 backdrop-blur-sm'>
        <div className='absolute bg-[#21193D] w-[885px] h-[583px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pt-[50px] pl-[40px]'>
            <button onClick={() => {setIsModalOpen(false)}} className='absolute top-0 right-0 z-20'><EscapeIcon /></button>
            <h2 className='bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text font-rfdewi font-black uppercase text-5xl w-1/2'>join our community</h2>
            <div className='flex flex-col gap-5 mt-11'>
            <HeroButton regular md><p className="font-gilroy text-2xl leading-none font-medium ">Discord</p></HeroButton>
            <HeroButton regular md><p className="font-gilroy text-2xl leading-none font-medium ">X/Twitter</p></HeroButton>
            <HeroButton regular md><p className="font-gilroy text-2xl leading-none font-medium ">Telegram</p></HeroButton>
            </div>
            <picture><source srcSet={imgMobileWebp} type="image/webp" /><img loading="lazy" src={imgMobile} alt="imgMobile" className='absolute bottom-0 right-[17px] h-full z-10' /></picture>
        </div>
    </div>
  )
}
 -->
