import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";

interface Props{
  onSelectGenre :(genre:Genre) => void
}
export default function GenreList({ onSelectGenre }: Props) {
  

  const { data, isLoading, error } = useGenres();
  if (error) return null;

  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack gap={4} display="flex" height={50} borderRadius={5}>
            <Image
              boxSize={"30px"}
              borderRadius={5}
              src={genre.image_background}
            />
            <Button
              fontSize={"large"}
              variant={"link"}
              onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
