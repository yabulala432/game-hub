import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
  const { data, error, loading } = useGames();
  const numberofSkeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error ? <Text>{error}</Text> : ""}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={"2px"}
        spacing={"15px"}
      >
        {loading &&
          numberofSkeletons.map(() => (
            <GameCardContainer>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => {
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

export default GameGrid;
