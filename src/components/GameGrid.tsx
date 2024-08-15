import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery
} 


export default function GameGrid({gameQuery}:Props) {
  const { data, error, isLoading,isFetchingNextPage,fetchNextPage,hasNextPage } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 4, 5, 1, 22, 3, 2, 2, 2, 3];

  return (
    <Fragment>
      {error && <Text>{error.message }</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        placeItems={"center"}
        padding={5}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data?.pages.map((page, index) => <React.Fragment key={index}>
          {page.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
        </React.Fragment>)}
        
      </SimpleGrid>

      {hasNextPage&& <Button margin={5} onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>Load More</Button>}
    </Fragment>
  );
}
