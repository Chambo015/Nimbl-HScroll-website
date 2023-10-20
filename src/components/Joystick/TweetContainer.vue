<template>
    <div>
        <Tweet tweet-id="1702230452373745826" theme="dark">
            <template v-slot:loading>
                <span>Loading...</span>
            </template>
        </Tweet>
    </div>
</template>

<script setup lang="ts">
import Tweet from "vue-tweet";
</script>

<style scoped></style>
