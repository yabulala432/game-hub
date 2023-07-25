import { Menu, MenuList, MenuButton, MenuItem } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatform";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={"button"}>Platforms</MenuButton>
      <MenuList>
        {data.map(platform => {
          return <MenuItem key={platform.id}>{platform.name}</MenuItem>
        }) }
        
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
