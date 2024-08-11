import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export default function SortSelector() {
  return (
    <Menu>
      <MenuButton marginLeft={2} rightIcon={<BsChevronDown />} as={Button}>
        Sort By
      </MenuButton>
      <MenuList>
       <MenuItem>Relevance</MenuItem>
       <MenuItem>Date added</MenuItem>
       <MenuItem>Name</MenuItem>
       <MenuItem>Release Date</MenuItem>
       <MenuItem>Popularity</MenuItem>
       <MenuItem>Average Rating</MenuItem>
      </MenuList>
    </Menu>
  );
}
