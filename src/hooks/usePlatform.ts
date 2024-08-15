import { useQuery } from "@tanstack/react-query";
import {  default as APICLient } from "../services/api-client";

export interface Platform {
  name: string;
  id: number;
  slug: string;
}
const apiClient = new APICLient<Platform>('/platforms/lists/parents');
export  default function usePlatform() {
    const {data, error}=useQuery({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll
    })
    return {data, error}
}
// const usePlatform = () =>
//   useQuery({
//     queryKey: ["platforms"],
//     queryFn: () =>
//       apiClient
//         .get<FetchResponse<Platform>>("/platforms/lists/parents")
//         .then((res) => res.data),
// //   });

// export default usePlatform;
