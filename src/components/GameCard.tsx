import { Card, Image, CardBody, Heading } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface GameCardProps {
  game: Game;
  name: string;
  background_image: string;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Card borderRadius={30} overflow={'hidden'}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={'1xl'}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}
