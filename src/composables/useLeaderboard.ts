import { ILeaderboardUser } from "@/types";

const useLeaderboard = () => {
  const fetchLeaderboard = async () => {
    const response = await fetch("https://api.nimbl.tv/en/api/hunter/leaderboard/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json() as ILeaderboardUser[];
    console.log('lead', data)
    return data;
  }

  return {
    fetchLeaderboard
  }
}

export default useLeaderboard;