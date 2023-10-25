

import { IBoardTask } from "@/types";
import { useStorage } from "@vueuse/core";

declare global {
    var ethereum: any;
}
const defaultUser = {
    wallet: null,
    uuid: null,
    token: null,
}

const user = useStorage<{wallet: string | null; uuid: string | null, token: string | null}>("metamask-user", defaultUser, sessionStorage);

const useBoardTasks = () => {


    const fetchAllTasks = async () => {
		const response = await fetch('https://api.nimbl.tv/en/api/hunter/tasks/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${user.value.token}`
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

		const response = await fetch('https://api.nimbl.tv/en/api/hunter/done/tasks/', {
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

        const data = await response.json() as {action_type: number}[];

        return data;
    }

    const fetchTasks = async () => {
        const allTasks = await fetchAllTasks()
        if(!user.value.token) return allTasks;
        const userCompletedTaskIds = await fetchUserCompletedTasks(user.value.token);
        const tasks = allTasks.map(task => {
            const isCompleted = userCompletedTaskIds.includes({ action_type: task.id });
            return {
                ...task,
                is_completed: isCompleted
            }
        })
        return tasks
    }

    return {
        fetchTasks,
    };
};

export default useBoardTasks;


