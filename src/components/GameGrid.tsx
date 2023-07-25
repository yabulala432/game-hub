import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

export default function GameGrid() {
  const { games, error, loading } = useGames();
  const numberofSkeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error ? <Text>{error}</Text> : ""}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={10}
      >
        {loading &&
          numberofSkeletons.map(() => (
            <GameCardContainer>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => {
          return (
            <GameCardContainer>
              <GameCard key={game.id} game={game} />{" "}
            </GameCardContainer>
          );
        })}
      </SimpleGrid>
    </>
  );
}
