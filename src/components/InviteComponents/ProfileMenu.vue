<template>
    <div class="relative self-start z-20 max-md:w-full">
        <Popover  v-slot="{open}"  class="relative inline-block text-left isolate h-full max-md:w-full">
            <PopoverButton
                :disabled="!userStorage.user && !userStorage.token"
                class="inline-flex z-10 max-w-[200px] max-md:max-w-full h-full bg-gradient-header-secondary max-md:bg-none w-full items-center leading-none rounded-md px-4 max-md:py-0 py-2 max-md:px-0 text-white focus:outline-none font-Rollbox font-bold text-base">
                <UserAvatar :url="userStorage.twitter_avatar_url || undefined" />
                <span class="truncate ml-2">{{ userStorage.user?.username || userStorage.user?.first_name || "Profile" }}</span>
                <IconChevronDown class="ml-2 mr-1 h-5 w-5 text-violet-200 hover:text-violet-100 flex-shrink-0" :class="{'rotate-180': open}" aria-hidden="true" />
                <div class="bg-gradient-header-secondary md:hidden grow-[2] self-start ml-auto py-2 px-2 chevron_mask overflow-hidden">
                    <p class="text-white font-Rollbox text-xs !leading-none">TOTAL UNITS</p>
                    <p class="mt-2 text-[#c7972a]">{{ userStorage.user?.units }}</p>
                </div>
            </PopoverButton>

            <transition 
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-1 opacity-0">
                <PopoverPanel :unmount="true" 
                    v-slot="{close}"
                    class="absolute left-0 mt-2 min-w-[260px] max-w-screen max-md:w-[90vw] origin-top-right divide-y divide-white/30 rounded-md backdrop-blur backdrop-filter shadow-lg ring-1 ring-black/5 bg-black/40 focus-visible:outline-none focus-visible:ring z-[999] font-TTOctos">
                    <div class="px-1 py-1" >
                        <div>
                            <button
                                class="group flex w-full items-center rounded-md px-3 py-3 hover:bg-gradient-header-secondary text-violet-400 !leading-tight">
                                <IconTwitter class="mr-2 h-5 w-5 text-violet-400 flex-shrink-0" aria-hidden="true" />
                                @{{ userStorage.user?.username }}
                            </button>
                        </div>
                        <div>
                            <button
                                class="group flex w-full items-center rounded-md px-3 py-3 hover:bg-gradient-header-secondary text-violet-400 !leading-tight">
                                <IconTelegram class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                                <VueTelegramLogin
                                    v-if="!userStorage.user?.telegram_id"
                                    mode="callback"
                                    size="medium"
                                    telegram-login="NimblTelegramBot"
                                    @callback="onTelegramConnect" />
                                <span v-else>@{{ userStorage.user?.telegram_username }}</span>
                            </button>
                        </div>
                        <div>
                            <button @vue:unmounted="wantChangeWallet = false" 
                                class="group relative flex w-full items-center rounded-md px-3 py-3 text-white hover:bg-gradient-header-secondary">
                                <label for="small_outlined"
                                    ><IconMetamask class="mr-0 h-5 w-5 text-violet-400" aria-hidden="true"
                                /></label>
                                <div class="relative w-full" :class="{'opacity-50': loadingWallet}">
                                    <template v-if="!userStorage.user?.wallet_address || wantChangeWallet">
                                        <input
                                            type="text"
                                            id="small_outlined"
                                            @keyup.enter="saveMetamaskWallet"
                                            v-model="walletValue"
                                            :disabled="loadingWallet"
                                            class="block pl-2.5 pr-6 pb-1.5 pt-3 w-full text-sm  bg-transparent rounded-lg appearance-none text-white focus:outline-none focus:ring-0 peer placeholder:opacity-0 focus:placeholder:opacity-100"
                                            placeholder="0x123..." />
                                        <label
                                            for="small_outlined"
                                            class="absolute text-sm cursor-pointer duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
                                            :class="[
                                                errorWallet
                                                    ? 'peer-focus:text-red-600 text-red-600'
                                                    : 'peer-focus:text-blue-600 text-yellow-50',
                                            ]"
                                            >{{ errorWallet || "connect Metamask" }}</label
                                        >
                                        <button
                                            v-if="walletValue && walletValue.length > 0"
                                            title="Save Wallet"
                                            type="button"
                                            @click="saveMetamaskWallet"
                                            :disabled="loadingWallet"
                                            class="metamask__action-btn">
                                            <IconDone />
                                        </button>
                                    </template>
                                    <template v-else><p class="text-left ml-2 text-violet-400 truncate max-w-[180px]" >{{userStorage.user?.wallet_address}}</p>
                                        <button title="Change Wallet"
                                            type="button"
                                            @click="wantChangeWallet = true"
                                            :disabled="loadingWallet"
                                            class="metamask__action-btn">
                                            <IconEditPen />
                                        </button></template>
                                </div>
                                <div class="center_absolute" v-if="loadingWallet"><IconLoading /></div>
                            </button>
                        </div>
                    </div>
                    <div class="px-1 py-1">
                        <div>
                            <button
                            
                                @click="logOut(close)"
                                class="group flex w-full items-center rounded-md px-3 py-3 text-white hover:bg-gradient-header-secondary">
                                <IconLogOut class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                                Log Out
                            </button>
                        </div>
                    </div>
                </PopoverPanel>
            </transition>
        </Popover>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useStorage} from "@vueuse/core";
