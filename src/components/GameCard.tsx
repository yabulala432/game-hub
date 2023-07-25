import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import {getOptimizedImages} from "../services/get-optimized-images.ts";

interface GameCardProps {
  game: Game;
  name: string;
  background_image: string;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Card>
      <Image src={getOptimizedImages(game.background_image)}></Image>
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
