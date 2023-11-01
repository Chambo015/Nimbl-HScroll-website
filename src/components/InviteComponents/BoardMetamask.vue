<template>
    <div
        class="card_metamask min-h-[350px] max-md:min-h-[250px] flex items-center overflow-hidden rounded-lg shadow-lg relative card_before"
        :style="{'--bg': `url(${noise})`}">
        <div v-if="userStorage.user" class="w-full h-full py-4 px-4 flex flex-col">
            <div class="flex max-xl:flex-col-reverse relative z-20 gap-3">
                <ProfileMenu />
                <div
                    class="max-md:hidden flex-grow rounded-md flex-shrink-0 max-2xl:w-[260px] block animation-card-hover group relative ml-auto h-[60px] max-2xl:h-[50px] cursor-pointer overflow-hidden bg-gradient-header-secondary py-3 max-2xl:py-2 pl-[11px] pr-[70px] max-2xl:pr-5">
                    <p class="font-Rollbox font-bold text-lg !leading-none text-white/70 max-2xl:text-base">
                        Weekly Leaderboard
                    </p>
                    <p class="font-tt-octosquares text-lg !leading-tight text-white max-2xl:text-base">
                        #159 of 21.788
                    </p>
                    <img
                        :src="rocket_img"
                        width="133"
                        height="133"
                        alt="rocket_img"
                        class="absolute right-0 top-0 -translate-y-[25px] translate-x-1/4 transition-all duration-1000 group-hover:drop-shadow-icon max-2xl:w-[100px] max-2xl:-translate-y-4" />
                </div>
            </div>
            <div
                class="hidden max-md:flex gap-2 justify-between bg-gradient-header-secondary relative -translate-x-5 w-screen mt-3 px-5 py-2">
                <div>
                    <span class="font-TTOctos text-xs text-white">Units</span>:
                    <span class="font-Rollbox text-white font-bold">604</span>
                </div>
                <div>
                    <span class="font-TTOctos text-xs text-white">Rank</span>:
                    <span class="font-Rollbox text-white font-bold">105</span>
                </div>
                <div>
                    <span class="font-TTOctos text-xs text-white">Invites:</span>:
                    <span class="font-Rollbox text-white font-bold">20</span>
                </div>
            </div>
            <div class="relative z-10 font-Rollbox mt-5">
                <p class="font-bold text-xl !leading-tight max-2xl:text-lg">INVITE LINK</p>
                <p class="font-TTOctos text-lg mt-4 !leading-tight max-2xl:text-base max-2xl:mt-2">
                    This is your custom referral link. Use it to invite others to sign up for Nimbl.
                </p>
            </div>
            <div class="flex max-md:flex-col relative z-10 items-center mt-5 gap-5 max-md:gap-2">
                <div
                    v-if="inviteLink"
                    class="bg-gradient-header-secondary rounded-md  py-2 px-5 flex gap-4 items-center h-[42px] flex-grow max-md:w-full">
                    <input
                        type="text"
                        disabled
                        :value="inviteLink"
                        class="bg-transparent text-white select-text flex-grow max-w-full" />
                    <button
                        @click="inviteLink && copy(inviteLink)"
                        class="btn_copy relative w-[24px] h-[24px] flex-shrink-0">
                        <img :src="copyImg" alt="copyImg" width="24" height="24" />
                    </button>
                </div>

                <button
                    @click="isModalShareOpen = true"
                    class="btn_share flex-grow justify-center rounded-md  flex h-[42px] items-center px-4 max-md:w-full">
                    <p
                        class="uppercase font-Rollbox font-bold text-black text-lg max-2xl:text-base !leading-none translate-y-[2px] max-2xl:items-center">
                        Share Link 
                    </p><IconShareLink class="ml-3" />
                </button>
            </div>
            <p class="font-TTOctos ml-2">Receive 10 units per invite</p>
            <div
                class="max-md:hidden font-Rollbox text-white uppercase max-2xl:text-sm flex items-center justify-around h-[85px] mt-[40px] max-2xl:mt-5 user_stats relative"
                :style="{'--bg': `url(${user_stat_bg})`}">
                <div class="flex flex-col items-center gap-2 relative z-20">
                    <p>units</p>
                    <p class="font-extrabold text-[40px] !leading-none max-2xl:text-[32px]">{{ userStorage.user.units || 0 }}</p>
                </div>
                <div class="flex flex-col items-center gap-2 relative z-20">
                    <p>invites</p>
                    <p class="font-extrabold text-[40px] leading-none max-2xl:text-[32px]">{{ userStorage.total_invites || 0 }}</p>
                </div>
            </div>
        </div>
        <div v-else class="w-full h-full relative flex flex-col items-center justify-center">
            <p v-if="errorLogin" class="font-Rollbox font-bold text-red-500 px-4">{{ errorLogin }}</p>
            <BtnTwitterConnect @click="loginTwitter" />
        </div>
        <!-- Modal Contact -->
        <Transition
            enter-active-class="transition-all"
            leave-active-class="transition-all"
            leave-to-class="opacity-0 translate-y-1/2"
            enter-from-class="opacity-0 translate-y-1/2"
            ><ModalContacts
                share-mode
                @click-close="() => (isModalShareOpen = !isModalShareOpen)"
                v-if="isModalShareOpen && inviteLink"
                :invite-link="inviteLink"
        /></Transition>
    </div>
