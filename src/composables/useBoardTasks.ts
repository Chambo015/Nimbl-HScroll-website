import { IBoardTask, IUserStorage, defaultUser } from "@/types";
import { useStorage } from "@vueuse/core";
import { ref } from 'vue';

declare global {
    var ethereum: any;
}

const user = useStorage<IUserStorage>("metamask-user", defaultUser, sessionStorage);

const useBoardTasks = () => {

    const loading = ref(false)

    const fetchAllTasks = async () => {

        const response = await fetch('https://api.nimbl.tv/en/api/hunter/tasks/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.status !== 200) {
            const error = (await response.json()).message;
            throw new Error(error);
        }

        const data = await response.json() as IBoardTask[];

        return data;
    }

    const fetchUserCompletedTasks = async (sessionToken: string) => {

		const response = await fetch('https://api.nimbl.tv/en/api/hunter/tasks/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${sessionToken}`
            },
        });

        if(response.status !== 200) {
            const error = (await response.json()).message;
            throw new Error(error);
        }

        const data = await response.json() as IBoardTask[];

        return data;
    }

    const fetchTasks = async () => {
        loading.value = true

        let allTasks

        if(!user.value.token) {
            allTasks = await fetchAllTasks()
            loading.value = false
        } else {
            allTasks = await fetchUserCompletedTasks(user.value.token)
            loading.value = false
        }

        loading.value = false
        return allTasks
    }

    return {
        fetchTasks,
        loading
    };
};

export default useBoardTasks;


