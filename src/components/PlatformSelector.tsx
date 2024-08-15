import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface selectedPlatform {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}
export default function PlatformSelector({
  onSelectPlatform,
  selectedPlatformId,
}: selectedPlatform) {
  const { data, error } = usePlatforms();

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
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
