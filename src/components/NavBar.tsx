import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitch from "./ColorSwitch";
import SearchInput from "./SearchInput";

interface SearchInputProps {
  onSearch: (game: string) => void;
}

const NavBar = ({onSearch}:SearchInputProps) => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"50px"} />
      <SearchInput onSearch={onSearch } />
      <ColorSwitch />
    </HStack>
  );
};

export default NavBar;
