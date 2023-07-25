import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";

interface GameGridProps{
  gameQuery:GameQuery
}

function GameGrid({gameQuery}:GameGridProps) {
  const { data, error, loading } = useGames(gameQuery);
  // const 
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
          numberofSkeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => {
          return (
            <GameCardContainer key={game.id}>
              <GameCard  game={game}/>
            </GameCardContainer>
          );
        })}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
