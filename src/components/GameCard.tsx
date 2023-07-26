import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore";
import { getOptimizedImages } from "../services/get-optimized-images.ts";
import Emoji from "./Emoji.tsx";

interface GameCardProps {
  game: Game;
  name: string;
  background_image: string;
}

function GameCard({ game }: GameCardProps) {
  return (
    <Card>
      <Image src={getOptimizedImages(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore value={game.metacritic} />
        </HStack>
        <HStack justifyContent={'space-between'}>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <Emoji rating={game.rating_top} />
        </HStack>
      </CardBody>
    </Card>
  );
}
export default GameCard;
