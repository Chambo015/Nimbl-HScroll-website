import {ref, onMounted} from "vue";
import {ILeaderboardUser} from "@/types";
import axios from "axios";

const useLeaderboard = ({first}: {first?: number}) => {
    const leaders = ref<ILeaderboardUser[] | []>([]);
    const page = ref<number>(1);
    const hasMore = ref<boolean>(true);
    const loading = ref<boolean>(false);
    const LIMIT = 100;

    const fetchLeaderboard = async (props: {limit: number; page: number} = {limit: 100, page: 1}) => {
        loading.value = true;
        const offset = props.page ? (props.page - 1) * props.limit : 0;
        const response = await axios.get<{count: number; next: string | null; results: ILeaderboardUser[]}>(
            `https://api.nimbl.tv/en/api/hunter/leaderboard/?limit=${props.limit}&offset=${offset}`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
        hasMore.value = response.data.next !== null;
        const data = response.data.results;
        leaders.value = [...leaders.value, ...data];
    };

    const fetchNextLeaderboard = async () => {
        if (loading.value === false && hasMore.value === true && !first) {
            loading.value = true;
            page.value += 1;
            await fetchLeaderboard({page: page.value, limit: LIMIT});
            setTimeout(() => {
                loading.value = false;
            }, 500);
        }
    };

    onMounted(async () => {
        first ? await fetchLeaderboard({limit: first, page: 1}) : await fetchLeaderboard();
        loading.value = false;
    });

    return {
      loading,
        fetchNextLeaderboard,
        leaders,
    };
};

export default useLeaderboard;
