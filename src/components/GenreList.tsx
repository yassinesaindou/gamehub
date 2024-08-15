import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
export default function GenreList({selectedGenre, onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenres();
  if (error) return null;

  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
    <List>
      {data?.results.map((genre) => (
        <ListItem key={genre.id}>
          <HStack  gap={4} display="flex" height={50} borderRadius={5}>
            <Image
              boxSize={"30px"}
              borderRadius={5}
              src={genre.image_background}
              />
            <Button
              textAlign={"left"}
              whiteSpace={"normal"}
               
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              fontSize={"large"}
              variant={"link"}
              onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
                </>
  );
}
