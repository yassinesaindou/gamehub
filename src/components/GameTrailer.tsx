import { Box, Heading, Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
export default function GameTrailer({ gameId }: Props) {
  const { data, isLoading, error } = useTrailers(gameId);
  if (isLoading) return <Spinner />;
  if (error) throw error;

  const first = data?.results[0];
  if (!first) return null;

  return (
    <Box marginTop={10}>
      <Heading  marginBottom={5} as="h3">Game Trailer</Heading>

      <video controls src={first?.data[480]} poster={first?.preview}></video>
    </Box>
  );
}
