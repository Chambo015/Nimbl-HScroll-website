import { ISessionTwitter, IUserTwitter } from '@/types';
import { useStorage } from '@vueuse/core';
import { ref } from 'vue';

const uuidStorage = useStorage<string>("uuid", "");

const useTwitterAuth = () => {
    const loading = ref(false);

    const twitterLogin = () => {
      window.location.href = "https://api.nimbl.tv/accounts/twitter/login/"
    }

    const connectMetamaskUuid = async (uuid: string, token: string) => {
      const response = await fetch(`https://api.nimbl.tv/en/api/metamask/invite/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(({
          invite_uuid: uuid,
        }))
      });

      const data = await response.json() as {
        message: string,
      };

      if(response.status === 200) {
        console.log(data.message);
      }

      uuidStorage.value = "";
    }

    const fetchTwitterUserById = async (id: string) => {
      loading.value = true;
      if(uuidStorage.value.length > 0) {
        connectMetamaskUuid(uuidStorage.value, id);
      }

      const response = await fetch(`https://api.nimbl.tv/en/api/user/info/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${id}`
        }
      });
      const data = await response.json() as {
        user: IUserTwitter
        key: string,
        total_invites: number
      };
      
      loading.value = false;

      return {
        user: data.user,
        token: data.key,
        total_invites: data.total_invites
      } as ISessionTwitter;
    }

    return {
      twitterLogin,
      fetchTwitterUserById
    }
}

export default useTwitterAuth;
