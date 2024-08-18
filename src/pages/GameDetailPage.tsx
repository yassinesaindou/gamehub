import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

export default function GameDetailPage() {
  const { slug } = useParams();
  console.log(slug);

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} padding={5} spacing={5}>
      <GridItem >
        <Heading>{game.name}</Heading>
        <ExpandableText description={game.description_raw} limit={300} />
        <GameAttributes game={game} />
      </GridItem>

      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
}
