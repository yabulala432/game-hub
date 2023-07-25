import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import { getOptimizedImages } from "../services/get-optimized-images";
import GenreSkeleton from "./GenreSkeleton";

interface GenreListProps{
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenreList = ({selectedGenre,onSelectGenre}:GenreListProps) => {
  const { data, loading } = useGenres();
  const numOfGenres = [1, 2, 3, 4, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8];
  if (loading)
    return numOfGenres.map(() => (
      <List padding={5}>
        <ListItem>
          <GenreSkeleton />
        </ListItem>
      </List>
    ));
  return (
    <List padding={5}>
      {data.map((genre) => {
        return (
          <ListItem marginY={4} key={genre.id}>
            <HStack>
              <Image
                borderRadius={"20px"}
                boxSize={"50px"}
                src={getOptimizedImages(genre.image_background)}
              />
              <Button fontWeight={genre.id===selectedGenre?.id ? 'bold': 'normal'}
                onClick={() => {
                onSelectGenre(genre);
              }} variant={'link'} fontSize="lg">{genre.name}</Button>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
