import { HStack, Text, List, ListItem, Image } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { getOptimizedImages } from "../services/get-optimized-images";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
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
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