</template>

<script setup lang="ts">
import BtnTwitterConnect from "@/components/InviteComponents/BtnTwitterConnect.vue";
import noise from "@/assets/bg_invite_noise.webp";
import rocket_img from "@/assets/rocket_img.png";
import user_stat_bg from "@/assets/invite/user_stat_bg.png";
import copyImg from "@/assets/invite/copy.png";
import {useClipboard, useStorage} from "@vueuse/core";
import {computed, onMounted, ref} from "vue";
import IconShareLink from "../icons/IconShareLink.vue";
import {ISessionTwitter} from "@/types";
import ModalContacts from "../ModalContacts.vue";
import {DEFAULT_USER_STORAGE, STORAGE_USER_KEY, STORAGE_UUID_KEY} from "@/constants";
import {useRoute, useRouter} from "vue-router";
import useTwitterAuth from "@/composables/useTwitterAuth";
import ProfileMenu from './ProfileMenu.vue';

const errorLogin = ref();
const isModalShareOpen = ref(false);
const route = useRoute();
const router = useRouter();
const {fetchTwitterUserById} = useTwitterAuth();
const {copy} = useClipboard();
const userStorage = useStorage<ISessionTwitter>(STORAGE_USER_KEY, DEFAULT_USER_STORAGE, sessionStorage);
const uuidStorage = useStorage<string>(STORAGE_UUID_KEY, "");

function saveUuidStorage () {
    const uuid = route.query.u;
    uuidStorage.value = uuid as string;
}

const loginTwitter = async () => {
    saveUuidStorage()
    window.open("https://api.nimbl.tv/accounts/twitter/login/", "_self");
};

const inviteLink = computed(() => {
    const uuid = userStorage.value.user?.invite_uuid;
    return uuid ? "https://chambo015.github.io/Nimbl-HScroll-website/#/invite" + "?u=" + uuid : null;
});

onMounted(async () => {
    try {
        const twitterId = route.query.t;
        console.log("tw", twitterId);
        if (typeof twitterId === "string" && twitterId) {
            const twitterUser = await fetchTwitterUserById(twitterId);

            userStorage.value = {
                ...twitterUser,
            };
            
            router.replace({'query':undefined}) // for remove query params
        }
    } catch (e) {
        errorLogin.value = (e as Error).message;
    }
    
});
</script>

<style scoped>
.card_before::before {
    content: "";
    background-image: var(--bg);
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.6;
    mix-blend-mode: multiply;
}
.card_metamask {
    background-image: linear-gradient(180deg, #5c2786 5.1%, #2f0053 100%);
}

.btn_copy:active:after {
    content: "Copied";
    padding: 5px;
    border: 1px solid #ccc;
    top: 5px;
    position: absolute;
    left: 105%;
    background: black;
}

.btn_share {
    background-image: linear-gradient(180deg, #b0731a -9.01%, #d0a530 22.91%, #f2d14e 63.49%);
}

.user_stats::before {
    content: "";
    background-image: var(--bg);
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.6;
    z-index: 1;
    mix-blend-mode: screen;
}
</style>
