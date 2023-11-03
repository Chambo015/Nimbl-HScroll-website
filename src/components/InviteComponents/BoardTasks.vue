<template>
  <div class="h-full w-full overflow-y-auto pr-5 max-md:px-3">
    <div v-if="loading" class="h-full w-full flex items-center justify-center"><Vue3Lottie :animation-data="loadingMain" :height="200" :width="200" :loop="true" /></div>
    <div v-else class="grid grid-cols-2 max-xl:grid-cols-1 gap-5">
      <CardTask v-for="task of tasks" :key="task.id" :img-url="task.task_image || undefined" :name="task.name" :reward="task.reward" :is-completed="task.task_done" :tweets-count="task.tweets_count || undefined" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardTask from './CardTask.vue';
import { Vue3Lottie } from 'vue3-lottie'
import useBoardTasks from '../../composables/useBoardTasks'
import { onMounted, ref, watch } from 'vue';
import { IBoardTask, ISessionTwitter } from '@/types';
import { useStorage } from '@vueuse/core/index.mjs';
import { DEFAULT_USER_STORAGE, STORAGE_USER_KEY } from '@/constants';
import loadingMain from '@/assets/lottie/main_loader.json'


const userStorage = useStorage<ISessionTwitter>(STORAGE_USER_KEY, DEFAULT_USER_STORAGE, sessionStorage);
const tasks = ref<IBoardTask[] | []>([]);

const { fetchTasks, loading } = useBoardTasks();

onMounted(async() => {
 const resTasks =  await fetchTasks();
 tasks.value = resTasks
})

watch(userStorage, async () => {
  const resTasks =  await fetchTasks();
  tasks.value = resTasks
})
</script>

<style scoped>
::-webkit-scrollbar {
    width: 3px;
}
/* Track */
::-webkit-scrollbar-track {
    background: transparent;
}
/* Handle */
::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #60e2ff 0%, #8c98ff 50%, #cc61ff 100%);
}
</style>