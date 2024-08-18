 
import { useQuery } from "@tanstack/react-query";
import APICLient from "../services/api-client";
 
import { Platform } from "./usePlatforms";

interface Game {
    id: number;
    slug: string;
    metacritic: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    rating_top: number;
    description_raw: string;
  }
const apiClient = new APICLient<Game>("/games")
function useGame(slug: string) {
    return useQuery({
    queryKey: ["games", slug],
        queryFn: () => apiClient.get(slug),
    });

}

export default useGame;
