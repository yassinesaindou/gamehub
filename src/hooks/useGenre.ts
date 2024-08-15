import { useQuery } from "@tanstack/react-query";
import {   default as APICLient } from "../services/api-client";
 

export interface Genre {
  id: number;
  image_background: string;
  name: string;
}
 const apiClient  = new APICLient<Genre>('/genres')
const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime:24*60*60*1000
});

export default useGenres;
