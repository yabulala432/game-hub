import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}
const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box width={"100%"} height={'400'} borderRadius={'30px'} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
