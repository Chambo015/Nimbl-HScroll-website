<template>
  <div class="h-full w-full overflow-y-auto relative pr-5 max-md:px-3 py-5 isolate">
    <div v-if="loading" class="h-full w-full flex items-center justify-center"><Vue3Lottie :animation-data="loadingMain" :height="200" :width="200" :loop="true" /></div>
    <div v-else class="grid grid-cols-2 max-xl:grid-cols-1 gap-5 max-md:mb-5">
      <CardTask v-for="task of sortedTasks" :key="task.id" :img-url="task.task_image || undefined" :name="task.name" :reward="task.reward" :is-completed="task.task_done" :tweets-count="task.tweets_count || undefined"  :tweets-metrics="task.tweets_metrics || undefined" @click="onClickTask({link: task.embedded_url, name: task.name, completed: task.task_done})" :class="[task.embedded_url || task.name.includes('AMA') ? 'cursor-pointer': '']" />
    </div>
    <ModalAMASession v-if="showModalAMA" @click-close="showModalAMA = false" :session-token="userStorage.token" />
  </div>
</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import { onMounted, ref, watch, computed } from 'vue';
import { useStorage } from '@vueuse/core';
import CardTask from './CardTask.vue';
import useBoardTasks from '@/composables/useBoardTasks'
import { IBoardTask, ISessionTwitter } from '@/types';
import { DEFAULT_USER_STORAGE, STORAGE_USER_KEY } from '@/constants';
import loadingMain from '@/assets/lottie/main_loader.json'
import ModalAMASession from './ModalAMASession.vue';

const showModalAMA = ref(false)
const tasks = ref<IBoardTask[] | []>([]);
const sortedTasks = computed(() => {
  return tasks.value.length > 0 ? tasks.value.sort((a, b) => a.reward - b.reward) : []
})

const { fetchTasks, loading } = useBoardTasks();
const userStorage = useStorage<ISessionTwitter>(STORAGE_USER_KEY, DEFAULT_USER_STORAGE, sessionStorage);

onMounted(async() => {
 const resTasks =  await fetchTasks();
 tasks.value = resTasks
})

watch(() => userStorage.value.token, async () => {
  const resTasks =  await fetchTasks();
  tasks.value = resTasks
})

const onClickTask = ({link, name, completed}: {link: string | null, name: string, completed: boolean}) => {
  if(completed) return
  if(link) {
    window.open(link, "_blank");
  }
  if(name.includes('AMA')) {
    showModalAMA.value = true
  }
}
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