import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}
const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box width={"300"} borderRadius={30} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
