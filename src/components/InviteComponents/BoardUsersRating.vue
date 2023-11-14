<template>
    <div class="flex flex-col bg-blue-950/10 backdrop-blur backdrop-filter rounded-lg flex-grow overflow-hidden ring-1 ring-blue-500/20">
  <div class="overflow-x-hidden sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-7">
      <div class="overflow-y-hidden">
        <table class="min-w-full text-left text-sm font-light">
            <thead class="border-b font-medium border-blue-500/30 text-white/50 font-TTOctos max-md:text-sm">
              <tr>
                <th scope="col" class="px-5 py-4 max-md:px-3 max-md:py-2 w-[50px] max-md:w-[30px] text-center">#</th>
                <th scope="col" class="px-6 py-4 max-md:px-3 max-md:py-2 w-[40%]">Name</th>
                <th scope="col" class="px-6 py-4 max-md:px-1 max-md:py-2 text-center">Units</th>
                <th scope="col" class="px-6 py-4 max-md:px-1 max-md:py-2 text-center">Invites</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b last:border-b-0 border-white/20 group [&>td]:z-20 [&>td]:relative [&:hover>td]:text-blue-500 animation__hover" 
                v-for="(leader, idx ) of leaders" :key="leader.id">
                <td class="whitespace-nowrap px-5 py-4 max-md:px-3 max-md:py-2 font-medium text-center font-TTOctos">{{ idx + 1 }}</td>
                <td class="whitespace-normal px-6 py-4 max-md:px-3 max-md:py-2 max-w-[100px] truncate font-Rollbox text-base !leading-tight font-bold max-md:text-sm">{{ leader.username }}</td>
                <td class="whitespace-nowrap px-6 py-4 max-md:px-1 max-md:py-2 text-center font-TTOctos">{{ leader.units }}</td>
                <td class="whitespace-nowrap px-6 py-4 max-md:px-1 max-md:py-2 text-center font-TTOctos">{{ leader.invite_count }}</td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import useLeaderboard from '@/composables/useLeaderboard';
import { ILeaderboardUser } from '@/types';

const props = defineProps({
  first: Number
})

const leaders = ref<ILeaderboardUser[] | []>([])

const { fetchLeaderboard } = useLeaderboard()

onMounted( async () => {
  leaders.value =  props.first ? await fetchLeaderboard({limit: props.first, page: 1}) : await fetchLeaderboard()
})
fetchLeaderboard();
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
.animation__hover {
  @apply [transform:translateZ(0)] overflow-hidden relative after:z-0 after:absolute after:bg-gradient-header-secondary after:bottom-0 after:left-0 after:h-full after:w-full after:origin-[100%_100%] after:scale-x-0 hover:after:origin-[0_0] hover:after:scale-x-100 after:transition after:ease-in-out after:duration-500
}

</style>
