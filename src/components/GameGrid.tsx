import { UnorderedList, Text, ListItem, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

export default function GameGrid() {
  const { games, error, loading } = useGames();
  const numberofSkeletons = [1, 2,3,4,5,6];
  return (
    <>
      {error ? <Text>{error}</Text> : ""}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={10}
      >
        {loading && numberofSkeletons.map(num=>(<GameCardSkeleton />))}
        {games.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </>
  );
}
