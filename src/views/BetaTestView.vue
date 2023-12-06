<template>
    <section class="relative w-full h-full max-sm:flex max-sm:items-center">
        <div ref="titleEl" data="titleEl" class="container justify-center flex pt-[50px] max-sm:pt-[40px]">
            <div class="inline-flex flex-col items-center">
                <div
                    class="py-3 px-4 border-[#6E7DFE] border bg-[#1C0048] inline-block lg:py-4 lg:px-6 font-gilroy font-medium tracking-[0.17em] lg:text-2xl mb-5 lg:mb-6 !leading-none">
                    BETA TESTING
                </div>
                <h1 class="main-title">
                    NIMBL.TV
                    <span class="main-text-layer">NIMBL.TV</span>
                </h1>
            </div>
        </div>

        <div class="container flex">
            <div class="lg:w-[500px] w-full">
                <form @submit.prevent="">
                    <div class="relative flex items-center gap-0 px-5 py-3 lg:py-5 lg:px-8">
                        <svg class="mr-5 lg:w-8 lg:h-8 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Z"/></svg>
                        <input
                            @input="errorText = undefined"
                            type="text"
                            v-model="sendCode"
                            class="bg-transparent font-gilroy outline-none w-full text-sm lg:text-2xl"
                            :class="[errorText ? 'text-red-500' : 'text-white']"
                            placeholder="Name/Pseudonym" />
                        <div class="inner-border absolute inset-0"></div>
                    </div>

                    <HeroButton class="w-full h-[55px] mt-8 lg:mt-14 " title="coming soon">
                        <p class="font-rfdewi text-2xl max-sm:text-sm font-bold">APPLY</p>
                        <template #icon><IconFiveDots class="w-[30px] h-[30px]" /></template>
                    </HeroButton>
                </form>
            </div>
            <div></div>
        </div>
    </section>
</template>

<script setup lang="ts">
import HeroButton from '@/components/HeroButton.vue';
import IconFiveDots from '@/components/icons/IconFiveDots.vue';
</script>

<style scoped>
.main-title {
    background-image: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background: -webkit-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image: -webkit-linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image: -moz-linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image: -ms-linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image: -o-linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    background-image: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.11) 100%);
    position: relative;
    @apply text-center font-rfdewi inline-block bg-clip-text  text-[125px] max-sm:text-[55px] !leading-none font-black uppercase -translate-x-2 -translate-y-7 max-sm:-translate-x-0 max-sm:-translate-y-6;
    -webkit-font-smoothing: antialiased;
    text-shadow: none;
    color: transparent;
}

.main-text-layer {
    background-size: contain;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    -webkit-font-smoothing: antialiased;
    background-color: rgb(56, 123, 255);
    text-shadow: none;
    color: transparent;
}
@supports (background-clip: text) and (-webkit-text-fill-color: transparent) {
    .main-title {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
    }
}

@supports (mix-blend-mode: overlay) and (background-clip: text) and (-webkit-text-fill-color: transparent) {
    .main-text-layer {
        background-image: url("../assets/image1895.webp");
        mix-blend-mode: overlay;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}

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
