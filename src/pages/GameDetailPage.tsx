import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";

export default function GameDetailPage() {
  const { slug } = useParams();
  console.log(slug);

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <Box padding={5}>
      <Heading>{game.name}</Heading>
      <ExpandableText description={game.description_raw} limit={300} />

      <GameAttributes game={game} />
    </Box>
  );
}
