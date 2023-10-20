<template>
    <div
        class="card_metamask min-h-[350px] flex items-center overflow-hidden rounded-lg shadow-lg relative card_before"
        :style="{'--bg': `url(${noise})`}">
        <div v-if="user" class="w-full h-full py-4 px-8">
            <div class="flex relative z-30">
                <Menu as="div" class="relative inline-block text-left">
                    <MenuButton
                        class="flex font-tt-octosquares font-medium items-center h-[60px] px-5 gap-5 bg-gradient-header-secondary"
                        ><IconWallet /> {{ userWallet }}</MenuButton
                    >
                    <MenuItems class="absolute left-0 flex flex-col bg-gradient-header-secondary mt-2 p-2 w-full">
                        <MenuItem v-slot="{active}">
                            <a class="cursor-pointer"> Logout </a>
                        </MenuItem>
                    </MenuItems>
                </Menu>
                <div
                    class="animation-card-hover group relative ml-auto h-[60px] w-[350px] cursor-pointer overflow-hidden bg-gradient-header-secondary py-3 pl-[11px] pr-[70px]">
                    <p class="font-Rollbox font-bold text-lg leading-none text-white/70">Weekly Leaderboard</p>
                    <p class="font-tt-octosquares text-lg leading-tight text-white">#159 of 21.788</p>
                    <img
                        :src="rocket_img"
                        width="133"
                        height="133"
                        alt="rocket_img"
                        class="absolute right-0 top-0 -translate-y-[25px] translate-x-1/4 transition-all duration-1000 group-hover:drop-shadow-icon" />
                </div>
            </div>
            <div class="relative z-10 font-Rollbox mt-5">
                <p class="font-bold text-xl leading-tight">INVITE LINK</p>
                <p class="font-tt-octosquares text-lg mt-4 leading-tight">
                    This is your custom referral link. Use it to invite others to sign up for Nimbl.
                </p>
            </div>
            <div class="flex relative z-20 items-center mt-5">
                <div class="bg-gradient-header-secondary py-2 px-5 flex gap-4 items-center">
                    <input type="text" disabled  :value="inviteLink" class="bg-transparent text-white select-text w-[200px]" />
                    <button @click="copy(inviteLink)" title="Copied" class="btn_copy relative"><img :src="copyImg" alt="copyImg" width="24" height="24"></button>
                </div>
            </div>
        </div>
        <div v-else class="w-full h-full relative flex items-center justify-center">
            <BtnMetamaskConnect @click="loginMetamask" />
        </div>
    </div>
</template>

<script setup lang="ts">
import {Menu, MenuButton, MenuItems, MenuItem} from "@headlessui/vue";
import BtnMetamaskConnect from "@/components/InviteComponents/BtnMetamaskConnect.vue";
import IconWallet from "@/components/icons/IconWallet.vue";
import noise from "@/assets/bg_invite_noise.webp";
import rocket_img from "@/assets/rocket_img.png";
import copyImg from "@/assets/invite/copy.png";
import useMetamask from "@/composables/useMetamask";
import {useClipboard, useStorage} from "@vueuse/core";
import {computed, onMounted, ref} from "vue";


const {handleAuth} = useMetamask();

const user = ref<string | null>();
const inviteLink = ref('https://nimbl.tv/id1335222222222222222222222')

const userWallet = computed(() => (user.value ? user.value.slice(0, 10) + "..." : null));
const loginMetamask = async () => {
    const res = await handleAuth();
    useStorage("metamask-user", res, sessionStorage);
    user.value = res;
};
const { copy, copied } = useClipboard()
onMounted(() => {
    const storageUser = useStorage("metamask-user", null, sessionStorage);
    user.value = storageUser.value;
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
    content:attr(title);
    padding:5px;
    border:1px solid #ccc;
    top:5px;
    position: absolute;
    left:105%;
    background: black;
}
</style>
