import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../hooks/useGenres";

interface GameGridProps{
  selectedGenre: Genres | null;
}

function GameGrid({selectedGenre}:GameGridProps) {
  const { data, error, loading } = useGames(selectedGenre);
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
