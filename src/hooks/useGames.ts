import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  metacritic: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}


const useGames = (selectedGenre: Genre | null) => useData<Game>("/games", {
  params: {
  genres:selectedGenre?.id
}},[selectedGenre]);

export default useGames;