import {Popover, PopoverButton, PopoverPanel} from "@headlessui/vue";
import {DEFAULT_USER_STORAGE, STORAGE_USER_KEY} from "@/constants";
import {ISessionTwitter, IUserTg} from "@/types";
import {useHunterTelegram} from "@/composables/useHunterTelegram";
import {useWalletMetamask} from "@/composables/useWalletMetamask";

import IconChevronDown from "@/components/icons/IconChevronDown.vue";
import IconMetamask from "@/components/icons/iconMetamask.vue";
import IconDone from "../icons/IconDone.vue";
import IconTelegram from "../icons/IconTelegram.vue";
import IconLogOut from "../icons/IconLogOut.vue";
import IconLoading from "../icons/IconLoading.vue";
import IconTwitter from "../icons/IconTwitter.vue";
import IconEditPen from "../icons/IconEditPen.vue";
import VueTelegramLogin from "./VueTelegramLogin.vue";
import { useRouter } from 'vue-router';
import UserAvatar from './UserAvatar.vue';

const userStorage = useStorage<ISessionTwitter>(STORAGE_USER_KEY, DEFAULT_USER_STORAGE, sessionStorage);
const router = useRouter()
const walletValue = ref(userStorage.value.user?.wallet_address);
const wantChangeWallet = ref(false)
const {postTelegramId} = useHunterTelegram();
const {error: errorWallet, loading: loadingWallet, postWalletMetamask} = useWalletMetamask({wallet: walletValue});

const logOut = (close: () => void) => {
    userStorage.value = DEFAULT_USER_STORAGE;
    close();
};

async function onTelegramConnect(user: IUserTg) {
    await postTelegramId(user.id, user.username);
    router.replace('');
    console.log(user);
}

const saveMetamaskWallet = async () => {
    if (!userStorage.value.token) return;
    if (walletValue.value && walletValue.value.length < 3) return;
    const newWallet = await postWalletMetamask({token: userStorage.value.token});
    if(newWallet && !errorWallet.value && !loadingWallet.value && userStorage.value.user ) {
     userStorage.value.user.wallet_address = newWallet;
     walletValue.value = userStorage.value.user.wallet_address
     wantChangeWallet.value = false
    }
};
</script>
<style scoped>
.center_absolute {
    @apply left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute;
}
.metamask__action-btn {
    @apply text-white absolute right-0 top-1/2 -translate-y-1/2 bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-1
}
.chevron_mask {
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 70% 100%, 30% 100%, 0% 75%);
}
</style>
