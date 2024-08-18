import { SimpleGrid, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGame"
import CrtiticScore from "./CrtiticScore"
import DefinitionItem from "./DefinitionItem"

interface Props{
    game:Game
}
export default function GameAttributes({ game }: Props
) {

    return (
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={3} as={"dl"}>
        <DefinitionItem term="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Metacritic">
          <CrtiticScore score={game.metacritic} />
        </DefinitionItem>

        <DefinitionItem term="Genres">
          {game.genres?.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Publishers">
          {game.publishers?.map((p) => (
            <Text key={p.id}>{p.name}</Text>
          ))}
        </DefinitionItem>
      </SimpleGrid>
    )
}
