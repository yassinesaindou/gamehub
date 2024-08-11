import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";

export default function GenreList() {
  const { data, isLoading } = useGenres();

  return !isLoading ? (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack
            _hover={{ bg: "gray.600", cursor: "pointer " }}
            gap={4}
            display="flex"
            height={50}
            borderRadius={5}>
            <Image
              boxSize={"30px"}
              borderRadius={5}
              src={genre.image_background}
            />
            <Text fontSize={"large"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  ) : (
    <Spinner/>
  );
}
