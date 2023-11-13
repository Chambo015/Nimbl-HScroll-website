import { ILeaderboardUser } from "@/types";
import axios from 'axios';

const useLeaderboard = () => {
  const fetchLeaderboard = async ({limit, page}: {limit: number, page: number} = {limit: 100, page: 1}) => {
    const offset = (page - 1) * limit
    const response = await axios.get<{count: number; next: string | null; results: ILeaderboardUser[]}>(`https://api.nimbl.tv/en/api/hunter/leaderboard/?limit=${limit}&offset=${offset}`, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = response.data.results;
    console.log('lead', data)
    return data;
  }

  return {
    fetchLeaderboard
  }
}

export default useLeaderboard;