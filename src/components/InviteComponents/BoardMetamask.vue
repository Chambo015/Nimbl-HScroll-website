<template>
    <div
        class="card_metamask min-h-[350px] max-md:min-h-[250px] flex items-center overflow-hidden rounded-lg shadow-lg relative card_before"
        :style="{'--bg': `url(${noise})`}">
        <div v-if="user.wallet" class="w-full h-full py-4 px-8 max-md:px-5">
            <div class="flex max-2xl:flex-col-reverse relative z-20">
                <Menu as="div" class="relative inline-block text-left z-10">
                    <MenuButton
                        class="flex font-tt-octosquares font-medium items-center h-[60px] max-2xl:h-[40px] px-5 gap-5 bg-gradient-header-secondary"
                        ><IconWallet /> {{ userWallet }}</MenuButton
                    >
                    <MenuItems class="absolute left-0 flex flex-col bg-gradient-header-secondary mt-2 p-2">
                        <MenuItem>
                            <button class="cursor-pointer" @click="logOutMetamask"> Logout </button>
                        </MenuItem>
                    </MenuItems>
                </Menu>
                <div 
                    class="max-md:hidden max-2xl:w-full max-2xl:mb-3 block animation-card-hover group relative ml-auto h-[60px] max-2xl:h-[50px] w-[350px] cursor-pointer overflow-hidden bg-gradient-header-secondary py-3 max-2xl:py-2 pl-[11px] pr-[70px]">
                    <p class="font-Rollbox font-bold text-lg !leading-none text-white/70 max-2xl:text-base ">Weekly Leaderboard</p>
                    <p class="font-tt-octosquares text-lg !leading-tight text-white max-2xl:text-base">#159 of 21.788</p>
                    <img
                        :src="rocket_img"
                        width="133"
                        height="133"
                        alt="rocket_img"
                        class="absolute right-0 top-0 -translate-y-[25px] translate-x-1/4 transition-all duration-1000 group-hover:drop-shadow-icon max-2xl:w-[100px] max-2xl:-translate-y-4" />
                </div>
            </div>
            <div class="hidden max-md:flex gap-2 justify-between bg-gradient-header-secondary relative  -translate-x-5 w-screen mt-3 px-5 py-2">
                <div><span class="font-TTOctos text-xs text-white">Units</span>: <span class="font-Rollbox text-white font-bold">604</span></div>
                <div><span class="font-TTOctos text-xs text-white">Rank</span>: <span class="font-Rollbox text-white font-bold">105</span></div>
                <div><span class="font-TTOctos text-xs text-white">Invites:</span>: <span class="font-Rollbox text-white font-bold">20</span></div>
            </div>
            <div class="relative z-10 font-Rollbox mt-5">
                <p class="font-bold text-xl !leading-tight max-2xl:text-lg">INVITE LINK</p>
                <p class="font-TTOctos text-lg mt-4 !leading-tight max-2xl:text-base">
                    This is your custom referral link. Use it to invite others to sign up for Nimbl.
                </p>
            </div>
            <div class="flex max-md:flex-col relative z-20 items-center mt-5 gap-5 max-md:gap-2">
                <div class="bg-gradient-header-secondary py-2 px-5 flex gap-4 items-center h-[42px] flex-grow max-md:w-full">
                    <input
                        type="text"
                        disabled
                        :value="inviteLink"
                        class="bg-transparent text-white select-text flex-grow max-w-full" />
                    <button @click="inviteLink && copy(inviteLink)" class="btn_copy relative w-[24px] h-[24px] flex-shrink-0">
                        <img :src="copyImg" alt="copyImg" width="24" height="24" />
                    </button>
                </div>

                <button class="btn_share flex-grow justify-center flex h-[42px] items-center px-4 max-md:w-full">
                    <p class="uppercase font-Rollbox font-bold text-black text-lg max-2xl:text-base !leading-none flex gap-4 max-2xl:items-center">
                        Share Link <IconShareLink />
                    </p>
                </button>
            </div>
            <div
                class="max-md:hidden block font-Rollbox text-white uppercase flex items-center justify-around h-[85px] mt-[40px] user_stats relative"
                :style="{'--bg': `url(${user_stat_bg})`}">
                <div class="flex flex-col items-center gap-2 relative z-20">
                    <p>units</p>
                    <p class="font-extrabold text-[40px] leading-none">604</p>
                </div>
                <div class="flex flex-col items-center gap-2 relative z-20">
                    <p>invites</p>
                    <p class="font-extrabold text-[40px] leading-none">200</p>
                </div>
            </div>
        </div>
        <div v-else class="w-full h-full relative flex items-center justify-center">
            <p v-if="errorMetamask" class="font-Rollbox font-bold text-red-500">{{ errorMetamask }}</p>
            <BtnMetamaskConnect v-else @click="loginMetamask" />
        </div>
    </div>
</template>

<script setup lang="ts">
import {Menu, MenuButton, MenuItems, MenuItem} from "@headlessui/vue";
import BtnMetamaskConnect from "@/components/InviteComponents/BtnMetamaskConnect.vue";
import IconWallet from "@/components/icons/IconWallet.vue";
import noise from "@/assets/bg_invite_noise.webp";
import rocket_img from "@/assets/rocket_img.png";
import user_stat_bg from "@/assets/invite/user_stat_bg.png";
import copyImg from "@/assets/invite/copy.png";
import useMetamask from "@/composables/useMetamask";
import {useClipboard, useStorage} from "@vueuse/core";
import {computed, ref} from "vue";
import IconShareLink from "../icons/IconShareLink.vue";

const {handleAuth} = useMetamask();

const defaultUser = {
    wallet: null,
    uuid: null,
}
const user = useStorage<{wallet: string | null; uuid: string | null}>("metamask-user", defaultUser, sessionStorage);
const errorMetamask = ref()

const inviteLink = computed(() => (user.value.uuid ? window.location.href + '?u=' + user.value.uuid : null));
const userWallet = computed(() => (user.value.wallet ? user.value.wallet.slice(0, 10) + "..." : null));
const loginMetamask = async () => {
    try {
        const res = await handleAuth();
    if (!res) return;
    user.value.wallet = res.user;
    user.value.uuid = res.uuid;
    } catch (e) {
        console.log('error inside');
        errorMetamask.value = (e as Error).message
    }
    
};
const logOutMetamask = () => {
    user.value = defaultUser
}
const {copy} = useClipboard();
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
