import { Menu, MenuList, MenuButton, MenuItem } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";

interface PlatformSelectorProps{
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform| null;
}

const PlatformSelector = ({ selectedPlatform,onSelectPlatform }:PlatformSelectorProps) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={"button"}>{selectedPlatform?.name || 'Platform'}</MenuButton>
      <MenuList>
        {data.map(platform => {
          return <MenuItem onClick={() => {
            onSelectPlatform(platform);
          }} key={platform.id}>{platform.name}</MenuItem>
        }) }
        
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
