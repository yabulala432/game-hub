import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface SortSelectorProps{
    onSelectSortOrder: (sortOrder: string) => void
    sortOrder: string;
}

const SortSelector = ({onSelectSortOrder,sortOrder}:SortSelectorProps) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Data" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Rating" },
  ];
    const currentSortOrder = sortOrders.find(order => {
       return (order.value === sortOrder);
    })
    
  return (
    <Menu>
      <MenuButton as={"button"}>Order by: {currentSortOrder?.label || 'Relevance'}</MenuButton>
      <MenuList>
        {sortOrders.map((order) => {
          return (
              <MenuItem onClick={()=>onSelectSortOrder(order.value)}
                  key={order.value} value={order.value}>
              {order.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
