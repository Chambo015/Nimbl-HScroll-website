import {STORAGE_UUID_KEY} from "@/constants";
import {ISessionTwitter, IUserTwitter, IWeeklyLeaderBoard} from "@/types";
import {useStorage} from "@vueuse/core";
import axios from "axios";
import {ref} from "vue";



const uuidStorage = useStorage<string>(STORAGE_UUID_KEY, "");

const useTwitterAuth = () => {
    const loading = ref(false);

    const twitterLogin = () => {
        window.location.href = "https://api.nimbl.tv/accounts/twitter/login/";
    };

    const sendMetamaskUuid = async (uuid: string, token: string) => {
        const response = await fetch(`https://api.nimbl.tv/en/api/metamask/invite/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
                invite_uuid: uuid,
            }),
        });

        const data = (await response.json()) as {
            message: string;
        };

        if (response.status === 200) {
            console.log(data.message);
        }

        uuidStorage.value = "";
    };

    const fetchWeeklyLeaderboard = async ({token}: {token: string}) => {
        try {
            const res = await axios.get<IWeeklyLeaderBoard>("https://api.nimbl.tv/ru/api/main/weekly/leaderboard/", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            });
            if (res.status === 200) {
                return res.data;
            } else {
                return null;
            }
        } catch (error) {
            console.error("fetchWeeklyLeaderboard", error);
        }
    };

    const fetchTwitterUserById = async (id: string) => {
        loading.value = true;
        if (uuidStorage.value.length > 0) {
            sendMetamaskUuid(uuidStorage.value, id);
        }

        const response = await fetch(`https://api.nimbl.tv/en/api/user/info/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${id}`,
            },
        });

        if(response.status !== 200) { 
          loading.value = false;
          return null // Error
        }

        const data = (await response.json()) as {
            user: IUserTwitter;
            key: string;
            total_invites: number;
        };

        loading.value = false;

        return {
            user: data.user,
            token: data.key,
            total_invites: data.total_invites,
        } as ISessionTwitter;
    };

    return {
        twitterLogin,
        fetchTwitterUserById,
        fetchWeeklyLeaderboard
    };
};

export default useTwitterAuth;
