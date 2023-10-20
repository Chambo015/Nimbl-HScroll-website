import axios from 'axios';

export interface ITweets {
  "url": string,
  "author_name": string,
  "author_url": string,
  "html": string,
  "width": number,
  "height": number | null,
  "type": string,
  "cache_age": string,
  "provider_name": string,
  "provider_url": string,
  "version": string
}

const useTwitterPosts = () => {
    const handleApiPost = async (endpoint: string, body: any) => {
        const result = await axios.post<ITweets>(endpoint, body, {
            headers: {
                "Content-Type": "application/json",
            },
  
        });
        return result.data;
    };

    const body = {
      url: "https://twitter.com/nimbltv/status/1702230452373745826",
    };

    const getPost = async (): Promise<ITweets> => {
      return await handleApiPost('https://api.nimbl.tv/ru/api/main/tweets/', body)
     }

     return {getPost}
    
};

export default useTwitterPosts;
