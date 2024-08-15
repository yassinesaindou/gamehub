import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
 

export interface Genre {
  id: number;
  image_background: string;
  name: string;
}
 
const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then((response) => response.data),
  staleTime:24*60*60*1000
});

export default useGenres;
