import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface GameCardProps {
  game: Game;
  name: string;
  background_image: string;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Card borderRadius={30} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore value={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}
