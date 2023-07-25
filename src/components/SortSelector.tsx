import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const SortSelector = () => {
  return (
    <Menu>
          <MenuButton as={"button"}>
              Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Data Added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average Rating</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default SortSelector