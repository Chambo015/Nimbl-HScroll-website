<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import NavigationApp from "./components/NavigationApp.vue";
</script>

<template>
    <main class="h-[calc(100vh-35px)]"><router-view></router-view></main>
   <NavigationApp />
</template>

<style scoped>
main {
    background: url("./assets/background-stars.png") 100px;
}
</style>
