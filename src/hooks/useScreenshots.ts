import { useQuery } from "@tanstack/react-query";
import APICLient from "../services/api-client";

interface Screenshot {
    id: number,
    image: string,
    width: number,
    height: number
}


export default  function useScreenshots(gameId: number) {
    const apiClient = new APICLient<Screenshot>(`/games/${gameId}/screenshots`);

    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: apiClient.getAll
    })
}