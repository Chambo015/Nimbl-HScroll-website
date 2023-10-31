<template>
    <div class="flex flex-col bg-[#1B1C20] rounded-lg flex-grow overflow-hidden">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-y-auto">
        <table class="min-w-full text-left text-sm font-light">
      
            <thead class="border-b font-medium dark:border-neutral-500 text-white/50">
              <tr>
                <th scope="col" class="px-5 py-4">#</th>
                <th scope="col" class="px-6 py-4">Name</th>
                <th scope="col" class="px-6 py-4">Points</th>
                <th scope="col" class="px-6 py-4">Invites</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b dark:border-neutral-500" v-for="(leader, idx ) of leaders" :key="leader.id">
                <td class="whitespace-nowrap px-5 py-4 font-medium">{{ idx + 1 }}</td>
                <td class="whitespace-normal px-6 py-4 max-w-[100px] truncate">{{ leader.username }}</td>
                <td class="whitespace-nowrap px-6 py-4">{{ leader.units }}</td>
                <td class="whitespace-nowrap px-6 py-4">{{ leader.invite_count }}</td>
              </tr>
             
            </tbody>
      
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import useLeaderboard from '@/composables/useLeaderboard';
import { ILeaderboardUser } from '@/types';
import { onMounted, ref } from 'vue';

const leaders = ref<ILeaderboardUser[] | []>([])

const { fetchLeaderboard } = useLeaderboard()

onMounted( async () => {
  leaders.value =  await fetchLeaderboard()
})
fetchLeaderboard();
</script>

<style scoped></style>
