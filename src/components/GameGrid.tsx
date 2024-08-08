import { SimpleGrid, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

export default function GameGrid() {
  const {games, error} = useGames();

  return (
    <Fragment>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} spacing={5} padding={10}>
        {games.map((game) => (
          <GameCard  key={game.id} game={game}/>
        ))}
      </SimpleGrid>
      ;
    </Fragment>
  );
}
