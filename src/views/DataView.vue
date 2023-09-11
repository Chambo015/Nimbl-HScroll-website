<template>
    <section>
        <div class="flex justify-center -mb-[250px] max-sm:-mb-[70px]">
            <picture class="flex justify-center pointer-events-none select-none">
                <source :srcset="imgBgWebp" type="image/webp" />
                <img :src="imgBg" alt="imgBg" class="w-[1920px] max-sm:max-w-[150%] object-contain mix-blend-lighten" />
            </picture>
        </div>
        <div class="container">
            <div class="text-center">
                <span
                    class="text-[#0061F0] text-center text-4xl font-medium font-gilroy py-1 px-2 max-sm:text-sm bg-[#001D48] border border-[#1017B9] max-sm:mx-auto max-sm:table mx-auto">
                    Powered by Lens Protocol
                </span>
                <h2
                    class="mt-8 bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text text-5xl font-black uppercase font-rfdewi max-sm:text-2xl max-sm:w-full leading-none max-sm:text-center">
                    DECENTRALIZED SOCIAL GRAPH
                </h2>
                <p
                    class="font-gilroy mt-5 text-white/80 text-2xl font-normal max-sm:text-sm max-sm:w-full max-sm:text-center">
                    Own your data <span><IconChain class="inline" /></span> Own your content
                </p>
            </div>
            <div class="flex items-center justify-center gap-16 mt-16">
                <div class="relative [&>span]:absolute [&>span]:bg-[#22202F] [&>span]:font-gilroy [&>span]:text-lg [&>span]:rounded [&>span]:px-2 [&>span]:py-1 ">
                    <picture class="flex justify-center pointer-events-none select-none">
                        <!-- <source :srcset="imgBgWebp" type="image/webp" /> -->
                        <img
                            :src="personData"
                            alt="imgBg"
                            class="w-[150px] h-[150px]" />
                    </picture>
                    <span class="-left-5 -top-5">Interests</span>
                    <span class="-right-10 top-0">Cookies</span>
                    <span class="-left-14 bottom-8">Data</span>
                    <span class="-left-1 -bottom-8">Chats</span>
                    <span class="-right-10 bottom-0">History</span>
                </div>
                <div><LocksCenter /></div>
                <div class="relative [&>span]:absolute [&>span]:bg-[#22202F] [&>span]:font-gilroy [&>span]:text-lg [&>span]:rounded [&>span]:px-2 [&>span]:py-1"><picture class="flex justify-center pointer-events-none select-none">
                        <!-- <source :srcset="imgBgWebp" type="image/webp" /> -->
                        <img
                            :src="dataNimbl"
                            alt="imgBg"
                            class="w-[172px] h-[108px]" />
                    </picture>
                    <span class="-left-5 -top-5">Content</span>
                    <span class="-right-5 -top-5">Posts</span>
                    <span class="-left-12 bottom-5">Likes</span>
                    <span class="-left-2 -bottom-10">Shares</span>
                    <span class="-right-14 -bottom-5">Comments</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import imgBg from "@/assets/db-bg.png";
import imgBgWebp from "@/assets/db-bg.webp";
import personData from "@/assets/person-data.png";
import dataNimbl from "@/assets/data-nimbl.png";
import IconChain from "@/components/DataView/IconChain.vue";
import LocksCenter from "@/components/DataView/LocksCenter.vue";

</script>

<style scoped></style>
