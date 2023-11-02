import {ITweets} from "@/types";
import axios from "axios";
import { onMounted, ref, watch } from "vue";

const useTwitterPosts = () => {
    const pageNumber = ref<number>(1);
    const tweetPosts = ref<ITweets[]>([]);
    let loading = false;

    const handleApiPost = async (endpoint: string) => {
        loading = false;
        const result = await axios.get<{count: number; results: ITweets[]}>(endpoint, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        loading = true;
        return result.data.results as ITweets[];
    };

    const fetchTweetPosts = async (): Promise<ITweets[]> => {
        return await handleApiPost("https://api.nimbl.tv/ru/api/main/tweets?search=nimbltv");
    }

    onMounted(async () => {
        tweetPosts.value = await fetchTweetPostsByPageNumber(pageNumber.value);
    });

    watch(pageNumber, async () => {
        const data = await fetchTweetPostsByPageNumber(pageNumber.value);
        tweetPosts.value = [...tweetPosts.value, ...data]
    })

    const fetchTweetPostsByPageNumber = async (pageNumber: number): Promise<ITweets[]> => {
        return await handleApiPost(`https://api.nimbl.tv/ru/api/main/tweets/?offset=${(pageNumber - 1) * 10}?limit=10`);
    };

    const fetchNextPosts = async () => {
        if(loading == true) {
            return ;
        }
        if(loading == false) {
            pageNumber.value += 1
        }
    }

    return {
        tweetPosts,
        fetchTweetPosts,
        fetchNextPosts,
    };
};

export default useTwitterPosts;
