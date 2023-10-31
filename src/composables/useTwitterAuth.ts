import { ISessionTwitter, IUserTwitter } from '@/types';

const useTwitterAuth = () => {
    const twitterLogin = () => {
      window.location.href = "https://api.nimbl.tv/accounts/twitter/login/"
    }

    const fetchTwitterUserById = async (id: string) => {
      const response = await fetch(`https://api.nimbl.tv/en/api/user/info/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${id}`
        }
      });
      const data = await response.json() as {
        user: IUserTwitter
        key: string
      };

      return {
        user: data.user,
        token: data.key
      } as ISessionTwitter;
    }

    return {
      twitterLogin,
      fetchTwitterUserById
    }
}

export default useTwitterAuth;
