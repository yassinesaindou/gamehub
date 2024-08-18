
import { useQuery } from "@tanstack/react-query";
import APICLient from "../services/api-client";

interface Trailer {
  name: string;
  id: number;
  preview: string;
  data: {
    480: string;
    max: string;
  };
}
export default function useTrailers(id: number) {
  const apiClient = new APICLient<Trailer>(`/games/${id}/movies`);
  return useQuery({
    queryKey: ["trailers", id],
    queryFn: apiClient.getAll,
  });
}
