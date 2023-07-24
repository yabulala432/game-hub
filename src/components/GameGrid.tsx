import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { UnorderedList, Text, ListItem } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
          setGames(res.data.results);
        //   console.log(games);
          
      })
      .catch((err) => {
        setError(err.message);
      });
  },[setGames]);
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
