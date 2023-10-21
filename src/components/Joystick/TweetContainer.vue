<template>
    <div>
        <Tweet tweet-id="1702230452373745826" theme="dark" :width="500">
            <template v-slot:loading>
                <div class="w-[500px] h-[590px] bg-[#15202b] flex items-center justify-center rounded-lg"><span>Loading...</span></div>
            </template>
        </Tweet>
    </div>
</template>

<script setup lang="ts">
import Tweet from "vue-tweet";
</script>

<style scoped></style>
