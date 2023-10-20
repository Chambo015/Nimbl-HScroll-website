<template>
  <main class="w-full h-full flex pt-5 pl-5 pb-[35px] gap-5">
    <div class="w-1/3 flex-shrink-0 flex flex-col space-y-5 pb-5">
    <BoardMetamask />
    <BoardUsersRating />
    </div>
    <div class="flex flex-grow flex-col pb-5 gap-5">
      <div class="flex h-[100px] gap-4  flex-shrink-0 w-full pr-5">
        <NotificationsBot />
        <CardTelegram />
        <CardXTwitter />
        <CardContract />
      </div>
      <div class="w-full overflow-hidden">
        <BoardTasks />
      </div>
      <div class="mt-auto pr-5">
        <DescInvite  />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import BoardMetamask from '@/components/InviteComponents/BoardMetamask.vue';
import BoardUsersRating from '@/components/InviteComponents/BoardUsersRating.vue';
import CardTelegram from '@/components/InviteComponents/SocialCards/CardTelegram.vue';
import CardXTwitter from '@/components/InviteComponents/SocialCards/CardXTwitter.vue';
import NotificationsBot from '@/components/InviteComponents/SocialCards/NotificationsBot.vue';
import CardContract from '@/components/InviteComponents/SocialCards/CardContract.vue';
import DescInvite from '@/components/InviteComponents/DescInvite.vue';
import BoardTasks from '@/components/InviteComponents/BoardTasks.vue';



</script>

<style scoped>

</style>