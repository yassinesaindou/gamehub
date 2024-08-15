import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}
export default function GameHeading({ gameQuery }: Props) {
  const { data: genres } = useGenres();

  const { data: platforms } = usePlatform();

  const platform = platforms?.results.find( p => p.id === gameQuery.platformId)

  const genre = genres?.results.find((r) => r.id === gameQuery.genreId);
  const heading = `${platform?.name || ""}  ${
    genre?.name || ""
  } Games`;
  return (
    <Heading as={"h1"} marginY={8}>
      {heading}
    </Heading>
  );
}
