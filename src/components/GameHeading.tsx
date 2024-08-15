import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}
export default function GameHeading({ gameQuery }: Props) {
   

  const platform = usePlatform(gameQuery.platformId);

  const genre = useGenre(gameQuery.genreId)
  const heading = `${platform?.name || ""}  ${genre?.name || ""} Games`;
  return (
    <Heading as={"h1"} marginY={8}>
      {heading}
    </Heading>
  );
}
