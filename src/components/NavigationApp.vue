<template>
  <div class="h-[35px] bg-black inset-x-0 z-20 fixed bottom-0 max-sm:hidden max-sm:h-0 ">
        <nav class="h-full">
            <ul class="flex [&>li]:flex-grow justify-between items-center h-full [&>li]:truncate max-xl:gap-2">
                <li title="NIMBL.TV"><RouterLink :to="{name: 'nimbltv'}">NIMBL.TV</RouterLink></li>
                <li title="STAKES"><RouterLink :to="{name: 'stakes'}">STAKES</RouterLink></li>
                <li title="TOKENIZED"><RouterLink :to="{name: 'tokenized'}">TOKENIZED</RouterLink></li>
                <li title="DATA"><RouterLink :to="{name: 'data'}">DATA</RouterLink></li>
                <li title="MODERATION"><RouterLink :to="{name: 'moderation'}">MODERATION</RouterLink></li>
                <li title="SWIPE"><RouterLink :to="{name: 'swipe'}">SWIPE</RouterLink></li>
                <li title="TEASER"><RouterLink :to="{name: 'teaser'}">TEASER</RouterLink></li>
              <!--   <li><RouterLink :to="{name: 'transfers'}">TRANSFERS</RouterLink></li> -->
                <li title="GAMIFICATION"><RouterLink :to="{name: 'gamification'}">GAMIFICATION</RouterLink></li>
                <!-- <li><RouterLink :to="{name: 'summarize'}">SUMMARIZE</RouterLink></li> -->
                <li title="AI"><RouterLink :to="{name: 'ai'}">AI</RouterLink></li>
                <li title="TOKENOMICS"><RouterLink :to="{name: 'tokenomics'}">TOKENOMICS</RouterLink></li>
               <!--  <li><RouterLink :to="{name: 'handle'}">HANDLE</RouterLink></li> -->
                <li title="TOKEN"><RouterLink :to="{name: 'token'}">TOKEN</RouterLink></li>
                <li title="ROADMAP"><RouterLink :to="{name: 'roadmap'}">ROADMAP</RouterLink></li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
li {
    @apply text-center 
}
li a {
    @apply opacity-40 font-rfdewi text-white text-sm font-black gradient-nav-active max-lg:text-xs
}
li .router-link-active {
    @apply opacity-100
}
</style>