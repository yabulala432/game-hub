import { UnorderedList, Text, ListItem, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

export default function GameGrid() {
  const{games,error} =  useGames();
  return (
    <>
      {error?<Text>{error}</Text>:'' }
      <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}}
        padding={10}
        spacing={10}>
        {games.map((game) => {
          return <GameCard key={game.id} game={game}/>;
        })}
      </SimpleGrid>
    </>
  );
}
