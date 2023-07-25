import { HStack,Text, List, ListItem,Image } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { getOptimizedImages } from "../services/get-optimized-images";

const GenreList = () => {
  const { data } = useGenres();
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
