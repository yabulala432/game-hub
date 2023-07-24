import { UnorderedList, Text, ListItem } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

export default function GameGrid() {
  const{games,error} =  useGames();
  return (
    <>
      {error?<Text>{error}</Text>:'' }
      <UnorderedList>
        {games.map((game) => {
          return <ListItem key={game.id}>{game.name}</ListItem>;
        })}
      </UnorderedList>
    </>
  );
}
