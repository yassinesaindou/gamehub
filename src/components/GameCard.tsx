import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CrtiticScore from "./CrtiticScore";
import GameCardContainer from "./GameCardContainer";

interface Props {
  game: Game;
}
export default function GameCard({ game }: Props) {
  return (
    <GameCardContainer>
      <Card>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CrtiticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
}
