import { IBoardTask, ICompletedTask, IUserStorage, defaultUser } from "@/types";
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

        const data = await response.json() as ICompletedTask[];

        return data;
    }

    const fetchTasks = async () => {
        loading.value = true

        const allTasks = await fetchAllTasks()

        if(!user.value.token) {
            loading.value = false
            return allTasks;
        } 

        const userCompletedTaskIds = await fetchUserCompletedTasks(user.value.token);

        userCompletedTaskIds.forEach(completedTask => {
            const idDoneTask =  allTasks.findIndex(task => task.id === completedTask.action_type)
            if(idDoneTask < 0) return
            allTasks[idDoneTask].is_completed = true  
        })

        loading.value = false

        return allTasks
    }

    return {
        fetchTasks,
        loading
    };
};

export default useBoardTasks;


