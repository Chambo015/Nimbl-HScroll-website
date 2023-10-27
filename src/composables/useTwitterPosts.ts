import {ITweets} from "@/types";
import axios from "axios";

const useTwitterPosts = () => {
    const handleApiPost = async (endpoint: string) => {
        const result = await axios.get<{count: number; results: ITweets[]}>(endpoint, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return result.data.results;
    };

    const fetchTweetPosts = async (): Promise<ITweets[]> => {
        return await handleApiPost("https://api.nimbl.tv/ru/api/main/tweets/");
    };

    return {fetchTweetPosts};
};

export default useTwitterPosts;
