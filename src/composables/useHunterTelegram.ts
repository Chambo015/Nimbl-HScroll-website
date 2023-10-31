import axios from "axios";
import {useStorage} from "@vueuse/core";
import {ISessionTwitter} from "@/types";
import {DEFAULT_USER_STORAGE, STORAGE_USER_KEY} from "@/constants";

export const useHunterTelegram = () => {
    const userStorage = useStorage<ISessionTwitter>(STORAGE_USER_KEY, DEFAULT_USER_STORAGE, sessionStorage);

    const postTelegramId = async (id: number, username: string) => {
        if (!userStorage.value.token)
            return {
                error: "Not Auth metamask",
            };
        const result = await axios.post(
            "https://api.nimbl.tv/ru/api/hunter/telegram/info/",
            {
                telegram_id: id,
                telegram_username: username,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${userStorage.value.token}`,
                },
            },
        );

        return result.data;
    };

    return {postTelegramId};
};
