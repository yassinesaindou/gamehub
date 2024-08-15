import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
 
 
import usePlatform, { Platform } from "../hooks/usePlatform";

interface selectedPlatform {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
export default function PlatformSelector({
  onSelectPlatform,
  selectedPlatform,
}: selectedPlatform) {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown />} as={Button}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
