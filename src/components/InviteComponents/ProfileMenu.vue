<template>
    <div class="relative self-stretch">
        <Popover v-slot="{open}" class="relative inline-block text-left isolate h-full">
            <PopoverButton
                :disabled="!userStorage.user && !userStorage.token"
                class="inline-flex h-full bg-gradient-header-secondary w-full justify-center items-center leading-none rounded-md px-4 py-2 text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 font-Rollbox font-bold text-base">
                <IconAccountCircle class="mr-2 h-5 w-5 text-violet-200 hover:text-violet-100" />
                {{ userStorage.user?.username || userStorage.user?.first_name || "Profile" }}
                <IconChevronDown class="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100" :class="{'rotate-180': open}" aria-hidden="true" />
            </PopoverButton>

            <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-1 opacity-0">
                <PopoverPanel
                    v-slot="{close}"
                    class="absolute left-0 mt-2 min-w-[260px] max-w-screen max-md:w-[90vw] origin-top-right divide-y divide-white/30 rounded-md backdrop-blur backdrop-filter shadow-lg ring-1 ring-black/5 bg-black/40 focus-visible:outline-none focus-visible:ring z-[999] font-TTOctos">
                    <div class="px-1 py-1">
                        <div>
                            <button
                                class="group flex w-full items-center rounded-md px-3 py-3 hover:bg-gradient-header-secondary text-violet-400">
                                <IconTwitter class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                                @{{ userStorage.user?.username }}
                            </button>
                        </div>
                        <div>
                            <button
                                class="group flex w-full items-center rounded-md px-3 py-3 text-white hover:bg-gradient-header-secondary">
                                <IconTelegram class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                                <!-- !userStorage.user?.telegram_id -->
                                <VueTelegramLogin
                                    v-if="true"
                                    mode="callback"
                                    telegram-login="NimblTelegramBot"
                                    @callback="onTelegramConnect" />
                            </button>
                        </div>
                        <div>
                            <button
                                class="group relative flex w-full items-center rounded-md px-3 py-3 text-white hover:bg-gradient-header-secondary">
                                <label for="small_outlined"
                                    ><IconMetamask class="mr-0 h-5 w-5 text-violet-400" aria-hidden="true"
                                /></label>
                                <div class="relative w-full" :class="{'opacity-50': loadingWallet}">
                                    <input
                                        type="text"
                                        id="small_outlined"
                                        @keyup.enter="saveMetamaskWallet"
                                        v-model="walletValue"
                                        :disabled="loadingWallet"
                                        class="block pl-2.5 pr-6 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none dark:text-white focus:outline-none focus:ring-0 peer placeholder:opacity-0 focus:placeholder:opacity-100"
                                        placeholder="0x123..." />
                                    <label
                                        for="small_outlined"
                                        class="absolute text-sm cursor-pointer duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
                                        :class="[
                                            errorWallet
                                                ? 'peer-focus:text-red-600 text-red-600 peer-focus:dark:text-red-500'
                                                : 'peer-focus:text-blue-600 peer-focus:dark:text-blue-500 text-yellow-50',
                                        ]"
                                        >{{ errorWallet || "connect Metamask" }}</label
                                    >

                                    <button
                                        v-if="walletValue.length > 0"
                                        type="button"
                                        @click="saveMetamaskWallet"
                                        :disabled="loadingWallet"
                                        class="text-white absolute right-0 top-1/2 -translate-y-1/2 bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-1">
                                        <IconDone />
                                    </button>
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
import {DEFAULT_USER_STORAGE, STORAGE_USER_KEY} from "@/constants";
import {ISessionTwitter, IUserTg} from "@/types";
import {useStorage} from "@vueuse/core";
import {useHunterTelegram} from "@/composables/useHunterTelegram";
import {useWalletMetamask} from "@/composables/useWalletMetamask";

import {Popover, PopoverButton, PopoverPanel} from "@headlessui/vue";
import IconChevronDown from "@/components/icons/IconChevronDown.vue";
import IconMetamask from "../icons/IconMetamask.vue";
import IconDone from "../icons/IconDone.vue";
import IconTelegram from "../icons/IconTelegram.vue";
import IconLogOut from "../icons/IconLogOut.vue";
import IconLoading from "../icons/IconLoading.vue";
import IconTwitter from "../icons/IconTwitter.vue";
import IconAccountCircle from "../icons/IconAccountCircle.vue";
import VueTelegramLogin from "./VueTelegramLogin.vue";

const walletValue = ref("");
const userStorage = useStorage<ISessionTwitter>(STORAGE_USER_KEY, DEFAULT_USER_STORAGE, sessionStorage);
const {postTelegramId} = useHunterTelegram();
const {error: errorWallet, loading: loadingWallet, postWalletMetamask} = useWalletMetamask({wallet: walletValue});

const logOut = (close: () => void) => {
    userStorage.value = DEFAULT_USER_STORAGE;
    close();
};

async function onTelegramConnect(user: IUserTg) {
    await postTelegramId(user.id, user.username);
    console.log(user);
}

const saveMetamaskWallet = async () => {
    if (!userStorage.value.token) return;
    if (walletValue.value.length < 3) return;
    await postWalletMetamask({token: userStorage.value.token});
};
</script>
<style scoped>
.center_absolute {
    @apply left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute;
}
</style>
