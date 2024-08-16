import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

 

export default function GameGrid() {
   
  const {
    data,
    error,
    isLoading,

    fetchNextPage,
    hasNextPage,
  } = useGames( );
  const skeletons = [1, 2, 3, 4, 5, 6, 4, 5, 1, 22, 3, 2, 2, 2, 3];

  const fetchGamesCount =
    data?.pages.reduce((a, c) => a + c.results.length, 0) || 0;
  return (
    <Fragment>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={fetchGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={3}
          placeItems={"center"}
          padding={5}>
          {isLoading &&
            skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Fragment>
  );
}
