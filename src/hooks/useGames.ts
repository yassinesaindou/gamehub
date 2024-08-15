 
import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatform";
 


export interface Game {
  id: number;
  metacritic: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}
function useGames(gameQuery:GameQuery) {
  const {data, error,isLoading }=useQuery<FetchResponse<Game>, Error>({ 
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient.get<FetchResponse<Game>>('/games', {
       
        params: {
                  genres: gameQuery.genre?.id,
                  platforms: gameQuery.platform?.id,
                  ordering: gameQuery.sortOrder,
                  search: gameQuery.searchText,
                } 
      
    }).then(res => res.data)
  })

  return {data, error, isLoading}
}
 

export default useGames;
