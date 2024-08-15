import { useQuery } from "@tanstack/react-query";
 
import apiClient, { FetchResponse } from "../services/api-client";

interface Platform {
  name: string;
  id: number;
  slug: string;
}

export  default function usePlatform() {
    const {data, error}=useQuery({
        queryKey: ['platforms'],
        queryFn: () => apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(res => res.data)
    })
    return {data, error}
}
 