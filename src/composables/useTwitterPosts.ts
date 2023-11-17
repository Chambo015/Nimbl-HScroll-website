import { onMounted, ref, nextTick } from "vue";
import axios from "axios";
import {ITweets} from "@/types";

const useTwitterPosts = () => {
    const pageNumber = ref<number>(0);
    const tweetPosts = ref<ITweets[]>([]);
    const hasMore = ref<boolean>(true);
    const loading = ref<boolean>(false);
    const LIMIT = 10;

    onMounted(async () => {
        await fetchNimblTweetPosts()
    });

    const fetchNimblTweetPosts = async (): Promise<void> => {
        const endpoint = `https://api.nimbl.tv/ru/api/main/tweets/?search=nimbltv`;
        const response = await axios.get<{count: number; next: string | null; results: ITweets[]}>(endpoint, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        tweetPosts.value = [...response.data.results, ...tweetPosts.value]
    };

    const fetchTweetPosts = async (pageNumber: number): Promise<void> => {
        const limit = LIMIT;
        const offset = (pageNumber - 1) * limit;
        const endpoint = `https://api.nimbl.tv/ru/api/main/tweets/?offset=${offset}&limit=${limit}`;
        const response = await axios.get<{count: number; next: string | null; results: ITweets[]}>(endpoint, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        hasMore.value = response.data.next !== null;
        tweetPosts.value = [...tweetPosts.value, ...response.data.results]
    };

    const fetchNextPosts = async () => {
        if(loading.value == false && hasMore.value == true) {
            console.log("fetchNextPosts", loading.value)
            console.log("loading", true)
            loading.value = true;
            pageNumber.value += 1
            await fetchTweetPosts(pageNumber.value);
            await nextTick(() => {
                if (window.twttr && window.twttr.widgets) {
                  window.twttr.widgets.load();
                }
            });
              
            setTimeout(() => {
                console.log("loading", false)
                loading.value = false;
            }, 1000);
        }
    }

    return {
        tweetPosts,
        fetchNextPosts,
    };
};

export default useTwitterPosts;