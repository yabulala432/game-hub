import { Skeleton, SkeletonText, HStack } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <>
      <HStack>
              <Skeleton borderRadius={"30px"} width={"60px"} height={"60px"} />
              <SkeletonText width={"50px"}/>
      </HStack>
    </>
  );
};

export default GenreSkeleton;
