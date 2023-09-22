<template>
  <div class="h-[35px] bg-black inset-x-0 z-20 fixed bottom-0 max-sm:hidden max-sm:h-0 ">
        <nav class="h-full">
            <ul class="flex [&>li]:flex-grow justify-between items-center h-full">
                <li><RouterLink :to="{name: 'nimbltv'}">NIMBL.TV</RouterLink></li>
                <li><RouterLink :to="{name: 'stakes'}">STAKES</RouterLink></li>
                <li><RouterLink :to="{name: 'tokenized'}">TOKENIZED</RouterLink></li>
                <li><RouterLink :to="{name: 'data'}">DATA</RouterLink></li>
                <li><RouterLink :to="{name: 'moderation'}">MODERATION</RouterLink></li>
                <li><RouterLink :to="{name: 'swipe'}">SWIPE</RouterLink></li>
                <li><RouterLink :to="{name: 'teaser'}">TEASER</RouterLink></li>
              <!--   <li><RouterLink :to="{name: 'transfers'}">TRANSFERS</RouterLink></li> -->
                <li><RouterLink :to="{name: 'gamification'}">GAMIFICATION</RouterLink></li>
                <!-- <li><RouterLink :to="{name: 'summarize'}">SUMMARIZE</RouterLink></li> -->
                <li><RouterLink :to="{name: 'ai'}">AI</RouterLink></li>
               <!--  <li><RouterLink :to="{name: 'handle'}">HANDLE</RouterLink></li> -->
                <li><RouterLink :to="{name: 'token'}">TOKEN</RouterLink></li>
                <li><RouterLink :to="{name: 'roadmap'}">ROADMAP</RouterLink></li>
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
    @apply opacity-40 font-rfdewi text-white text-sm font-black gradient-nav-active 
}
li .router-link-active {
    @apply opacity-100
}
</style>