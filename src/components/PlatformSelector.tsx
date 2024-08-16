import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

 
export default function PlatformSelector( ) {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)

  const onSelectPlatformId = useGameQueryStore(s => s.setPlatformId)
  
  const selectedPlatform = usePlatform(selectedPlatformId)

  if (error) return null;
  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown />} as={Button}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatformId(platform.id)}
            key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
