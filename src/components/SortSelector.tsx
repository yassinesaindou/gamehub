import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props{
    onSelectSortOrder: (sortOrder: string) => void,
    sortOrder: string
}
export default function SortSelector({onSelectSortOrder, sortOrder}:Props) { 
    const sortOrders = [
        {value:'', label:'Relevance'},
        {value:'-added', label:'Date Added'},
        {value:'name', label:'Name'},
        {value:'-released', label:'Relese Date'},
        {value:'-metacritic', label:'Popularity'},
        {value:'-rating', label:'Average Rating'},
    ]
  return (
    <Menu>
      <MenuButton marginLeft={2} rightIcon={<BsChevronDown />} as={Button}>
        Sort By : {sortOrders.map( param => param.value === sortOrder? param.label : null)}
      </MenuButton>
      <MenuList >
      {sortOrders.map( param => <MenuItem key={param.value} value={param.value} onClick={() => onSelectSortOrder(param.value)} >{param.label}</MenuItem>)}
      </MenuList>
    </Menu>
  );
}
