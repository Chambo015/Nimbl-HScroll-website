import axios from "axios";
import { useStorage } from "@vueuse/core";
import { IUserStorage, defaultUser } from '@/types';

export const useHunterTelegram = () => {
    
    const user = useStorage<IUserStorage>("metamask-user", defaultUser, sessionStorage);
    
    const postTelegramId = async (id: number, username: string) => {
        if(!user.value.token) return {
            error: 'Not Auth metamask'
        }
        const result = await axios.post("https://api.nimbl.tv/ru/api/hunter/telegram/info/", {
            telegram_id: id,
            telegram_username: username
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${user.value.token}`,
            },
        });

        return result.data;
    };

    return {postTelegramId}
};

